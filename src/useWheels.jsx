import { useCompoundBody } from "@react-three/cannon";
import {useRef} from "react";

export  const useWheels= (width, height, front,radius) => {
      // Références aux roues (quatre roues dans cet exemple)
    const wheels =[useRef(null),useRef(null),useRef(null),useRef(null)];

      // Informations communes à toutes les roues
      const wheelInfo = {
        radius,
        directionLocal: [0, -1, 0],
        axleLocal: [1, 0, 0],
        suspensionStiffness: 60,
        suspensionRestLength: 0.1,
        frictionSlip: 5,
        dampingRelaxation: 2.3,
        dampingCompression: 4.4,
        maxSuspensionForce: 100000,
        rollInfluence: 0.01,
        maxSuspensionTravel: 0.1,
        customSlidingRotationalSpeed: -30,
        useCustomSlidingRotationalSpeed: true,
      };

    // Informations spécifiques à chaque roue (pour chaque instance de roue)
    const wheelInfos=[{
        ...wheelInfo,
        isFront:true,
        chassisConnectionPointLocal:[-width*0.65,height*0.4,front],
    },{
        ...wheelInfo,
        isFront:true,
        chassisConnectionPointLocal:[width*0.65,height*0.4,front],
    },{
        ...wheelInfo,
        isFront:false,
        chassisConnectionPointLocal:[-width*0.65,height*0.4,-front],
    },{
        ...wheelInfo,
        isFront:false,
        chassisConnectionPointLocal:[width*0.65,height*0.4,-front],

    }];

    const propsFunc =() => ({
        collisionFilterGroup:0, //  the group bitmask of the body
        mass:1,
        shapes :[
            {
            args: [wheelInfo.radius,wheelInfo.radius,0.015,16], //  the radius, width, height, and number of segments of the cylinder
            rotation:[0,0,-Math.PI/2], //  the rotation of the cylinder in radians (x, y, z)
            type : 'Cylinder', //  the type of shape
            },
        ],
            type: 'Kinematic', //  the type of shape
        });

    useCompoundBody(propsFunc, wheels[0]);
    useCompoundBody(propsFunc, wheels[1]);
    useCompoundBody(propsFunc, wheels[2]);
    useCompoundBody(propsFunc, wheels[3]);
        

      // Retourne les références aux roues et les informations sur les roues
    return [wheels, wheelInfos];
};
