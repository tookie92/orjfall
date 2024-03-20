import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import React from 'react'

function MyLeva() {
    const { camera, scene } = useThree()
    const { cameraPosition, cameraRotation,scenePosition, sceneRotation} = useControls({
        cameraPosition: {
            value: { x: 0, y:.9, z: 8.00 },
            step:0.05
        },
        cameraRotation: {
            value: { x: 0, y:0, z:0 },
            step:0.05
        },

       
        scenePosition: {
            value: { x: 0, y: 0, z: 0 },
            step:0.05
        },
        sceneRotation: {
            value: { x: 0, y: 0, z: 0 },
            step:0.001
        }
    })

    useFrame(() => {
        camera.position.x = cameraPosition.x
        camera.position.y = cameraPosition.y
        camera.position.z = cameraPosition.z
        camera.rotation.x = cameraRotation.x
        camera.rotation.y = cameraRotation.y
        camera.rotation.z = cameraRotation.z
        
        scene.position.y = scenePosition.y
        scene.position.z = scenePosition.z
        scene.rotation.x = sceneRotation.x
        scene.rotation.y = sceneRotation.y
        scene.rotation.z = sceneRotation.z
    })
    return null;
}

export default MyLeva