"use client";
import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import gsap from "gsap";

export default function Home() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black text-white">
      {/* 3D Sphere */}
      <Canvas className="absolute top-0 left-0 w-full h-full">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Sphere args={[1.2, 100, 200]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#00FFFF"
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>
      </Canvas>

      {/* Animated Text */}
      <h1 ref={textRef} className="relative text-5xl font-bold text-cyan-400">
        Welcome to Techphilia 8 🚀
      </h1>
      <p className="mt-4 text-lg text-gray-300">The Future is Here.</p>

      {/* Explore Events Button */}
      <button className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg shadow-lg transition-all">
        Explore Events
      </button>
    </main>
  );
}
