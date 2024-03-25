"use client"
import React, { useEffect, useRef } from 'react'
import {motion, stagger, useAnimate} from "framer-motion"
import About from './sections/About'
import Choose from './sections/Choose'
import Remember from './sections/Remember'
import Features from './sections/Features'
import Container from './Container'
import Hero from './sections/Hero'
function Underlay() {
    const variants ={
        hidden:{
            y:"20%",
            opacity:0
        },
        visible:{
            y:"0%",
            opacity:1
        }

    }
  
  return (
    <main  className=" snap-y snap-mandatory flex flex-col overflow-x-hidden   items-center justify-center w-full ">
      

        <Hero/>
          <About/>
          <Choose/>
          <Remember baseVelocity={-5}>ÖRFJÄLL</Remember>
          <div className='mb-8'>
            <Remember baseVelocity={5}>the Goat</Remember>
          </div>
          <Features/>
        
      </main>
  )
}

export default Underlay