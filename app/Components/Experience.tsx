"use client"
import * as THREE from "three"
import {  ContactShadows, Environment, useAnimations, useGLTF, } from '@react-three/drei'
import React, { Suspense, useEffect, useRef } from 'react'
import { Chair, GLTFResult } from './Chair'
import { useFrame, useThree } from '@react-three/fiber'
import { degToRad } from 'three/src/math/MathUtils.js'
import { motion } from 'framer-motion-3d'
import { cubicBezier, useAnimate, useScroll, useSpring, useTransform } from 'framer-motion'
import { useAtom } from "jotai"
import { animationPlayedAtom, drehenanim } from "@/lib/store"
import useSetCurrentAnimation from "@/hooks/useAnim"
import MyLeva from "./MyLeva"

function Experience() {



  const target = useRef<any>()
  const {scrollYProgress} = useScroll({
  container:target
  })
 
  const cameraX = useTransform(scrollYProgress, [0, 0.39,0.7,0.9,1], [0 ,1.99,-1.75,-1.75,0], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  const cameraY = useTransform(scrollYProgress, [0, 0.39,0.7,0.9,1], [0.5 ,0.9,.75,.5,0.5], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  const cameraZ = useTransform(scrollYProgress, [0, 0.39,0.7,0.9,1], [8,8,6.60,8,8], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })

  const cameraRotationX = useTransform(scrollYProgress, [0, 0.39,0.7,0.9,1], [0 ,0,0,0,0], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  const cameraRotationY = useTransform(scrollYProgress, [0, 0.39,0.7,0.9,1], [0 ,0,0,0,0], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  const cameraRotationZ = useTransform(scrollYProgress, [0, 0.39,0.7,0.9,1], [0,0,0,0,0], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  
  const sceneX = useTransform(scrollYProgress, [0, 0.39,0.7,0.9,1], [0,0,0,0,0], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  const sceneY = useTransform(scrollYProgress, [0, 0.39,0.7,0.9,1], [-.5,0,0,-.5,-.5], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  const sceneZ = useTransform(scrollYProgress, [0, 0.39,0.7,0.9,1], [0,0,0,0,0], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  
  const sceneRotationX = useTransform(scrollYProgress, [0, 0.39,0.7,0.9,1], [0,.97,0,0,0], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  const sceneRotationY = useTransform(scrollYProgress, [0, 0.39,0.7,0.9,1], [0,.1,0,0,0], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  const sceneRotationZ = useTransform(scrollYProgress, [0, 0.39,0.7,0.9,1], [0,0.2,-.33,0,0], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })


  useFrame(({camera, scene}) => {
    // Modifiez la position de la caméra en fonction de scrollYProgress
    camera.position.x = cameraX.get()
    camera.position.y = cameraY.get()
    camera.position.z = cameraZ.get()
    
    camera.rotation.x = cameraRotationX.get()
    camera.rotation.y = cameraRotationY.get()
    camera.rotation.z = cameraRotationZ.get()


    // Modifiez la position de la scene en fonction de scrollYProgress
    scene.position.x = sceneX.get()
    scene.position.y = sceneY.get()
    scene.position.z = sceneZ.get()
    
    scene.rotation.x = sceneRotationX.get()
    scene.rotation.y = sceneRotationY.get()
    scene.rotation.z = sceneRotationZ.get()



  })
  
  const voyage = useTransform( scrollYProgress, [0,0.4,0.7,0.9], [0,degToRad(25),degToRad(-50),0])

  const smoothVoyage = useSpring(voyage,)
  const scalio = useTransform( scrollYProgress, [0,0.4,0.7,0.9], [1,1.1,1.0,1])
  const smoothScale = useSpring(scalio)
  const viewport = useThree((state)=> state.viewport)
  const chairScalingFactor= Math.min(Math.max(window.innerWidth/1300,0.6),1.2)
  const variants={
    initial:{
      x:-3,
      opacity:0
      
    },
    animate:{
      x:0,
      opacity:1,
      
    }
  }
const setAnimation = useSetCurrentAnimation()

const handleAnimationClick =(anim:string)=>{
  setAnimation(anim)
}
const[animatedPlay, setAnimationPlayed]= useAtom(animationPlayedAtom)
useEffect(()=>{
  scrollYProgress.on("change",e=> console.log(e))
})
  return (
    <>

   {/* <CameraControls/> */}
        <ambientLight intensity={.5}/>
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />


          <group>

            <motion.group  
           scale={chairScalingFactor} 
            rotation-y={smoothVoyage} 
             initial="initial" animate="animate" variants={variants} transition={{duration:2}}
             >

              <Chair onClick={()=>{
               // handleAnimationClick("drehen")
                setAnimationPlayed(!animatedPlay)
                }} />
            </motion.group>
          </group>
      
        <Environment preset='city'/>
      
        <ContactShadows position={[-0.1, 0, 0]} opacity={0.5} scale={10} blur={1.5} far={0.8} />

    
       {/* <MyLeva/> */}
         
      
        
           
    </>
  )
}

export default Experience