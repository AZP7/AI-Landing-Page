import React from 'react'
import { benefits } from "../constants";
import {benefitImage2} from "../assets/index.js";
import Collaboration from '../Collaboration/Collaboration.jsx'

function Section() {
  return (

    <section className='w-full flex flex-col justify-center items-center py-10 bg-black '>

      {
        benefits.map((benefit,index)=>(
          <div key={index} className='relative w-[90%] my-3 p-4 h-[45vh] flex flex-col justify-around items-start bg-no-repeat bg-[length:100%_100%] rounded-xl shadow-lg'
          style={{backgroundImage:`url(${benefit.backgroundUrl})`}}>
            {/* <img src={benefitImage2} className='absolute opacity-10 top-0 left-0' alt="" /> */}
            <div className=' w-full  p-4'> 
              <h2 className='text-white text-3xl mb-2 font-bold'>{benefit.title}</h2>
              <p  className='text-[#8d8e8f] text-lg mt-3  '>{benefit.text}</p>
            </div>

              <div className='w-full p-4 flex justify-between'>
                  <img src={benefit.iconUrl} alt="" className='cursor-pointer' />
                  <button className='text-white font-semibold cursor-pointer'>EXPLORE MORE <i className="fa-solid fa-chevron-right text-white ml-3"></i> </button>
              </div>
          </div>
        ))
      } 
      <Collaboration></Collaboration>
        
    </section>

  )
}

export default Section
