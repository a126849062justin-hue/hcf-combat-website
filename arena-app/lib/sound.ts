import { useArena } from "./store";
// Sound is opt in and independent of the shared two-track music player
export function installArenaSound() {
  let context: AudioContext | null = null,
    enabled = false,
    disposed = false,
    timer: ReturnType<typeof setInterval> | undefined;
  const scope = window as typeof window & {
    HCFArenaSound?: { toggle: () => void; state: () => boolean };
  };
  const notify = () =>
    window.dispatchEvent(
      new CustomEvent("hcfarenasoundchange", { detail: { enabled } }),
    );
  const tone = (
    hz: number,
    offset: number,
    duration: number,
    volume: number,
  ) => {
    if (!context || context.state !== "running") return;
    const o = context.createOscillator(),
      g = context.createGain(),
      t = context.currentTime + offset;
    o.type = "sine";
    o.frequency.setValueAtTime(hz, t);
    o.frequency.exponentialRampToValueAtTime(
      Math.max(25, hz * 0.55),
      t + duration,
    );
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(volume, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    o.connect(g).connect(context.destination);
    o.start(t);
    o.stop(t + duration + 0.01);
  };
  const air = (duration: number, volume: number, frequency: number) => {
    if (!context || context.state !== "running") return;
    const buffer = context.createBuffer(
        1,
        Math.ceil(context.sampleRate * duration),
        context.sampleRate,
      ),
      data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++)
      data[i] = (Math.random() * 2 - 1) * Math.sin((i / data.length) * Math.PI);
    const node = context.createBufferSource(),
      gain = context.createGain(),
      filter = context.createBiquadFilter();
    node.buffer = buffer;
    filter.type = "bandpass";
    filter.frequency.value = frequency;
    gain.gain.value = volume;
    node.connect(filter).connect(gain).connect(context.destination);
    node.start();
  };
  const bell = () => {
    tone(740, 0, 1, 0.012);
    tone(1110, 0, 0.8, 0.006);
  };
  const heartbeat = () => {
    if (!enabled || document.hidden) return;
    const id = useArena.getState().active;
    if (id === "arrival" || id === "arena") {
      tone(67, 0, 0.17, 0.045);
      tone(58, 0.22, 0.2, 0.028);
      air(1, 0.008, 520);
    }
  };
  const stop = () => {
    enabled = false;
    clearInterval(timer);
    if (context) void context.suspend();
    notify();
  };
  const toggle = () => {
    if (disposed) return;
    if (enabled) {
      stop();
      return;
    }
    try {
      context ??= new AudioContext();
      void context
        .resume()
        .then(() => {
          if (disposed) return;
          enabled = true;
          bell();
          heartbeat();
          clearInterval(timer);
          timer = setInterval(heartbeat, 1350);
          notify();
        })
        .catch(stop);
    } catch {
      stop();
    }
  };
  scope.HCFArenaSound = { toggle, state: () => enabled };
  window.dispatchEvent(new Event("hcfarenasoundready"));
  const unsubscribe = useArena.subscribe((state, previous) => {
    if (!enabled || document.hidden) return;
    if (
      state.active !== previous.active &&
      ["arena", "records", "begin"].includes(state.active)
    )
      bell();
    if (state.technique !== previous.technique) {
      tone(100, 0, 0.12, 0.03);
      air(0.12, 0.055, 360);
    }
  });
  const visibility = () => {
    if (document.hidden && context) void context.suspend();
    else if (enabled && context) void context.resume().catch(stop);
  };
  document.addEventListener("visibilitychange", visibility);
  const leave = (event?: PageTransitionEvent | Event) => {
    if (event && "persisted" in event && event.persisted) return;
    disposed = true;
    stop();
    void context?.close();
    context = null;
  };
  window.addEventListener("pagehide", leave);
  return () => {
    leave();
    unsubscribe();
    delete scope.HCFArenaSound;
    document.removeEventListener("visibilitychange", visibility);
    window.removeEventListener("pagehide", leave);
  };
}
