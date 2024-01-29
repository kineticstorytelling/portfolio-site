// Scene.tsx
import React from 'react';
import { Canvas } from 'react-three-fiber';
import Cloud from './Cloud';

const Scene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Cloud />
    </>
  );
};

export default Scene;
