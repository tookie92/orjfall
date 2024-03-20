import React from 'react'

function About() {
  return (
    <div className='w-full  snap-start h-[80vh] bg-monRose items-center flex px-6 lg:px-0  z-0'>
        <div className=' hidden lg:flex lg:w-1/2 bg-green-400 w-full'/>
        <div className='flex lg:w-1/3 w-2/2 flex-col space-y-6'>
                <h1 className='text-5xl font-black text-monfond'>That{`'`}s my chair </h1>
            <div >
                <p className='w-full flex justify-start'>Are you tired of boring, uninspiring chairs that make you want to snooze rather than amuse? Say hello to the ÖRFJÄLL Chuckle Chair – where sitting transforms into a sidesplitting adventure!</p>
            </div>
        </div>
    </div>
  )
}

export default About