import { useEffect,useState } from "react";

export const useControls = (vehicleApi, chassisApi) => {
    let [controls,setControls] = useState({
        // z : boolean
        //q: boolean,
        //d: boolean,
        //s: boolean,

        //r: boolean,
    });

    useEffect(() => {

        const keyDownPressHandler = (e) => {
            setControls((controls) => ({
                ...controls,
                [e.key.toLowerCase()]: true,
            }));
        }

        const KeyUpPressHandler = (e) => {

            setControls((controls) => ({
                ...controls,
                [e.key.toLowerCase()]: false,
            }));
        }
    
        window.addEventListener("keydown", keyDownPressHandler);
        window.addEventListener("keyup", KeyUpPressHandler);

        return () => {
            window.removeEventListener("keydown", keyDownPressHandler);
            window.removeEventListener("keyup", KeyUpPressHandler);
        }
    }, []);

    useEffect(() => {
        if (controls.w) {
            vehicleApi.applyEngineForce(150, 2);
            vehicleApi.applyEngineForce(150, 3);
        } else if (controls.s) {
            vehicleApi.applyEngineForce(-150, 2);
            vehicleApi.applyEngineForce(-150, 3);
        } else {
            vehicleApi.applyEngineForce(0, 2);
            vehicleApi.applyEngineForce(0, 3);
        }
    }, [controls,vehicleApi,chassisApi]);

    return controls;


}