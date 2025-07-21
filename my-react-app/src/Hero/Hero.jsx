import React from 'react'
import curve from '../assets/hero/curve.png'
import robot from '../assets/hero/robot.jpg'
import bg from '../assets/hero/hero-background.jpg'

function Hero() {
  return (
    <div className='w-full border flex flex-col pt-20 justify-center items-center'
      style={{backgroundImage:`url(${bg})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
            backgroundPosition:"center"    }}      
    >
        <div className='w-full flex justify-center items-center flex-col '>

              <p className='w-50 relative font-semibold m-4 text-white  text-center text-3xl'>Explore the Possibilites of AI Chatting with 
                  <span 
                  style={{
                    
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center'}} 
                    className=''> Brainwave
                    </span>
                    <span className='absolute top-[100%]  left-0 w-full h-3 '
                    style={{backgroundImage:`url(${curve})`,
                            backgroundSize:'cover',
                            backgroundRepeat:'no-repeat',
                            backgroundPosition:"center"}}></span>
                  
              </p>
              <p className=' w-110 p-1 m-3 text-white font-semibold text-center'>Unleassh the power of AI within Brainwave.Upgrade your productivity with Brainwave,the open AI chat app.</p>
              <button 
                className='p-4 pl-6 pr-6 border cursor-pointer m-3 bg-white font-bold rounded-xl'
              >Get Started</button>
        </div>

        <div className=' w-[80%] h-[50vh] relative overflow-hidden mb-3'>
            <img src={robot} alt="" className='absolute top-0 left-0 w-full '  />
        </div>
            <h2>Chat Smarter,Not Harder with Brainwave</h2>
    </div>
  )
}

export default Hero
