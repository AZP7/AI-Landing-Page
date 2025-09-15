import React from 'react'
import curve from '../assets/hero/curve.png'
import robot from '../assets/hero/robot.jpg'
import bg from '../assets/hero/hero-background.jpg'
import BgCircle from '../BGCircle/BgCircle'
import Loading from '../assets/loading.png'
import Desktop from '../Responsive/Desktop'
import Logo from '../assets/yourlogo.svg'
import file from '../assets/hero/svg/file-02.svg'
import home from '../assets/hero/svg/home-smile.svg'
import plus from '../assets/hero/svg/plus-square.svg'
import search from '../assets/hero/svg/search-md.svg'
import image1 from '../assets/notification/image-1.png'
import image2 from '../assets/notification/image-2.png'
import image3 from '../assets/notification/image-3.png'
import image4 from '../assets/notification/image-4.png'





function Hero() {

  const IsDesktop = Desktop();

  const logo = [Logo, Logo, Logo, Logo, Logo]
  const icons = [home,file,search,plus]
  const noti = [image4,image3,image2]

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
          <p className='text-white font-bold text-2xl text-center lg:mr-2'>

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

        <p className=' w-full p-1 m-3 text-white font-semibold text-center'>Unleassh the power of AI within Brainwave.Upgrade your productivity with Brainwave,the open AI chat app.</p>
        <button className='text-[#333] z-10 font-bold p-2 bg-[#fff] rounded-xl my-4 ' >GET STARTED</button>
      </div>

      {/* Container of the Hero Image */}
      <div 
        className="w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] lg:h-[400px] xl:h-[450px] relative p-[10px] flex justify-center items-start h-[350px] rounded-xl overflow-hidden my-3"
        style={{
          backgroundImage: `linear-gradient(to bottom left, #663695, #e5d38f),
                            linear-gradient(to bottom right, #67a89f, #ec8be7)`
        }}
      >

        {/* Background shadow */}

        <div className='w-[90%] h-[80%] rounded-xl bg-[#1b1b2e] absolute top-1/2 left-1/2 transform z-50 -translate-x-1/2 -translate-y-1/2 '></div>
        <div className=' w-[80%] h-[65%] rounded-xl bg-[#333]/80 backdrop-blur-lg absolute left-1/2 -translate-x-1/2 top-27 lg:top-32 xl:top-35 z-20 ' ></div>

        {/* Background shadow */}

        {/* Parent of the Hero Image */}
        <div className='w-full h-[85%] flex-col flex items-center justify-end pb-3 relative rounded-xl  overflow-hidden '>

          <div className=' p-2 px-4 md:w-[60%] lg:w-[40%] xl:w-[30%] rounded-3xl backdrop-blur-lg bg-black/30 w-[90%] flex justify-start items-center text-white z-110' >
            <img src={Loading} className='w-[20px] mr-3' alt="Loading" />
            <p className='text-sm'>
              AI is generating
            </p>
          </div>
          <img
            src={robot}
            alt=""
            // className="absolute top-0 w-full z-100  left-0 -translate-y-60 object-contain" 
            className='absolute top-0 left-0 w-full z-100 sm:-translate-y-20 md:-translate-y-30 lg:-translate-y-60 object-cover '
          />

        </div>

      </div>

      {
        IsDesktop &&
        <div className='relative flex justify-between items-start -translate-y-[200px] w-[900px] z-110 '>

          <div className='flex w-[20%] justify-around items-center p-3 rounded-xl bg-white/10 backdrop-blur-xl '>
              {
                icons.map((data,index)=>(
                  <img src={data} alt="icons" className='' key={index} />
                ))
              }

          </div>

          <div className='flex items-center rounded-xl -translate-y-[100px] bg-white/10 backdrop-blur-xl p-4'>

            <img src={image1} alt="noti icon" className='w-[40px] mr-2 rounded-xl '  />

            <div className='flex flex-col'>

              <p className='text-sm text-white font-bold'>Code generation</p>
              
              <div className='flex'>

                  {
                    noti.map((data,index)=>(
                      <img src={data} className='rounded-full w-[20px] h-[20px]' key={index} alt='noti icon' />
                    ))
                  }
                  <p className='ml-3 text-gray-500'>1m ago</p>

              </div>

            </div>

          </div>

        </div>
      }


      {

        IsDesktop &&
        <>
          <div className='w-[85%] flex flex-col justify-center items-center pt-5 pb-6'>
            <p className='text-gray-500 font-bold text-md '>HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT</p>
            <div className='flex w-full justify-evenly mt-5'>
              {
                logo.map((data, index) => (
                  <img src={data} className='w-[100px]' key={index} alt="" />
                ))
              }
            </div>

          </div>
        </>

      }

      <h2 className='text-3xl text-center text-white font-bold my-4'>Chat Smarter,Not Harder with Brainwave</h2>
    </div>
  )
}

export default Hero
