import React from 'react'
import Brackets from '../assets/svg/Brackets'
import image1 from '../assets/roadmap/image-1.png'
import image2 from '../assets/roadmap/image-2.png'
import image3 from '../assets/roadmap/image-3.png'
import image4 from '../assets/roadmap/image-4.png'


function FullDetails() {
  return (

    <section className='flex flex-col bg-[#0e0d15] justify-center items-center' id='fullDetails' >

      <div className='text-white w-full p-2'>
        <h1 className='text-center my-3 w-full underline-offset-4 underline '>SEE THE FULL DETAILS</h1>
        <div className='my-2'>
          <p className='text-xs flex justify-start items-center'>
            <Brackets className={`mr-2`} />
            READY TO GET STARTED
            <Brackets className={`ml-2 scale-x-[-1]`} />

          </p>
          <h2 className='text-2xl font-bold my-2'>What we're working on</h2>
        </div>
      </div>

      <div className='w-[95%] my-3 border h-[85vh] border-white py-3 rounded-3xl'>
        <div className='text-white'>
          <div className='flex w-full items-center justify-between px-4'>
            <p className='flex items-center text-xs ' >
              <Brackets className={`mr-2`} />
              MAY 2023
              <Brackets className={`scale-x-[-1] ml-2`} />
            </p>
            <button className='bg-white text-black text-xs px-2 rounded-md '>
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

      <div className='w-[95%] my-3 border h-[85vh] flex flex-col justify-around text-white px-3 border-white py-3 rounded-3xl'>

        <div className='flex flex-col justify-between '>
          <div className='flex justify-between '>
            <p className='flex items-center justify-center text-xs'>
              <Brackets className={`mr-2`} />
              MAY 2023
              <Brackets className={`scale-x-[-1] ml-2`} />
            </p>
            <button className='bg-white text-black cursor-pointer p-1 px-2 rounded-md text-xs'>
              <i className="fa-solid mr-3 fa-spinner"></i>
              IN PROGRESS</button>
          </div>
          <img src={image2} alt="" />
        </div>

        <div className=''>
          <h1 className='font-bold text-3xl my-2 ' >Gamification</h1>
          <p className='text-[grey] text-md '>Add game-like elements,such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.</p>
        </div>

      </div>

      <div className='w-[95%] my-3 border h-[85vh] flex flex-col justify-around text-white px-3 border-white py-3 rounded-3xl'>

        <div className='flex flex-col justify-between '>

          <div className='flex justify-between '>
            <p className='flex items-center justify-center text-xs'>
              <Brackets className={`mr-2`} />
              MAY 2023
              <Brackets className={`scale-x-[-1] ml-2`} />
            </p>
            <button className='bg-white text-black cursor-pointer p-1 px-2 rounded-md text-xs '>
              <i className="fa-solid fa-check mr-3 "></i>
              DONE</button>
          </div>
          <img src={image3} alt="" />

        </div>

        <div className=''>
          <h1 className='font-bold text-3xl my-2 ' >
            Chatbot customization</h1>
          <p className='text-[grey] text-md '>
            Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.</p>
        </div>

      </div>

      <div className='w-[95%] my-3 border h-[85vh] flex flex-col justify-around text-white px-3 border-white py-3 rounded-3xl'>

        <div className='flex flex-col justify-between '>

          <div className='flex justify-between '>
            <p className='flex items-center justify-center text-xs'>
              <Brackets className={`mr-2`} />
              MAY 2023
              <Brackets className={`scale-x-[-1] ml-2`} />
            </p>
            <button className='bg-white text-black cursor-pointer p-1 px-2 rounded-md text-xs'>
            <i className="fa-solid mr-3 fa-spinner"></i>
            IN PROGRESS</button>
          </div>
          <img src={image4} alt="" />

        </div>

        <div className=''>
          <h1 className='font-bold text-3xl my-2 ' >
            Intergration with APIs</h1>
          <p className='text-[grey] text-md '>
            Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.
          </p>
        </div>

      </div>

    </section>

  )
}

export default FullDetails