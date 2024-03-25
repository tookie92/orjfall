"use client"
import * as THREE from "three"
import {  AccumulativeShadows, CameraControls, ContactShadows, Environment, RandomizedLight, useAnimations, useGLTF, } from '@react-three/drei'
import React, { Suspense, useEffect, useRef } from 'react'
import { Chair, GLTFResult } from './Chair'
import { useFrame, useThree } from '@react-three/fiber'
import { degToRad } from 'three/src/math/MathUtils.js'
import { motion  } from 'framer-motion-3d'
import { MotionValue, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion"
import useSetCurrentAnimation from "@/hooks/useAnim"
import { useAtom } from "jotai/react"
import { animationPlayedAtom } from "@/lib/store"


interface ExperienceProps{
  target: React.MutableRefObject<any>;
  scale?:number

}

function Experience() {
  

const setAnimation = useSetCurrentAnimation()

const handleAnimationClick = (anim:string)=>{
  setAnimation(anim)
}
const [animatioPlayed, setAnimationPlayed] = useAtom(animationPlayedAtom)


const viewport = useThree((state)=> state.viewport)
const isMobile = window.innerWidth / 1024




// const chairScalingFactor = Math.min(Math.max(window.innerWidth/1300,0.5), 1.0)

  return (
    <>

   {/* <CameraControls/> */}
        <ambientLight intensity={.5}/>
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />


        
       

            <motion.group onClick={()=>{
              handleAnimationClick("hoch_chair")
              setAnimationPlayed(true)
              }}>

              <Chair  />
            </motion.group>
          
      
        <Environment preset='city'/>
      
        {/* <ContactShadows position={[-0.1, 0, 0]} opacity={0.5} scale={10} blur={1.5} far={0.8} /> */}
        <AccumulativeShadows temporal frames={100} scale={10} opacity={.2}>
          <RandomizedLight amount={8} position={[5, 5, -10]} />
        </AccumulativeShadows>
    
       {/* <MyLeva/> */}
         
      
        
           
    </>
  )
}

export default Experience