"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useArena } from "../lib/store";
const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 2.6, 13),
  new THREE.Vector3(0, 2.5, 8),
  new THREE.Vector3(-5.6, 3.5, 4.5),
  new THREE.Vector3(-7, 4.5, -2),
  new THREE.Vector3(-3.8, 4.1, -7),
  new THREE.Vector3(4.5, 4.6, -0.2),
]);
function Arena({ orbit }: { orbit: boolean }) {
  const gltf = useGLTF("/assets/arena/hcf-arena.glb", "/assets/arena/draco/");
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);
  const spot = useRef<THREE.SpotLight>(null);
  const { camera, pointer, invalidate } = useThree();
  const target = useMemo(() => new THREE.Vector3(), []);
  const look = useMemo(() => new THREE.Vector3(0, 1.7, -2), []);
  useEffect(() => {
    scene.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
    useArena.getState().set({ sceneReady: true });
    return useArena.subscribe(() => invalidate());
  }, [scene, invalidate]);
  useFrame((_, dt) => {
    const p = useArena.getState().tour;
    const left = scene.getObjectByName("DoorLeft"),
      right = scene.getObjectByName("DoorRight");
    const opening = THREE.MathUtils.smoothstep(p, 0, 0.17);
    if (left) left.position.x = -1.25 - opening * 2.45;
    if (right) right.position.x = 1.25 + opening * 2.45;
    if (!orbit) {
      curve.getPointAt(Math.min(0.999, p), target);
      target.x += pointer.x * 0.16;
      if (useArena.getState().motion)
        camera.position.lerp(target, 1 - Math.exp(-dt * 5));
      else camera.position.copy(target);
      camera.lookAt(look);
    }
    if (spot) {
      spot.current?.position.set(3 + pointer.x * 2.5, 6, 3 + pointer.y);
    }
  });
  return (
    <>
      <primitive object={scene} />
      <ambientLight intensity={0.65} />
      <hemisphereLight args={["#d4dcee", "#191315", 1.2]} />
      <spotLight
        ref={spot}
        color="#ecf0ff"
        position={[3, 6, 4]}
        intensity={260}
        angle={0.65}
        penumbra={0.5}
        distance={27}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight
        position={[-6, 4, -5]}
        color="#ff1832"
        intensity={95}
        distance={18}
      />
      <pointLight
        position={[5, 3, -9]}
        color="#b6d0ff"
        intensity={80}
        distance={18}
      />
      <directionalLight position={[0, 8, 8]} intensity={2.5} />
    </>
  );
}
function Atmosphere({ low }: { low: boolean }) {
  const fog = useRef<THREE.ShaderMaterial>(null);
  const points = useMemo(() => {
    const a = new Float32Array((low ? 24 : 90) * 3);
    for (let i = 0; i < a.length; i += 3) {
      a[i] = Math.sin(i * 17.2) * 9;
      a[i + 1] = 0.4 + ((i * 7) % 49) / 10;
      a[i + 2] = Math.cos(i * 13.1) * 10;
    }
    return a;
  }, [low]);
  useFrame(({ clock }) => {
    if (fog.current) fog.current.uniforms.uTime.value = clock.elapsedTime;
  });
  return (
    <>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#cfbfc0"
          size={0.022}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </points>
      <mesh position={[0, 0.19, -2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[19, 23]} />
        <shaderMaterial
          ref={fog}
          transparent
          depthWrite={false}
          side={THREE.DoubleSide}
          uniforms={{ uTime: { value: 0 } }}
          vertexShader={`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`}
          fragmentShader={`varying vec2 vUv;uniform float uTime;float noise(vec2 p){return sin(p.x*9.+sin(p.y*6.))*cos(p.y*11.+p.x);}void main(){float n=noise(vUv*3.+vec2(uTime*.018,0.))*.5+.5;float edge=sin(vUv.x*3.14159)*sin(vUv.y*3.14159);gl_FragColor=vec4(.42,.32,.34,n*edge*.12);}`}
        />
      </mesh>
      {[-3, 3].map((x) => (
        <mesh key={x} position={[x, 3.2, -2]}>
          <coneGeometry args={[2, 5.5, 24, 1, true]} />
          <shaderMaterial
            transparent
            depthWrite={false}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            vertexShader="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}"
            fragmentShader="varying vec2 vUv;void main(){gl_FragColor=vec4(.65,.68,.77,pow(vUv.y,2.)*.035);}"
          />
        </mesh>
      ))}
    </>
  );
}
function Monitor() {
  const count = useRef({ frames: 0, time: 0 });
  useFrame((_, dt) => {
    const s = count.current;
    s.frames++;
    s.time += dt;
    if (s.time > 4) {
      if (s.frames / s.time < 35) useArena.getState().set({ low: true });
      s.time = 0;
      s.frames = 0;
    }
  });
  return null;
}
export default function ArenaScene({
  active,
  low,
  orbit,
  failed,
}: {
  active: boolean;
  low: boolean;
  orbit: boolean;
  failed: () => void;
}) {
  return (
    <Canvas
      className="arena-canvas"
      camera={{ position: [0, 2.6, 13], fov: 55, near: 0.1, far: 70 }}
      dpr={low ? 1 : [1, 1.5]}
      shadows={!low}
      frameloop={active ? "always" : "demand"}
      gl={{
        antialias: !low,
        alpha: false,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#0d0d0d");
        gl.domElement.addEventListener("webglcontextlost", failed, {
          once: true,
        });
      }}
      fallback={<span className="scene-fallback">以靜態場景繼續探索</span>}
    >
      <fog attach="fog" args={["#151116", 16, 46]} />
      <Suspense fallback={null}>
        <Arena orbit={orbit} />
        <Atmosphere low={low} />
      </Suspense>
      <OrbitControls
        enabled={orbit}
        target={[0, 1.7, -2]}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={0.45}
        maxPolarAngle={1.55}
        minDistance={5}
        maxDistance={13}
      />
      <Monitor />
    </Canvas>
  );
}
