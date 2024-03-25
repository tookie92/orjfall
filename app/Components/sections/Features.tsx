import { useInView, motion } from 'framer-motion'
import React, { useRef } from 'react'

function Features() {

const monRef = useRef<any>()
const inView = useInView(monRef,
      {margin:"-50% 0px -50% 0px"}
    )

  return (
    <div ref={monRef} className=' bg-monRose  flex flex-col  lg:px-36 px-8 lg:py-[35vh] py-[10vh]  w-full items-center'>
        <motion.div 
           variants={{
            hidden:{y:-20, opacity:0},
            visible:{y:0, opacity:1},
           }}
           initial={"hidden"}
           animate={"hidden"}
           whileInView={"visible"}
           viewport={{margin:"-50% 0px -300px 0px"}}
        className='  flex lg:flex-row flex-col'>
            <div className='flex flex-col lg:w-1/3 w-full'>
                    <h2 className='font-bold text-2xl text-monfond'>Laugh Your Way to Comfort:</h2>
                    <p className='text-monfond mt-3'>
                        Bid farewell to stiff, uncomfortable seating! Our ÖRFJÄLL Chuckle Chair 
                        combines ergonomic design with a touch of hilarity to ensure every moment 
                        seated is a giggle-fest.
                    </p>
            </div>
            <div className=' flex lg:w-2/3 w-full'/>
        </motion.div>
        <div className='h-[30vh]'/>
        <motion.div 
           variants={{
            hidden:{y:-20, opacity:0},
            visible:{y:0, opacity:1},
           }}
           initial={"hidden"}
           animate={"hidden"}
           whileInView={"visible"}
           viewport={{margin:"-50% 0px -300px 0px"}}
        className=' flex lg:flex-row flex-col'>
            <div className=' flex lg:w-2/3 w-full'/>
            <div className='flex flex-col lg:w-1/3 w-full'>
                    <h2 className='font-bold text-2xl text-monfond'>Style with a Side of Snickers:</h2>
                    <p className='text-monfond mt-3'>
                        Who says furniture can{`'`}t have personality? With ÖRFJÄLL Chuckle Chair,
                        you{`'`}re not just sitting; you{`'`}re making a statement! Get ready for 
                        compliments and chuckles galore as your guests marvel at your taste in 
                        both comfort and comedy.
                    </p>
            </div>
        </motion.div>
        <div className='h-[30vh]'/>
        <motion.div 
            variants={{
                hidden:{y:-20, opacity:0},
                visible:{y:0, opacity:1},
               }}
               initial={"hidden"}
               animate={"hidden"}
               whileInView={"visible"}
               viewport={{margin:"-50% 0px -300px 0px"}}
        
            className=' flex lg:flex-row flex-col'>
            <div className='flex flex-col lg:w-1/3 w-full'>
                    <h2 className='font-bold text-2xl text-monfond'>Hilarity in Every Hug:</h2>
                    <p className='text-monfond mt-3'>
                    It{`'`}s not just a chair; it{`'`}s your new best friend! With its cozy embrace and 
                    comedic charm, the ÖRFJÄLL Chuckle Chair is here to banish those mid-day 
                    blues with a burst of laughter. Say goodbye to stress and hello to snorts
                     of joy!
                    </p>
            </div>
            <div className=' flex lg:w-2/3 w-full'/>
        </motion.div>
    </div>
  )
}

export default Features