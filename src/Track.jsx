// Importation du hook useLoader pour charger des ressources dans un composant React-three-fiber
import { useLoader } from "@react-three/fiber";
// Importation du hook useEffect pour effectuer des opérations après le rendu du composant
import { useEffect } from "react";
// Importation du chargeur GLTFLoader pour charger des modèles 3D au format glb
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// Importation du chargeur TextureLoader pour charger des textures
import { TextureLoader } from "three/src/loaders/TextureLoader";

export function Track() {
  // Utilisation de useLoader pour charger le modèle 3D au format glb
  const result = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/models/track.glb');

  // Utilisation de useLoader pour charger la texture de la piste
  const colorMap = useLoader(TextureLoader, process.env.PUBLIC_URL + '/textures/track.png');

  // Utilisation du hook useEffect pour effectuer des opérations après le rendu
  useEffect(() => {
    // Ajuster l'anisotropie de la texture pour une meilleure qualité
    colorMap.anisotropy = 16;
  }, [colorMap]);  // Déclencher l'effet uniquement lorsque colorMap change

  // Récupération de la géométrie du modèle 3D
  let geometry = result.scene.children[0].geometry;

  // Rendu du composant
  return (
    <mesh geometry={geometry}>
      {/* Utilisation de meshBasicMaterial pour appliquer la texture à la surface du modèle */}
      <meshBasicMaterial toneMapped={false} map={colorMap} />
    </mesh>
  );
}
