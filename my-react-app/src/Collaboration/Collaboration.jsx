import React from 'react'
import {
    discord,
    figma,
    framer,
    notion,
    photoshop,
    protopie,
    raindrop,
    slack    
}

from "../assets/index.js"
import logo from '../assets/brainwave-symbol.svg'
import {collabContent} from "../constants/index.js"

function Collaboration() {

    const backImageUrl = './src/assets/benefits/card-4.svg';

  return (
    <div className='w-full p-3 flex flex-col justify-center items-center'>
            <h2 className='text-white text-2xl font-bold my-10'>AI Chat App for seamless collaboration</h2>
            {
                collabContent.map((data)=>(
            <div key={data.id} className='text-white  w-full'> 
                    <span className='mb-3 mt-3 text-lg text-left w-[100%] '><i className="fa-solid fa-check bg-[#910aa6] mr-3 rounded-full p-2"></i> {data.title}</span>
                    <p className='mt-3 text-[#8d8e8f] mb-5'>{data.text ? data.text : ""}</p>
            </div>
            ))
            }


            <button className='bg-no-repeat text-white font-bold cursor-pointer bg-[length:100%_100%] w-[150px] h-[50px]'
                style={{
                    backgroundImage:`url(${backImageUrl})`
                }}
            >TRY IT NOW</button>
            {
                collabContent.map((data)=>(
                    <p key={data.id} className='text-[#8d8e8f] mt-4'>{data.text ? data.text : ""}</p>
                ))
            }
        <div className='border-[#565557] border w-[350px] h-[350px] rounded-full flex justify-center items-center  '>
            <div className='relative  border-[#565557] border w-[70%] h-[70%] rounded-full flex justify-center items-center '>
                <div className='border border-white p-1 rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500 '>
                    <img src={logo} alt="" className='bg-black w-[100%] h-[100%] p-2 rounded-full ' />

                </div>
                    <img src={figma} alt=""    className='w-[50px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute top-[-33%] '  />
                    <img src={notion} alt=""   className='w-[50px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute top-[-10%] right-[-15%] '  />
                    <img src={discord} alt=""  className='w-[50px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute right-[-33%]'  />
                    <img src={slack} alt=""    className='w-[50px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute bottom-[-10%] right-[-15%]  '  />
                    <img src={photoshop} alt=""className='w-[50px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute bottom-[-33%] '  />
                    <img src={protopie} alt="" className='w-[50px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute bottom-[-10%] left-[-15%] '  />
                    <img src={framer} alt=""   className='w-[50px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute left-[-33%] '  />
                    <img src={raindrop} alt="" className='w-[50px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute top-[-10%] left-[-15%] '  />
            </div>
        </div>

    </div>
      
  )
}


export default Collaboration