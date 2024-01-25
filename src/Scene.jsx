import { Environment, OrbitControls, PerspectiveCamera, mesh } from '@react-three/drei';
import { Suspense, useEffect, useState} from 'react';
import { MeshStandardMaterial, PlaneGeometry } from 'three';
import { Track } from './Track';
import { Ground } from './Ground';
import { Car } from "./Car";
import {Controls} from "./Controls";


export function Scene() {
  const [thirdPerson, setThirdPerson] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);

  

    useEffect(() => {
      function keyDownHandler(e) {
        if (e.key === "k") {
          if(thirdPerson) setCameraPosition([-6, 3.9, 6.21 +Math.random()*0.01]);
          setThirdPerson(!thirdPerson);
        }
      }

      window.addEventListener("keydown", keyDownHandler);
      return () => window.removeEventListener("keydown", keyDownHandler);
      },[thirdPerson]);




  return (
    <Suspense fallback={null}>
      <Environment files={process.env.PUBLIC_URL + '/textures/envmap.hdr'} background="both" />

      <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} />
      {!thirdPerson && (
        <OrbitControls target = {[-2.64, -0.7, 0.03]} />
      )}
      <OrbitControls target={[-2.64, -0.7, 0.03]} />
      <Track/>
      <Ground/>
      <Car thirdPerson={thirdPerson}/>
      <Controls/>
      </Suspense>
  );
}
