import React from 'react'
import Brackets from '../assets/svg/Brackets'
function Price() {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-black '>
        
        <div className='flex justify-center items-center text-white'>
            <Brackets  />
            <span className='mx-3'>GET STARTED WITH BRAINWAVE</span>
            <Brackets className={`scale-x-[-1]`} />

        </div>

    </div>
  )
}

export default Price
