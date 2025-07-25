import React from 'react'
import Brackets from '../assets/svg/Brackets'
import image1 from '../assets/roadmap/image-1.png'
import image2 from '../assets/roadmap/image-2.png'
import image3 from '../assets/roadmap/image-3.png'
import image4 from '../assets/roadmap/image-4.png'


function FullDetails() {
  return (

    <section>

      <div className='text-white p-2'>
        <h1 className='text-center my-3 w-full underline-offset-4 underline '>SEE THE FULL DETAILS</h1>
        <div className='my-2'>
            <p className='text-xs flex justify-start items-center'>
              <Brackets className={`mr-2`}/>
              READY TO GET STARTED
              <Brackets className={`ml-2 scale-x-[-1]`}/>
              
            </p>
            <h2 className='text-2xl font-bold my-2'>What we're working on</h2>
        </div>
      </div>

      <div className='w-[95%] my-3 border h-[85vh] border-white py-3 rounded-3xl'>
          <div className='text-white'>
              <div className='flex w-full items-center justify-between px-4'>
                  <p className='flex items-center text-xs ' >
                    <Brackets className={`mr-2`}/>
                    MAY 2023
                    <Brackets className={`scale-x-[-1] ml-2`}/>
                  </p>
                  <button className='bg-white text-black px-2 rounded-md '>
                    <i className="fa-solid fa-check  rounded-full p-2"></i>
                    Done
                  </button>

              </div>
              <img src={image1} alt="" />

          </div>
          <div className='text-white p-4'>
              <h1 className='font-bold text-2xl my-2 '>Voice Recognition</h1>
              <p className='text-[grey] text-md '>Enable the chatbot to understand and respond to voice commands,making it easier for users to interact with the app hands-free.</p>
          </div>
      </div>

      <div className='w-[95%] border h-[85vh] border-white py-3 rounded-3xl'>
          <div>
            <p>
              <Brackets className={`mr-2`}/>
              MAY 2023
              <Brackets className={`scale-x-[-1] ml-2`}/>
            </p>
            <button className='bg-white text-md '>IN PROGRESS</button>
          </div>
      </div>
      
    </section>

  )
}

export default FullDetails