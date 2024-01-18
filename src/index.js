import "./index.css";
import {createRoot} from "react-dom/client";
import {Canvas} from "@react-three/fiber";
import {Scene} from "./Scene";
import { Physics } from '@react-three/cannon';


createRoot(document.getElementById("root")).render(
<Canvas>
  <Physics>
    {/* set up the broadphase which is the algorithm that determines which objects can collide with which other objects */}
    broadphase="SAP" 
    {/* set up gravity but not as high as we experience it on earth so the car can make jumps*/} 
    gravity=[[0, -2.6, 0]] // 
  <Scene />
  </Physics>
</Canvas>
);