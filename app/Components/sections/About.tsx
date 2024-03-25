import React from 'react'

function About() {
  return (
    <div className='w-full  snap-start h-[80vh] gap-x-5 gap-y-2 lg:gap-y-0 bg-monRose items-center flex lg:flex-row flex-col  p-9  lg:px-16   z-0'>
        <div className=' lg:flex lg:w-1/2 h-1/2  w-full'/>
        <div className='flex lg:w-1/3 w-2/2 h-1/2 flex-col space-y-6 z-40'>
                <h1 className='text-4xl lg:text-5xl font-black text-monfond'>That{`'`}s my chair </h1>
            <div >
                <p className='w-full flex justify-start'>Are you tired of boring, uninspiring chairs that make you want to snooze rather than amuse? Say hello to the ÖRFJÄLL Chuckle Chair – where sitting transforms into a sidesplitting adventure!</p>
            </div>
        </div>
    </div>
  )
}

export default About