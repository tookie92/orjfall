"use client"

import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import Experience from './Experience'


function MonCanvas() {

 

  return (
    <>
        <Canvas 
            shadows
            camera={{ position: [0, 0, 8], fov:25 }}
            scene={{position: [0,-.8,0]}}
        >
         
            <Suspense >
             
                <Experience/>
             
            </Suspense>
        {/* <MyLeva/> */}
        </Canvas>
        {/* <Loader/> */}
    </>
  )
}

export default MonCanvas