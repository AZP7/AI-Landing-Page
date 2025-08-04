import React, { useEffect } from 'react'
import { useState } from 'react'
import { benefits } from '../constants'
import bgImage from '../assets/benefits/image-2.png'

function Section() {

  const [data,setData] = useState()

  useEffect(()=>{
    setData(benefits.map((data)=>({
      ...data,
      hover:false
    })))
    },[])

    const handleMouseEnter = (id) => {
      setData(prevData =>
        prevData.map(item =>
          item.id === id ? { ...item, hover:true } : item
        )
      );
    };
    const handleMouseLeave = (id) => {
      setData(prevData =>
        prevData.map(item =>
          item.id === id ? { ...item, hover: false } : item
        )
      );
    };

  return (

    <section className='w-full flex md:flex-wrap md:flex-row md:justify-around flex-col justify-center items-center py-10 bg-[#0e0d15] xl:justify-evenly '
    >
    
      {
        data&&data.map((benefit) => (
          <div key={benefit.id} 
            className='relative hover:boxshadow transition-all duration-500 ease-in overflow-hidden w-[95vw] h-[50vh] sm:w-[75vw] md:w-[45vw] md:h-[50vh] lg:w-[30vw] lg:h-[60vh] xl:w-[25vw]  my-3 p-4 flex flex-col justify-around items-start bg-no-repeat bg-[length:100%_100%] rounded-xl shadow-lg'
            style={{ backgroundImage: `url(${benefit.backgroundUrl})` }}
            onMouseEnter={()=>handleMouseEnter(benefit.id)}
            onMouseLeave={()=>handleMouseLeave(benefit.id)}>
              {
                benefit.hover&&<img src={bgImage}  className='absolute fade-in top-0 left-0 opacity-20' alt="" />
              }
            <div className=' w-full p-4'>
              <h2 className='text-white text-3xl mb-2 xl:text-2xl font-bold'>{benefit.title}</h2>
              <p className='text-[#8d8e8f] text-lg mt-3 xl:text-sm '>{benefit.text}</p>
            </div>

            <div className='w-full p-4 flex justify-between'>
              <img src={benefit.iconUrl} alt="" className='cursor-pointer w-[35%] xl:w-[25%] h-[70px]  ' />
              <button className='text-white font-semibold cursor-pointer'>EXPLORE MORE <i className="fa-solid fa-chevron-right text-white ml-3"></i> </button>
            </div>
          </div>
        ))
      }

    </section>

  )
}

export default Section
