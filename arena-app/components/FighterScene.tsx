"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Trail } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useArena } from "../lib/store";
import { fighterPose } from "../lib/pose";
const pairs = [
  [0, 1],
  [1, 2],
  [3, 4],
  [4, 5],
  [6, 7],
  [7, 8],
  [9, 10],
  [10, 11],
];
function Fighter({ active, low }: { active: boolean; low: boolean }) {
  const bones = useRef<(THREE.Mesh | null)[]>([]),
    joints = useRef<(THREE.Mesh | null)[]>([]),
    gloves = useRef<(THREE.Mesh | null)[]>([]),
    root = useRef<THREE.Group>(null),
    phase = useRef(0),
    last = useRef(-1);
  const { invalidate } = useThree();
  const vectors = useMemo(
    () => ({
      a: new THREE.Vector3(),
      b: new THREE.Vector3(),
      up: new THREE.Vector3(0, 1, 0),
      delta: new THREE.Vector3(),
    }),
    [],
  );
  useEffect(() => useArena.subscribe(() => invalidate()), [invalidate]);
  useFrame((_, dt) => {
    const state = useArena.getState();
    if (last.current !== state.technique) {
      phase.current = 0;
      last.current = state.technique;
    }
    if (active) phase.current += Math.min(dt, 0.05) * state.speed;
    const pose = fighterPose(state.technique, phase.current);
    if (root.current) root.current.rotation.y = -0.28 + pose.turn;
    pairs.forEach(([a, b], i) => {
      const mesh = bones.current[i];
      if (!mesh) return;
      vectors.a.fromArray(pose.points[a]);
      vectors.b.fromArray(pose.points[b]);
      vectors.delta.subVectors(vectors.b, vectors.a);
      mesh.position.copy(vectors.a).add(vectors.b).multiplyScalar(0.5);
      mesh.quaternion.setFromUnitVectors(
        vectors.up,
        vectors.delta.clone().normalize(),
      );
      mesh.scale.y = vectors.delta.length();
    });
    pose.points.forEach((p, i) => joints.current[i]?.position.fromArray(p));
    gloves.current[0]?.position.fromArray(pose.points[2]);
    gloves.current[1]?.position.fromArray(pose.points[5]);
    gloves.current[2]?.position.fromArray(pose.points[11]);
  });
  return (
    <group ref={root} position={[0, -1.2, 0]}>
      <mesh position={[0, 1.68, 0]} scale={[1, 0.95, 0.7]}>
        <capsuleGeometry args={[0.34, 0.55, 6, 12]} />
        <meshStandardMaterial
          color="#a6a6a6"
          metalness={0.75}
          roughness={0.28}
        />
      </mesh>
      <mesh position={[0, 2.33, 0]} scale={[0.88, 1.13, 0.9]}>
        <sphereGeometry args={[0.23, 16, 12]} />
        <meshStandardMaterial
          color="#a6a6a6"
          metalness={0.8}
          roughness={0.27}
        />
      </mesh>
      <mesh position={[0, 1.17, 0]} scale={[1, 0.7, 0.75]}>
        <sphereGeometry args={[0.38, 16, 12]} />
        <meshStandardMaterial color="#151515" roughness={0.6} />
      </mesh>
      {pairs.map((_, i) => (
        <mesh
          key={i}
          ref={(v) => {
            bones.current[i] = v;
          }}
        >
          <cylinderGeometry
            args={[i < 4 ? 0.095 : 0.13, i < 4 ? 0.1 : 0.15, 1, 12]}
          />
          <meshStandardMaterial
            color="#8b8e93"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      ))}
      {Array.from({ length: 12 }, (_, i) => (
        <mesh
          key={i}
          ref={(v) => {
            joints.current[i] = v;
          }}
        >
          <sphereGeometry args={[i < 6 ? 0.105 : 0.14, 12, 8]} />
          <meshStandardMaterial
            color="#27282b"
            metalness={0.6}
            roughness={0.36}
          />
        </mesh>
      ))}
      {[0, 1, 2].map((i) => (
        <Trail
          key={i}
          width={low ? 1 : 2.4}
          length={3.5}
          color="#ff1632"
          attenuation={(t) => t * t}
          decay={1.8}
        >
          <mesh
            ref={(v) => {
              gloves.current[i] = v;
            }}
            scale={i === 2 ? [0.65, 0.5, 1.3] : [0.95, 1, 0.95]}
          >
            <sphereGeometry args={[0.2, 16, 12]} />
            <meshStandardMaterial
              color="#c81015"
              metalness={0.3}
              roughness={0.3}
            />
          </mesh>
        </Trail>
      ))}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.8, 48]} />
        <meshStandardMaterial
          color="#222225"
          metalness={0.55}
          roughness={0.5}
        />
      </mesh>
      <mesh position={[0, 0.027, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.73, 1.75, 64]} />
        <meshBasicMaterial color="#c81015" />
      </mesh>
    </group>
  );
}
export default function FighterScene({
  active,
  low,
}: {
  active: boolean;
  low: boolean;
}) {
  return (
    <Canvas
      className="fighter-canvas"
      camera={{ position: [3, 1.2, 5.2], fov: 37 }}
      dpr={low ? 1 : [1, 1.5]}
      frameloop={active ? "always" : "demand"}
      gl={{ antialias: !low, alpha: true }}
    >
      <ambientLight intensity={0.8} />
      <hemisphereLight args={["#ffffff", "#281b21", 1.4]} />
      <directionalLight position={[3, 4, 5]} intensity={5} />
      <pointLight position={[-3, 2, 0]} intensity={32} color="#ff1430" />
      <pointLight position={[1, 3, -2]} intensity={45} color="#bed4ff" />
      <Fighter active={active} low={low} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0.7}
        maxPolarAngle={1.6}
        target={[0, 0.12, 0]}
      />
    </Canvas>
  );
}
