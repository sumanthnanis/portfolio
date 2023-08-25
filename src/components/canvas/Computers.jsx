import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from  '../Loader'; // Import the missing module

const Computers = () => {
  const Computer = () => {
    const computer = useGLTF('/desktop_pc/scene.gltf');
    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <primitive object={computer.scene} scale={0.75} position={[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
      </mesh>
    );
  };

  return <Computer />; // Return the Computer component
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLogo="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers /> {/* Render the Computers component */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
