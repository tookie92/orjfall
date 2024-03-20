import React from 'react'

function Choose() {
  return (
    <div className='w-full snap-start lg:p-36 p-6  h-[90vh] bg-monfond items-center flex  z-0'>
    <div className='flex w-full lg:w-1/2 flex-col space-y-6'>
            <h1 className=' text-3xl  lg:text-5xl  font-black text-monRose'>Why Choose ÖRFJÄLL Chuckle Chair?</h1>
        <div >
            <p className='w-full flex justify-start text-monRose'>
          Introducing the chair that puts the {`"fun"`} in functional! With ÖRFJÄLL Chuckle Chair, mundane seating transforms into a delightful comedy show, ensuring every moment spent seated is a joyful adventure. Say goodbye to dullness and hello to laughter with our uniquely designed chair!</p>
        </div>
    </div>
    <div className='hidden lg:flex w-1/3'/>
</div>
  ) 
}

export default Choose
