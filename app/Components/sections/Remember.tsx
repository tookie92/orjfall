import { cubicBezier, useAnimate, useAnimationFrame, useInView, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import {motion} from "framer-motion"
import { wrap } from '@motionone/utils';

interface RememberProps{
  baseVelocity: number,
  children: React.ReactNode
}
function Remember({baseVelocity, children}: RememberProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });


    
  return (
    <>
    <div 
    
      className="w-full snap-center bg-monfond   m-0   items-center justify-center flex flex-col  ">
        <div  className='flex w-full whitespace-nowrap flex-wrap overflow-hidden ' >
          <motion.div 
              style={{x}} 
              className='flex whitespace-nowrap flex-nowrap gap-x-4 text-[8rem] text-monRose font-black uppercase'>
              <motion.span className='block mr-8'>{children}</motion.span>
              <motion.span className='block mr-8'>{children}</motion.span>
              <motion.span className='block mr-8'>{children}</motion.span>
              <motion.span className='block mr-8'>{children}</motion.span>
              <motion.span className='block mr-8'>{children}</motion.span>
              <motion.span className='block mr-8'>{children}</motion.span>
              <motion.span className='block mr-8'>{children}</motion.span>
              <motion.span className='block mr-8'>{children}</motion.span>
          </motion.div>
          
        </div>
    </div>
    </>
  )
}

export default Remember