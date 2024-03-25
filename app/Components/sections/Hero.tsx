"use client"
import { useAnimate } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

function Hero() {
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
    <div 
    ref={scope}
    className="w-full snap-start lg:container bg-monfond h-[100vh] px-12 lg:px-16 items-center justify-center flex flex-col z-0 ">
      <h1 ref={titreRef} className=" lg:text-[15rem] text-6xl  uppercase text-monRose  tracking-widest font-black ">
        ÖRFJÄLL
      </h1>
      <div className='justify-end  w-full flex  lg:mb-5'>
          <p className='uppercase text-xs lg:text-lg text-monRose'>my amazing chair</p>
      </div>
  </div>
  )
}

export default Hero