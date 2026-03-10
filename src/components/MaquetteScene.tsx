"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

function Tower({
  position,
  size,
  color,
}: {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
}) {
  return (
    <mesh castShadow receiveShadow position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} roughness={0.55} metalness={0.12} />
    </mesh>
  );
}

function Roof({
  position,
  size,
  color,
}: {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
}) {
  return (
    <mesh castShadow receiveShadow position={position}>
      <cylinderGeometry args={[0, size[0], size[1], 4]} />
      <meshStandardMaterial color={color} roughness={0.45} metalness={0.2} />
    </mesh>
  );
}

function Tree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh castShadow>
        <cylinderGeometry args={[0.08, 0.12, 0.5, 10]} />
        <meshStandardMaterial color="#7a5a3a" roughness={0.7} />
      </mesh>
      <mesh castShadow position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.32, 18, 18]} />
        <meshStandardMaterial color="#57b93a" roughness={0.65} />
      </mesh>
    </group>
  );
}

function Scene() {
  const palette = {
    base: "#e8eef6",
    path: "#d3dbe6",
    house: "#f4f7fb",
    roof: "#2c6fb8",
    accent: "#57b93a",
    water: "#bcd9ea",
  };

  return (
    <group position={[0, -0.2, 0]}>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color={palette.base} roughness={0.9} />
      </mesh>

      <mesh receiveShadow position={[0, 0.01, 0]}>
        <boxGeometry args={[7.6, 0.12, 7.6]} />
        <meshStandardMaterial color={palette.house} roughness={0.75} />
      </mesh>

      <mesh receiveShadow position={[0, 0.03, 3.4]}>
        <boxGeometry args={[6.8, 0.08, 0.8]} />
        <meshStandardMaterial color={palette.path} roughness={0.9} />
      </mesh>

      <mesh receiveShadow position={[0, 0.05, -2.2]}>
        <boxGeometry args={[3.2, 0.05, 1.4]} />
        <meshStandardMaterial color={palette.path} roughness={0.8} />
      </mesh>

      <Tower position={[-2.2, 0.8, 0.8]} size={[1.2, 1.6, 1.2]} color={palette.house} />
      <Roof position={[-2.2, 1.75, 0.8]} size={[0.8, 0.6, 0.8]} color={palette.roof} />

      <Tower position={[0, 1.1, 0]} size={[1.8, 2.2, 1.4]} color={palette.house} />
      <Roof position={[0, 2.35, 0]} size={[1.2, 0.7, 1.2]} color={palette.roof} />

      <Tower position={[2.1, 0.7, -0.6]} size={[1.1, 1.4, 1.1]} color={palette.house} />
      <Roof position={[2.1, 1.55, -0.6]} size={[0.75, 0.55, 0.75]} color={palette.roof} />

      <mesh receiveShadow position={[2.6, 0.12, 2.2]}>
        <boxGeometry args={[1.2, 0.2, 2]} />
        <meshStandardMaterial color={palette.water} roughness={0.2} metalness={0.05} />
      </mesh>

      <Tree position={[-3.1, 0.3, 1.7]} />
      <Tree position={[-3.4, 0.3, -0.8]} />
      <Tree position={[2.9, 0.3, -2.4]} />
      <Tree position={[3.2, 0.3, 1.1]} />
      <Tree position={[1.2, 0.3, 3.1]} />
    </group>
  );
}

function CameraRig({
  view,
  controlsRef,
}: {
  view: "angle" | "top" | "courtyard";
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
}) {
  const { camera } = useThree();

  const positions = useMemo(
    () => ({
      angle: [6, 5, 6],
      top: [0, 9, 0.01],
      courtyard: [0, 2.4, 7],
    }),
    []
  );

  useEffect(() => {
    const target = view === "courtyard" ? [0, 0.5, 0] : [0, 0, 0];
    const [x, y, z] = positions[view];
    camera.position.set(x, y, z);
    camera.lookAt(target[0], target[1], target[2]);
    if (controlsRef.current) {
      controlsRef.current.target.set(target[0], target[1], target[2]);
      controlsRef.current.update();
    }
  }, [camera, controlsRef, positions, view]);

  return null;
}

export default function MaquetteScene() {
  const [mode, setMode] = useState<"day" | "sunset" | "night">("day");
  const [view, setView] = useState<"angle" | "top" | "courtyard">("angle");
  const controlsRef = useRef<OrbitControlsImpl | null>(null);

  const lightSettings = useMemo(
    () => ({
      day: { ambient: 0.75, directional: 1.2, color: "#ffffff", background: "#eaf3ff" },
      sunset: { ambient: 0.55, directional: 0.95, color: "#ffd2a0", background: "#f6e2cf" },
      night: { ambient: 0.3, directional: 0.5, color: "#8fb3ff", background: "#0b1020" },
    }),
    []
  );

  return (
    <div className="relative h-full w-full">
      <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
        {([
          ["day", "Jour"],
          ["sunset", "Crépuscule"],
          ["night", "Nuit"],
        ] as const).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setMode(value)}
            className={`slide-button ${mode === value ? "active" : ""}`}
          >
            {label}
          </button>
        ))}
        {([
          ["angle", "Vue angle"],
          ["courtyard", "Vue cour"],
          ["top", "Vue dessus"],
        ] as const).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setView(value)}
            className={`slide-button ${view === value ? "active" : ""}`}
          >
            {label}
          </button>
        ))}
      </div>
      <Canvas shadows dpr={[1, 1.5]} camera={{ position: [6, 5, 6], fov: 38 }}>
        <color attach="background" args={[lightSettings[mode].background]} />
        <ambientLight intensity={lightSettings[mode].ambient} />
        <directionalLight
          intensity={lightSettings[mode].directional}
          position={[8, 8, 6]}
          castShadow
          color={lightSettings[mode].color}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        {mode === "night" ? (
          <pointLight intensity={0.8} position={[0, 3, 2]} color="#ffd39b" />
        ) : null}
        <Suspense fallback={null}>
          <Environment preset={mode === "night" ? "night" : "city"} />
        </Suspense>
        <Float speed={1.2} floatIntensity={0.2} rotationIntensity={0.15}>
          <Scene />
        </Float>
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          minDistance={5}
          maxDistance={10}
          minPolarAngle={0.6}
          maxPolarAngle={1.45}
        />
        <CameraRig view={view} controlsRef={controlsRef} />
      </Canvas>
    </div>
  );
}

