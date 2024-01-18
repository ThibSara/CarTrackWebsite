import { useCompoundBody } from "@react-three/cannon";
import {useRef} from "react";

export const useWheels= (width, height, front,radius) => {
      // Références aux roues (quatre roues dans cet exemple)
    const wheels =[useRef(null),useRef(null),useRef(null),useRef(null)];

      // Informations communes à toutes les roues
    const wheelInfo={
        radius,
        directionLocal:[0,-1,0],  //  the direction in which the wheel rotates
        suspensionStiffness:30, //  how stiff the suspension is
        suspensionRestLength:0.3, //  the length of the suspension at rest
        maxSuspensionForce:100000, //  the maximum force the suspension can withstand
        maxSuspensionTravel:0.3, //  the maximum distance the suspension can travel
        dampingRelaxation:2.3, //  the damping relaxation of the suspension
        dampingCompression:4.4, //  the damping compression of the suspension
        frictionSlip:5, //  the friction of the wheel
        rollInfluence:0.01, //  how much the wheel effects the car's roll
        axleLocal:[1,0,0], //  the local axle of the wheel
        useCustomSlidingRotationalSpeed:true, //  whether to use custom sliding rotational speed
        customSlidingRotationalSpeed:-30, //  the custom sliding rotational speed
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

    const propsFunc =()=>({
        collisionFilterGroup:0, //  the group bitmask of the body
        mass:1,
        shapes :[
            {
            args: [wheelInfo.radius,wheelInfo.radius,0.015,16], //  the radius, width, height, and number of segments of the cylinder
            rotation:[0,0,-Math.PI/2], //  the rotation of the cylinder in radians (x, y, z)
            type : 'Cylinder' //  the type of shape
            },
        ],
            type: 'Kinematic' //  the type of shape
        });

    useCompoundBody(propsFunc, wheels[0]);
    useCompoundBody(propsFunc, wheels[1]);
    useCompoundBody(propsFunc, wheels[2]);
    useCompoundBody(propsFunc, wheels[3]);
        

      // Retourne les références aux roues et les informations sur les roues
    return [wheels, wheelInfos];
};
