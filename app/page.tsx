"use client"
import Image from "next/image";
import MonCanvas from "./Components/MonCanvas";
import { cubicBezier, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Underlay from "./Components/Underlay";
import { useRef } from "react";
import Footer from "./Components/sections/Footer";

export default function Home() {
  const targetRef = useRef<any>(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset:["end end", "end start"]
  })

  const position = useTransform(scrollYProgress,(pos)=>{
    return pos === .9? "absolute" : "fixed"
  })
  const positionPhone = useTransform(scrollYProgress,(pos)=>{
    return pos === .86? "absolute" : "fixed"
  })
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 1300 : false;

  const opacity =useTransform(scrollYProgress, [0,.98], [1,0],{ ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  const opacityPhone =useTransform(scrollYProgress, [0,.82,.99], [1,.0,0],{ ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  const y =useTransform(scrollYProgress, [0,.75,.98], ["0%","-60%","-180%"], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  const yPhone =useTransform(scrollYProgress, [0,.82,.99], ["0%","-50%","-180%"], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  

  return (
    <>
    
      <div className="sticky px-36  h-14 flex items-center bg-transparent  bg-black top-0 z-30">
        <motion.p  className=" text-monRose font-black text-2xl">ÖRFJÄLL</motion.p>
     </div>
    
       <div ref={targetRef} className="  flex relative -mt-14  bg-monfond  h-full   w-full">
          <motion.div 
           style={{position: isMobile?positionPhone:position, opacity: isMobile?opacityPhone:opacity,y:isMobile? yPhone:y}}
          className=" items-center  justify-center h-[100vh]  top-0 z-10  w-full" >
            <MonCanvas/>
          </motion.div>
         <Underlay/>
       </div>
       <Footer/>
    </>
  );
}
