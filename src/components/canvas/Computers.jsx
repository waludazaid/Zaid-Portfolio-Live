import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const groupRef = useRef(); // Pure model ka reference

  // Animation ke liye state
  const [assembled, setAssembled] = useState(false);

  useEffect(() => {
    // Model ke har ek chhote part (Mesh) ko dhoondo
    computer.scene.traverse((child) => {
      if (child.isMesh) {
        // Agar pehli baar load ho raha hai, toh original position save kar lo
        if (!child.userData.originalPos) {
          child.userData.originalPos = child.position.clone();
          
          // HAR PART KO ALAG DISHA MEIN BHEJO (EXPLOSION EFFECT) 💥
          // Randomly X, Y, Z decide karo
          const randomX = (Math.random() - 0.5) * 50; // Left-Right
          const randomY = (Math.random() - 0.5) * 50; // Up-Down
          const randomZ = (Math.random() - 0.5) * 50; // Aage-Peeche

          child.position.set(randomX, randomY, randomZ);
        }
      }
    });
    
    // Thoda delay taaki load hote hi animation start ho
    setTimeout(() => {
      setAssembled(true);
    }, 100);
  }, [computer.scene]);

  // Ye loop har frame par chalega (60 times per second)
  useFrame((state, delta) => {
    if (assembled) {
      // Dheere dheere parts ko wapas jodo
      computer.scene.traverse((child) => {
        if (child.isMesh && child.userData.originalPos) {
          // Lerp function cheezo ko smooth move karta hai
          child.position.lerp(child.userData.originalPos, 0.05); // 0.05 speed hai (adjust kar sakte ho)
        }
      });
    }
  });

  return (
    <mesh ref={groupRef}>
      <hemisphereLight intensity={2} groundColor='black' />
      <pointLight intensity={2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop='always' // Animation smooth karne ke liye 'always' kiya
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;