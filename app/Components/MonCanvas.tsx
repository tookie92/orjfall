"use client"

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import Experience from './Experience'
import {motion} from "framer-motion-3d"
import { cubicBezier, MotionConfig, useAnimationFrame, useScroll, useSpring, useTransform } from 'framer-motion'
import { Loader } from '@react-three/drei'
import { degToRad } from 'three/src/math/MathUtils.js'
import { useAtom } from 'jotai/react'
import { animationPlayedAtom } from '@/lib/store'



function MonCanvas() {
const target =useRef<any>()

 
const {scrollYProgress} = useScroll({
  container:target,
 })
 const [animatePlay, setAnimationPlay] = useAtom(animationPlayedAtom)

 const positionX = useTransform(scrollYProgress,[0,0.21,.38,.48,1],[0,-2.5,2.5,0,0],{ ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
 const positionXPhone = useTransform(scrollYProgress,[0,0.21,.30,.38,.62,1],[0,0.1,1.9,0,0,0],{ ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
 const positionYPhone = useTransform(scrollYProgress,[0,0.18,0.30,0.38,0.63,0.69,.81],[0,.6,0,-0.5,-.72,1,.5],{ ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
 
 const rotationX = useTransform(scrollYProgress,[0,0.21,.38,.48,1],[0,.7,0,0,0], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
 const rotationY = useTransform(scrollYProgress,[0,0.21,.38,.48,.65,.75,.84,1],[0,.5,-1,0,0,degToRad(20),degToRad(-20),0], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
 
 const posX = useSpring(positionX)
 const rotX = useSpring(rotationX)
 const rotY = useSpring(rotationY)
 

const monScale = useTransform(scrollYProgress,[0,0.3],[1,1])
const chairScalingFactor = typeof window !== 'undefined' ? Math.min(Math.max(window.innerWidth / 1300, 0.6), 1.0) : 1.2;


const isMobile = typeof window !== 'undefined' ? window.innerWidth < 1300 : false;
 
 useEffect(()=>{
   scrollYProgress.on("change",(e)=> console.log(e))
  
 })

  return ( 
    <>
    <MotionConfig >

        <Canvas 
            shadows
            camera={{ position: [0, 0, 8], fov:25 }}
            scene={{position: [0,-.8,0]}}
            >
         
            <Suspense >
             <motion.group
               scale={chairScalingFactor}
               position-x={isMobile? positionXPhone:posX }
               position-y={isMobile? positionYPhone:0 }
               rotation-x={isMobile? 0 :rotX}
               rotation-y={isMobile? 0 :rotY}
               > 

                  <Experience 
                   
                   />
             </motion.group>
             
            </Suspense>
        {/* <MyLeva/> */}
        </Canvas>
        <Loader/>
        </MotionConfig>
    </>
  )
}

export default MonCanvas