import React from 'react';
import { Text } from '@react-three/drei';

export const Controls = () => {
  const keys = '     Z              R           K\n Q S D'

  return (
    <group>
      <Text
        position={[-1.5, 2.6, -5]} // Adjust position as needed
        rotation={[0, 0, 0]}
        fontSize={0.2}
        color="orange"
        anchorX="right"
        anchorY="middle"
      >keys               retry          camera
      </Text>
      <Text
        position={[-1.7, 2, -5]} // Adjust position as needed
        rotation={[0, 0, 0]}
        fontSize={0.3}
        color="orange"
        anchorX="right"
        anchorY="middle"
      >{keys}
      </Text>
          </group>
  );
};

