import React, { useState } from 'react'
import curve from '../assets/hero/curve.png'
import robot from '../assets/hero/robot.jpg'
import bg from '../assets/hero/hero-background.jpg'
import BgCircle from '../BGCircle/BgCircle'


function Hero() {

  return (
    <div className='w-full flex flex-col pt-20 overflow-hidden bg-[var(--bg-color)] justify-center items-center relative'
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <BgCircle className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-30 ' borderColor={'grey'} />
      <div className='w-full flex justify-center items-center flex-col '>

        <div className='flex  w-[80%] flex-col lg:flex-row lg:justify-center items-center  '>
          <p className='text-white font-bold text-3xl text-center lg:mr-2'>

            Explore the Possibilities of AI Chatting with

          </p>

          <p className='relative text-white font-bold text-3xl '>
            Brainwave
            <span className='absolute h-[20px] -bottom-[10px] left-0 w-[100%]'
              style={{
                backgroundImage: `url(${curve})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "center"
              }}
            ></span>
          </p>
        </div>

        <p className=' w-110 p-1 m-3 text-white font-semibold text-center'>Unleassh the power of AI within Brainwave.Upgrade your productivity with Brainwave,the open AI chat app.</p>
        <button className='text-[#333] font-bold p-2 bg-[#fff] rounded-xl my-4 ' >GET STARTED</button>
      </div>

      <div
        className="w-[80%] lg:w-[70%]  relative p-[10px] flex justify-center items-start h-[65vh] rounded-xl overflow-hidden my-3"
        style={{
          backgroundImage: `linear-gradient(to bottom left, #663695, #e5d38f),
                            linear-gradient(to bottom right, #67a89f, #ec8be7)`
        }}
      >   
          <div className='w-[90%] h-[80%] rounded-xl bg-[#1b1b2e] absolute top-1/2 left-1/2 transform z-10 -translate-x-1/2 -translate-y-1/2 '></div>
          <div className='w-[80%] h-[65%] rounded-xl bg-[#1b1b2e]/30 backdrop-blur-lg absolute top-33  left-1/2 -translate-x-1/2 z-0 '></div>
          <div className='w-full h-[85%] flex justify-center items-center relative rounded-xl  overflow-hidden '>


            <img 
                src={robot} 
                alt=""
                className="absolute top-0 w-full z-100  left-0 -translate-y-60 object-contain" 
                />

          </div>

        </div>
      
      <h2 className='text-4xl text-center text-white font-bold my-4'>Chat Smarter,Not Harder with Brainwave</h2>
    </div>
  )
}

export default Hero
