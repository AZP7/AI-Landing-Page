import React from 'react'
import curve from '../assets/hero/curve.png'
import robot from '../assets/hero/robot.jpg'
import bg from '../assets/hero/hero-background.jpg'
import ButtonSvg from '../assets/svg/ButtonSvg'

function Hero() {
  return (
    <div className='w-full border flex flex-col pt-20 justify-center items-center'
      style={{backgroundImage:`url(${bg})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
            backgroundPosition:"center"    }}      
    >
        <div className='w-full flex justify-center items-center flex-col '>

          <div className='flex flex-col w-full justify-center items-center'>
            <h1 className='text-white font-bold w-[75%] text-4xl tracking-wider text-center '  >
              Explore the Possibilites of AI Chatting with 
              <p className='relative text-[#fff]'>
                  Brainwave
                  <span className='absolute top-[100%]  left-0 w-full h-3 '
                    style={{backgroundImage:`url(${curve})`,
                            backgroundSize:'cover',
                            backgroundRepeat:'no-repeat',
                            backgroundPosition:"center"}}>
                  </span>
              </p>
            </h1>
          </div>

              <p className=' w-110 p-1 m-3 text-white font-semibold text-center'>Unleassh the power of AI within Brainwave.Upgrade your productivity with Brainwave,the open AI chat app.</p>
              <div className='flex  relative m-3 cursor-pointer '>
                  <ButtonSvg className={`absolute  top-0 right-0`}/>
                  <p className=' text-center w-full text-[#333] font-bold transform  absolute  '
                    style={{
                      top:'50%',
                      left:'50%',
                      transform:'translateX(-50%) translateY(-50%)',
                    }}
                  >Get Started</p>
              </div>
        </div>

        <div className=' w-[80%] h-[50vh] relative overflow-hidden mb-3'>
            <img src={robot} alt="" className='absolute top-0 left-0 w-full '  />
        </div>
            <h2 className='text-4xl text-center text-white font-bold my-4'>Chat Smarter,Not Harder with Brainwave</h2>
    </div>
  )
}

export default Hero
