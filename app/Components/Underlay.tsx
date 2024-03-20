"use client"
import React, { useEffect, useRef } from 'react'
import {motion, stagger, useAnimate} from "framer-motion"
import About from './sections/About'
import Choose from './sections/Choose'
import Remember from './sections/Remember'
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
    const titreRef = useRef<any>()
    const [scope, animate] = useAnimate()

    useEffect(()=>{
       [ 
        animate([
          [titreRef.current,{y:["30%","0%"], opacity:[0,1]},{ duration:2,ease:[0.65, 0, 0.35, 1]}],
          ["p",{y:["30%","0%"], opacity:[0,1]},{ duration:1,ease:[0.65, 0, 0.35, 1], }]
        ]),
       
      ]
    })
  return (
    <div  className=" snap-y snap-mandatory flex flex-col overflow-x-hidden   items-center justify-center w-full ">
            <div 
              ref={scope}
              className="w-full snap-start bg-monfond h-[100vh] lg:container px-32 items-center justify-center flex flex-col z-0 ">
                <h1 ref={titreRef} className=" lg:text-[15rem] text-7xl  uppercase text-[#F1D0D0]  tracking-widest font-black ">ÖRFJÄLL</h1>
                <div className='justify-end  w-full flex items-end lg:mb-5'>
                    <p className='uppercase text-[#E5C287]'>my amazing chair</p>
                </div>
            </div>
          <About/>
          <Choose/>
          <Remember baseVelocity={-5}>ÖRFJÄLL</Remember>
          <Remember baseVelocity={5}>ÖRFJÄLL</Remember>
      </div>
  )
}

export default Underlay