"use client"

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef } from 'react'
import Experience from './Experience'
import {motion} from "framer-motion-3d"
import { cubicBezier, MotionConfig, useAnimationFrame, useScroll, useSpring, useTransform } from 'framer-motion'
import { Loader } from '@react-three/drei'



function MonCanvas() {
const target =useRef<any>()
 
const {scrollYProgress} = useScroll({
  container:target,
 
 })
 
 const positionX = useTransform(scrollYProgress,[0,0.42,.78,1],[0,-2.0,2.5,0],{ ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
 const rotationX = useTransform(scrollYProgress,[0,0.42,.78,1],[0,.7,0,0], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
 const rotationY = useTransform(scrollYProgress,[0,0.42,.78,1],[0,.5,-1,0], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
 
 const posX = useSpring(positionX)
 const rotX = useSpring(rotationX)
 const rotY = useSpring(rotationY)
 
//  useAnimationFrame(()=>{
//    if (target.current) {
//      // Update the position of the Chair based on the scrollYProgress
//      target.current.position.x = vraiX; // Example transformation, adjust as needed
//    }
//  })
const monScale = useTransform(scrollYProgress,[0,0.3],[1,1])
const chairScalingFactor = typeof window !== 'undefined' ? Math.min(Math.max(window.innerWidth / 1300, 0.5), 1.0) : 1.2;


 
 useEffect(()=>{
   scrollYProgress.on("change",(e)=> console.log(e))
 })

  return ( 
    <>
    <MotionConfig 
    // transition={{
    //   type:"spring",
    //   mass:5,
    //   stiffness:50,
    //   damping:50,
    //   restDelta:0.0001
    // }}
    >

        <Canvas 
            shadows
            camera={{ position: [0, 0, 8], fov:25 }}
            scene={{position: [0,-.8,0]}}
            >
         
            <Suspense >
             <motion.group
               scale={chairScalingFactor}
               position-x={posX}
               rotation-x={rotX}
               rotation-y={rotY}
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