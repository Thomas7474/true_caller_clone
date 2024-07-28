// src/ThreeScene.js
import React, { useRef,} from 'react';
//import React, { useState } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const RotatingBox = () => {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <Box ref={ref}>
      <meshStandardMaterial attach="material" color="green" />
    </Box>
  );
};

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingBox />
    </Canvas>
  );
};

export default ThreeScene;
