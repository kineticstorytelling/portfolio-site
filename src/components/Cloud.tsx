import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';

const Cloud: React.FC = () => {
  const cloudRef = useRef<THREE.Mesh>();

  // Use useFrame to animate the cloud
  useFrame(() => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y += 0.001;
    }
  });

  const cloudGeometry = new THREE.SphereGeometry(20, 32, 32);
  const cloudMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });

  return (
    <mesh ref={cloudRef}>
      <sphereGeometry args={[20, 32, 32]} />
      <meshLambertMaterial color={0x000000} transparent opacity={0.8} />
    </mesh>
  );
};

export default Cloud;
