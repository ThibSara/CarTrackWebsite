import { Environment, OrbitControls, PerspectiveCamera, mesh } from '@react-three/drei';
import { Suspense } from 'react';
import { MeshStandardMaterial, PlaneGeometry } from 'three';
import { Track } from './Track';
import { Ground } from './Ground';
import { Car } from "./Car";


export function Scene() {
  return (
    <Suspense fallback={null}>
      <Environment files={process.env.PUBLIC_URL + '/textures/envmap.hdr'} background="both" />

      <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} />
      <OrbitControls target={[-2.64, -0.7, 0.03]} />
      <Track/>
      <Ground/>
      <Car/>
    </Suspense>
  );
}
