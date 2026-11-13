import './style.css'
import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
const RED = 0xc81015

/* ---------- WebGL support ---------- */
function hasWebGL(): boolean {
  try { const c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl'))) }
  catch { return false }
}
const webgl = hasWebGL()
if (!webgl) document.body.classList.add('no-webgl')

/* ---------- Smooth scroll (Lenis) + ScrollTrigger sync ---------- */
let lenis: Lenis | null = null
if (!reduce) {
  lenis = new Lenis({ duration: 1.1, smoothWheel: true })
  lenis.on('scroll', () => ScrollTrigger.update())
  gsap.ticker.add((t) => lenis!.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
}

/* ---------- 3D: procedural boxing glove (concept asset) ---------- */
let renderer: THREE.WebGLRenderer | null = null
let glove: THREE.Group | null = null
let camera: THREE.PerspectiveCamera
const pointer = { x: 0, y: 0 }

function buildGlove(): THREE.Group {
  const g = new THREE.Group()
  const leather = new THREE.MeshStandardMaterial({ color: RED, roughness: 0.42, metalness: 0.15, transparent: true, opacity: 1 })
  const leatherDark = new THREE.MeshStandardMaterial({ color: 0x8e0a0e, roughness: 0.5, metalness: 0.12, transparent: true, opacity: 1 })
  const white = new THREE.MeshStandardMaterial({ color: 0xf3f3f3, roughness: 0.6, metalness: 0.05, transparent: true, opacity: 1 })

  // main fist — rounded box, slightly squashed
  const fist = new THREE.Mesh(new RoundedBoxGeometry(2.1, 1.7, 1.6, 6, 0.55), leather)
  g.add(fist)
  // knuckle roll
  const roll = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 1.3, 8, 16), leather)
  roll.rotation.z = Math.PI / 2; roll.position.set(0, 0.55, 0.62)
  g.add(roll)
  // thumb
  const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.4, 0.7, 8, 16), leather)
  thumb.position.set(-1.0, -0.15, 0.5); thumb.rotation.z = 0.7; thumb.rotation.x = 0.3
  g.add(thumb)
  // cuff / wrist
  const cuff = new THREE.Mesh(new RoundedBoxGeometry(1.5, 1.2, 1.5, 5, 0.4), leatherDark)
  cuff.position.set(0, -1.25, -0.1); cuff.scale.set(1, 0.8, 1)
  g.add(cuff)
  // white brand band on cuff
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.82, 0.1, 10, 28), white)
  band.position.set(0, -1.25, -0.1); band.rotation.x = Math.PI / 2
  g.add(band)
  // subtle logo stud
  const stud = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.08, 24), white)
  stud.position.set(0, 0.1, 0.83); stud.rotation.x = Math.PI / 2
  g.add(stud)

  g.scale.setScalar(0)
  return g
}

function initThree() {
  const canvas = document.getElementById('scene') as HTMLCanvasElement
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
  const dpr = Math.min(window.devicePixelRatio || 1, innerWidth < 760 ? 1.6 : 2)
  renderer.setPixelRatio(dpr)
  renderer.setSize(innerWidth, innerHeight)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05

  const scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 100)
  camera.position.set(0, 0, 7.4)

  // lighting — dark room, white key + red rim
  scene.add(new THREE.HemisphereLight(0x20202a, 0x000000, 0.45))
  const key = new THREE.DirectionalLight(0xffffff, 2.6)
  key.position.set(4, 6, 5); scene.add(key)
  const rim = new THREE.PointLight(RED, 60, 40); rim.position.set(-5, 1, -3); scene.add(rim)
  const fill = new THREE.PointLight(0xff3b42, 22, 30); fill.position.set(5, -2, 4); scene.add(fill)

  glove = buildGlove()
  glove.position.set(0, 0, 0)
  scene.add(glove)

  // reveal glove on load
  gsap.to(glove.scale, { x: 1, y: 1, z: 1, duration: reduce ? 0.1 : 1.8, ease: 'expo.out', delay: 0.2 })
  gsap.from(glove.rotation, { y: -1.2, duration: reduce ? 0.1 : 2.2, ease: 'expo.out', delay: 0.2 })

  addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / innerWidth - 0.5)
    pointer.y = (e.clientY / innerHeight - 0.5)
  })
  addEventListener('resize', onResize)

  let last = performance.now()
  function loop(now: number) {
    const dt = Math.min((now - last) / 1000, 0.05); last = now
    const p = scrollProgress()
    if (glove) {
      // idle spin + scroll-driven rotation (concept "scroll camera")
      glove.rotation.y += dt * 0.25 + 0
      glove.rotation.y = glove.rotation.y // keep
      glove.rotation.x = THREE.MathUtils.lerp(glove.rotation.x, -0.1 + pointer.y * 0.3 + p * 0.6, 0.06)
      // recede + drift after hero so content stays readable
      const recede = Math.min(p * 2.2, 1)
      glove.position.z = THREE.MathUtils.lerp(glove.position.z, -recede * 3.2, 0.06)
      glove.position.x = THREE.MathUtils.lerp(glove.position.x, recede * 2.4, 0.06)
      glove.position.y = THREE.MathUtils.lerp(glove.position.y, recede * 1.1, 0.06)
      const op = 1 - Math.min(Math.max((p - 0.12) * 2.2, 0), 0.75)
      glove.traverse((o: any) => { if (o.material) o.material.opacity = op })
    }
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.8, 0.05)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -pointer.y * 0.5, 0.05)
    camera.lookAt(0, 0, 0)
    renderer!.render(scene, camera)
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)
}

function onResize() {
  if (!renderer) return
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix()
  renderer.setSize(innerWidth, innerHeight)
}

function scrollProgress(): number {
  const h = document.documentElement.scrollHeight - innerHeight
  return h > 0 ? Math.min(Math.max(scrollY / h, 0), 1) : 0
}

if (webgl) { try { initThree() } catch (e) { console.warn('3D init failed, fallback', e); document.body.classList.add('no-webgl') } }

/* ---------- GSAP reveals ---------- */
// hero intro timeline
const heroItems = gsap.utils.toArray<HTMLElement>('#act0 .rv')
if (reduce) gsap.set(heroItems, { opacity: 1, y: 0 })
else gsap.timeline({ delay: 0.5 }).to(heroItems, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', stagger: 0.16 })

// section reveals
gsap.utils.toArray<HTMLElement>('.act:not(#act0) .rv').forEach((el) => {
  if (reduce) { gsap.set(el, { opacity: 1, y: 0 }); return }
  gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 86%' } })
})

/* ---------- nav scroll state + active act + progress bar ---------- */
const nav = document.getElementById('nav')!
const fill = document.getElementById('scroll-fill')!
const actDots = Array.from(document.querySelectorAll<HTMLElement>('.nav-acts a'))
function onScrollUI() {
  nav.classList.toggle('sc', scrollY > 40)
  fill.style.width = (scrollProgress() * 100).toFixed(2) + '%'
}
addEventListener('scroll', onScrollUI, { passive: true }); onScrollUI()

document.querySelectorAll<HTMLElement>('.act').forEach((sec) => {
  ScrollTrigger.create({
    trigger: sec, start: 'top 55%', end: 'bottom 55%',
    onToggle: (self) => {
      if (!self.isActive) return
      const a = sec.getAttribute('data-act')
      actDots.forEach((d) => d.classList.toggle('on', d.getAttribute('data-act') === a))
    },
  })
})

// smooth anchor nav via lenis
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href')!; const t = document.querySelector(id)
    if (t) { e.preventDefault(); lenis ? lenis.scrollTo(t as HTMLElement, { offset: 0 }) : (t as HTMLElement).scrollIntoView({ behavior: 'smooth' }) }
  })
})

/* ---------- ACT 02 — personalized course selector ---------- */
type Goal = { en: string; title: string; desc: string; rec: string; video: string; tag: string }
const GOALS: Record<string, Goal> = {
  beginner: { en: 'ZERO TO ONE', title: '新手入門', desc: '完全沒基礎也能開始。新手泰拳從站架、步法與基本拳腿起步，零基礎友善、入門不對打。', rec: '建議路線：新手泰拳 → $400 首堂體驗 → 依程度加私教。', video: '/goal_start.mp4', tag: 'LV.1 新手泰拳' },
  fatloss: { en: 'BURN & BUILD', title: '減脂體能', desc: '拳腿循環 × 高強度間歇，一堂約 600–800 大卡。邊學技術邊爆汗，比跑步機更容易持續。', rec: '建議路線：泰拳燃脂 + 肌力體能，一週 2–3 次。', video: '/goal_shred.mp4', tag: '泰拳燃脂' },
  stress: { en: 'RELEASE', title: '紓壓興趣', desc: '把一天的壓力打進沙包。節奏感、專注與成就感，讓運動變成你期待的事。', rec: '建議路線：新手泰拳團課，先從每週一堂開始。', video: '/goal_release.mp4', tag: '團體課程' },
  skill: { en: 'REFINE', title: '技術精進', desc: '組合、距離、時機與情境攻防。把每個動作練對、練穩，看得到進步。', rec: '建議路線：中階泰拳 + 私人教練針對弱點加速。', video: '/goal_skill.mp4', tag: 'LV.2 中階泰拳' },
  spar: { en: 'LIVE ROUNDS', title: '實戰對練', desc: '護具下的自由技術對打，距離・時機・節奏的真實應用；需教練評估、指定裝備與當日確認。', rec: '建議路線：自由技術對打（週三／週五），需具備基礎。', video: '/goal_skill.mp4', tag: 'LV.3 自由技術對打' },
  defense: { en: 'PROTECT', title: '自我保護', desc: '建立距離感與基本反應，學會保護自己與重要的人。實用、不花俏。', rec: '建議路線：新手泰拳打底 + 私教情境練習。', video: '/goal_start.mp4', tag: '新手＋私教' },
  fighter: { en: 'THE ARENA', title: '選手培訓', desc: '邀請制專項與備賽訓練，技術、體能與複盤並進。為站上擂台做準備。', rec: '建議路線：選手班（邀請制）＋ 教練評估。', video: '/goal_shred.mp4', tag: 'ELITE 選手班' },
}
const vEl = document.getElementById('goalVideo') as HTMLVideoElement
const refs = {
  en: document.getElementById('goalEn')!, title: document.getElementById('goalTitle')!,
  desc: document.getElementById('goalDesc')!, rec: document.getElementById('goalRec')!,
  tag: document.getElementById('goalTag')!,
}
function setGoal(key: string) {
  const g = GOALS[key]; if (!g) return
  refs.en.textContent = g.en; refs.title.textContent = g.title; refs.desc.textContent = g.desc
  refs.rec.textContent = g.rec; refs.tag.textContent = g.tag
  if (vEl.getAttribute('data-src') !== g.video) {
    vEl.setAttribute('data-src', g.video); vEl.classList.remove('on')
    vEl.src = g.video; vEl.load()
    vEl.play().then(() => vEl.classList.add('on')).catch(() => vEl.classList.add('on'))
  }
  gsap.fromTo('.goal-copy > *', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .5, stagger: .05, ease: 'power2.out', overwrite: true })
}
document.querySelectorAll<HTMLButtonElement>('.chip').forEach((c) => {
  c.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach((x) => x.classList.remove('is-active'))
    c.classList.add('is-active'); setGoal(c.getAttribute('data-goal')!)
  })
})
setGoal('beginner')

// signal ready (for screenshot tooling)
;(window as any).__HCF_READY__ = true
