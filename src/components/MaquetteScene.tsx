"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

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
        <meshStandardMaterial color="#6f8254" roughness={0.65} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <group position={[0, -0.2, 0]}>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#e3d8c7" roughness={0.9} />
      </mesh>

      <mesh receiveShadow position={[0, 0.01, 0]}>
        <boxGeometry args={[7.6, 0.12, 7.6]} />
        <meshStandardMaterial color="#f2ece3" roughness={0.75} />
      </mesh>

      <mesh receiveShadow position={[0, 0.03, 3.4]}>
        <boxGeometry args={[6.8, 0.08, 0.8]} />
        <meshStandardMaterial color="#d9ccb9" roughness={0.9} />
      </mesh>

      <mesh receiveShadow position={[0, 0.05, -2.2]}>
        <boxGeometry args={[3.2, 0.05, 1.4]} />
        <meshStandardMaterial color="#c7b8a4" roughness={0.8} />
      </mesh>

      <Tower position={[-2.2, 0.8, 0.8]} size={[1.2, 1.6, 1.2]} color="#c9b6a0" />
      <Roof position={[-2.2, 1.75, 0.8]} size={[0.8, 0.6, 0.8]} color="#b07a4a" />

      <Tower position={[0, 1.1, 0]} size={[1.8, 2.2, 1.4]} color="#d2c0aa" />
      <Roof position={[0, 2.35, 0]} size={[1.2, 0.7, 1.2]} color="#8b6a4a" />

      <Tower position={[2.1, 0.7, -0.6]} size={[1.1, 1.4, 1.1]} color="#c2ad97" />
      <Roof position={[2.1, 1.55, -0.6]} size={[0.75, 0.55, 0.75]} color="#a06a3d" />

      <mesh receiveShadow position={[2.6, 0.12, 2.2]}>
        <boxGeometry args={[1.2, 0.2, 2]} />
        <meshStandardMaterial color="#bcd0d9" roughness={0.2} metalness={0.05} />
      </mesh>

      <Tree position={[-3.1, 0.3, 1.7]} />
      <Tree position={[-3.4, 0.3, -0.8]} />
      <Tree position={[2.9, 0.3, -2.4]} />
      <Tree position={[3.2, 0.3, 1.1]} />
      <Tree position={[1.2, 0.3, 3.1]} />
    </group>
  );
}

export default function MaquetteScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [6, 5, 6], fov: 38 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          intensity={1.1}
          position={[8, 8, 6]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={null}>
          <Environment preset="sunset" />
        </Suspense>
        <Float speed={1.2} floatIntensity={0.2} rotationIntensity={0.15}>
          <Scene />
        </Float>
        <OrbitControls
          enablePan={false}
          minDistance={5}
          maxDistance={10}
          minPolarAngle={0.6}
          maxPolarAngle={1.35}
        />
      </Canvas>
    </div>
  );
}

