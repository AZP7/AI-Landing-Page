import React from 'react'
import curve from '../assets/hero/curve.png'
import robot from '../assets/hero/robot.jpg'
import bg from '../assets/hero/hero-background.jpg'

function Hero() {
  return (
    <div className='w-full flex flex-col pt-20 justify-center items-center'
      style={{backgroundImage:`url(${bg})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
            backgroundPosition:"center"    }}      
    >
        <div className='w-full flex justify-center items-center flex-col '>

          <div className='flex flex-col w-full justify-center items-center'>
            <h1 className='text-white font-bold w-[75%] text-4xl tracking-wider text-center '  >
              Explore the Possibilites of AI Chatting with 
            </h1>
              <p className='relative w-[30%] text-4xl font-bold text-[#fff]'>
                  Brainwave
                  <span className='absolute top-[100%]  left-0 w-full h-3 '
                    style={{backgroundImage:`url(${curve})`,
                            backgroundSize:'cover',
                            backgroundRepeat:'no-repeat',
                            backgroundPosition:"center"}}>
                  </span>
              </p>
          </div>

              <p className=' w-110 p-1 m-3 text-white font-semibold text-center'>Unleassh the power of AI within Brainwave.Upgrade your productivity with Brainwave,the open AI chat app.</p>
              <button className='text-[#333] font-bold p-2 bg-[#fff] rounded-xl my-4 ' >GET STARTED</button>
        </div>

        <div className=' w-[80%]  h-[70vh] rounded-xl bg-[#283b4e] relative overflow-hidden my-3'>
            <img src={robot} alt="" className='object-cover mt-6  h-[75%] w-full '  />
        </div>
            <h2 className='text-4xl text-center text-white font-bold my-4'>Chat Smarter,Not Harder with Brainwave</h2>
    </div>
  )
}

export default Hero
