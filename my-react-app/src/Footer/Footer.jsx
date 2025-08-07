import React from 'react'
import { socials } from '../constants'
import ButtonGradient from '../assets/svg/ButtonGradient'

function Footer() {
  
  return (
    
    <footer className='flex bg-[var(--bg-color)] flex-col justify-around items-center w-full h-[30vh]'>

      <div className="relative w-[140px] h-[50px]">
        <ButtonGradient width={0} height={0} />

        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 120 50"
          preserveAspectRatio="none"
        >
          <rect
            width="120"
            height="50"
            rx="8"
            ry="8"
            fill="url(#btn-left)" // try other ids: btn-top, btn-bottom, btn-right
          />
        </svg>

        <div className="absolute inset-0 flex p-1 items-center justify-center text-black font-semibold">
          <button 
            className='w-[100%] font-bold lg:font-medium text-sm h-[100%] bg-black rounded-md text-white hover:text-[#9226e5] transition-all duration-300 cursor-pointer '>
              OUR ROADMAP
          </button>
        </div>
      </div>

      {/* <button className='text-white border border-white p-1 rounded-xl px-2'>OUR ROADMAP</button> */}


      <div className='flex justify-around flex-col w-full items-center md:flex-row md:justify-between pl-3  '>
        <p className='text-[grey] text-lg'>&copy; 2025. All rights reserved</p>
        <div  className='flex my-3 flex-row w-[50%] md:w-[30%] items-center justify-around  '>
        {
          socials.map((data) => (
              <img key={data.id} src={data.iconUrl} className='w-[40px] p-2 bg-white/10 backdrop-blur-md rounded-full cursor-pointer ' alt="" />
            ))
        }
        </div>

      </div>

    </footer>
  )
}

export default Footer
