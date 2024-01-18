import {useFrame, useLoader} from "@react-three/fiber";
import {useEffect, useRef} from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useBox } from "@react-three/cannon";


//  the physics body properties define how the car behaves in the physics simulation,
// while the adjustments in the useEffect hook control the visual appearance of the loaded car model in the scene.

export function Car(){
    let mesh = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/models/car.glb').scene;

    const position = [-1.5,0.5,3];
    const width = 0.15;
    const height = 0.07;
    const front = 0.15;
    const wheelRadius = 0.05;

    const chassisBodyArgs=[width,height,front*2];
    const [chassisBody, chassisApi] = useBox(
        () => ({
            args: chassisBodyArgs, mass: 150, position
        }),
        useRef(null),
        );


    useEffect(() => {
        mesh.scale.set(0.0012,0.0012,0.0012);
        mesh.children[0].position.set(-365,-18,-67);},[mesh]);

    return(
        <mesh ref={chassisBody}>
        <meshBasicMaterial transparent = {true} opacity={0.3} />
        <boxGeometry args={chassisBodyArgs}/>
        </mesh>
    );
}