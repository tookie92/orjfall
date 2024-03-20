
import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useAtom } from "jotai";
import { animationPlayedAtom, drehenanim } from "@/lib/store";

export type GLTFResult = GLTF & {
  nodes: {
    elevator_mesh: THREE.Mesh;
    coussin_bas: THREE.Mesh;
    coussin_haut: THREE.Mesh;
    os: THREE.Mesh;
    connection_support: THREE.Mesh;
    support_haut: THREE.Mesh;
    pieds001: THREE.Mesh;
    pieds002: THREE.Mesh;
    pieds003: THREE.Mesh;
    pieds004: THREE.Mesh;
    pieds005: THREE.Mesh;
    Plane002: THREE.Mesh;
    Plane003: THREE.Mesh;
    Plane005: THREE.Mesh;
    Plane009: THREE.Mesh;
    Plane011: THREE.Mesh;
    Circle: THREE.Mesh;
    Circle_1: THREE.Mesh;
  };
  materials: {
    ["coussin bas.001"]: THREE.MeshStandardMaterial;
    ["coussin haut"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

// type ActionName = "drehen" | "hoch_chair";
// type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Chair(props: JSX.IntrinsicElements["group"],) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF("/bureau.glb") as GLTFResult;
   const {actions} = useAnimations<any>(animations, group)
   const [{currentAnimation}, setCurrentAnimation]= useAtom(drehenanim)
   const [animationPlayed, setAnimationPlayed] = useAtom(animationPlayedAtom);


 
  useEffect(() => {
    if (!animationPlayed) {
          actions[currentAnimation]?.play()  
    }else{
      actions[currentAnimation]?.stop()  
    }
  },[currentAnimation,animationPlayed, actions] ); 
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <group name="bone_bas" rotation={[0, 0, 0.008]}>
            <group
              name="hochdreher_bone"
              position={[0.001, 0.754, 0]}
              rotation={[0, 0, -0.023]}
            >
              <group
                name="elevator_bone"
                position={[-0.115, 0.106, 0]}
                rotation={[0, 0, 1.911]}
              >
                <mesh
                  name="elevator_mesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.elevator_mesh.geometry}
                  material={nodes.elevator_mesh.material}
                  morphTargetDictionary={
                    nodes.elevator_mesh.morphTargetDictionary
                  }
                  morphTargetInfluences={
                    nodes.elevator_mesh.morphTargetInfluences
                  }
                  position={[-0.693, 0.108, 0]}
                  rotation={[0, 0, -1.895]}
                />
              </group>
              <group name="coussin_bas_bone" position={[0.005, 0.203, 0]}>
                <mesh
                  name="coussin_bas"
                  castShadow
                  receiveShadow
                  geometry={nodes.coussin_bas.geometry}
                  material={materials["coussin bas.001"]}
                  position={[-0.007, -0.034, 0.132]}
                  rotation={[-0.181, -0.003, 0.015]}
                />
              </group>
              <group
                name="coussin_haut_bone"
                position={[-0.006, 0.687, -0.557]}
                rotation={[1.57, -0.015, -0.015]}
              >
                <mesh
                  name="coussin_haut"
                  castShadow
                  receiveShadow
                  geometry={nodes.coussin_haut.geometry}
                  material={materials["coussin haut"]}
                  position={[-0.005, 0.062, -0.032]}
                  rotation={[-0.181, 0.028, 0.021]}
                />
              </group>
              <group name="os_bone" position={[0.053, 0.253, -0.157]}>
                <mesh
                  name="os"
                  castShadow
                  receiveShadow
                  geometry={nodes.os.geometry}
                  material={materials.Material}
                  position={[-0.037, -0.984, 0.157]}
                  rotation={[0, 0, 0.015]}
                />
              </group>
              <mesh
                name="connection_support"
                castShadow
                receiveShadow
                geometry={nodes.connection_support.geometry}
                material={nodes.connection_support.material}
                position={[0.002, 0.168, 0]}
                rotation={[0, 0, 0.015]}
              />
              <mesh
                name="support_haut"
                castShadow
                receiveShadow
                geometry={nodes.support_haut.geometry}
                material={nodes.support_haut.material}
                morphTargetDictionary={nodes.support_haut.morphTargetDictionary}
                morphTargetInfluences={nodes.support_haut.morphTargetInfluences}
                position={[0.014, -0.583, 0]}
                rotation={[0, 0, 0.015]}
              />
            </group>
            <mesh
              name="pieds001"
              castShadow
              receiveShadow
              geometry={nodes.pieds001.geometry}
              material={materials.Material}
              position={[-0.039, 0.189, -0.008]}
              rotation={[0.003, 0.355, -1.579]}
            />
            <mesh
              name="pieds002"
              castShadow
              receiveShadow
              geometry={nodes.pieds002.geometry}
              material={materials.Material}
              position={[0.037, 0.188, -0.005]}
              rotation={[3.138, 0.451, 1.579]}
            />
            <mesh
              name="pieds003"
              castShadow
              receiveShadow
              geometry={nodes.pieds003.geometry}
              material={materials.Material}
              position={[-0.029, 0.188, -0.028]}
              rotation={[-0.008, -0.804, -1.582]}
            />
            <mesh
              name="pieds004"
              castShadow
              receiveShadow
              geometry={nodes.pieds004.geometry}
              material={materials.Material}
              position={[0.031, 0.188, -0.026]}
              rotation={[-3.134, -0.791, 1.582]}
            />
            <mesh
              name="pieds005"
              castShadow
              receiveShadow
              geometry={nodes.pieds005.geometry}
              material={materials.Material}
              position={[0.001, 0.198, 0.024]}
              rotation={[3.088, 1.427, 1.625]}
            />
            <mesh
              name="Plane002"
              castShadow
              receiveShadow
              geometry={nodes.Plane002.geometry}
              material={materials.Material}
              position={[0.425, 0.064, -0.425]}
              rotation={[-3.134, -0.791, 1.582]}
            />
            <mesh
              name="Plane003"
              castShadow
              receiveShadow
              geometry={nodes.Plane003.geometry}
              material={materials.Material}
              position={[0.08, 0.076, 0.58]}
              rotation={[3.088, 1.427, 1.625]}
            />
            <mesh
              name="Plane005"
              castShadow
              receiveShadow
              geometry={nodes.Plane005.geometry}
              material={materials.Material}
              position={[-0.419, 0.07, -0.432]}
              rotation={[-0.008, -0.804, -1.582]}
            />
            <mesh
              name="Plane009"
              castShadow
              receiveShadow
              geometry={nodes.Plane009.geometry}
              material={materials.Material}
              position={[-0.566, 0.071, 0.187]}
              rotation={[-0.004, -0.442, -1.579]}
            />
            <mesh
              name="Plane011"
              castShadow
              receiveShadow
              geometry={nodes.Plane011.geometry}
              material={materials.Material}
              position={[0.541, 0.063, 0.239]}
              rotation={[3.138, 0.451, 1.579]}
            />
            <group
              name="support"
              position={[0.001, 0.147, 0]}
              rotation={[0, 0, -0.008]}
            >
              <mesh
                name="Circle"
                castShadow
                receiveShadow
                geometry={nodes.Circle.geometry}
                material={materials.Material}
              />
              <mesh
                name="Circle_1"
                castShadow
                receiveShadow
                geometry={nodes.Circle_1.geometry}
                material={materials["Material.001"]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/bureau.glb");
