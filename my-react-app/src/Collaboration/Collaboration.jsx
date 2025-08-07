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
}from "../assets/index.js"
import logo from '../assets/brainwave-symbol.svg'
import { collabContent } from "../constants/index.js"
import Curve2 from "../assets/collaboration/curve-2.svg?react"
import Curve1 from '../assets/collaboration/curve-1.svg?react'

function Collaboration() {


    return (
        <section className='w-full p-3 flex flex-col lg:h-[100vh] lg:flex-row md:items-start justify-center items-center bg-[var(--bg-color)] '>
            <div className='lg:h-[100%] flex flex-col pl-4'>

                    <h2 className='text-white text-2xl lg:text-left lg:w-[70%] lg:text-4xl font-bold my-10'>AI Chat App for seamless collaboration</h2>
                    {

                        collabContent.map((data) => (
                            <div key={data.id} className='text-white mb-4 md:w-[40%] lg:w-[80%] w-full'>
                                <span className='mb-3 mt-3 text-md text-left w-[100%] '><i className="fa-solid text-[#131313] fa-check bg-[#9226e5] mr-3 rounded-full p-1"></i> {data.title}</span>
                                <p className='mt-3 text-sm  text-[#8d8e8f] mb-5'>{data.text ? data.text : ""}</p>
                            </div>
                        ))
                    }

                    <div className='flex justify-start w-[40%] '>

                        <button className='px-4 text-[#333] bg-white rounded-lg font-bold cursor-pointer py-2'>TRY IT NOW</button>

                    </div>
            </div>



            <div className='w-full flex flex-col justify-center lg:justify-start lg:h-[100%] items-center'>
                    {
                        collabContent.map((data) => (
                            <p key={data.id} className='text-[#8d8e8f] lg:w-[40%] lg:text-left text-sm mt-4'>{data.text ? data.text : ""}</p>
                        ))
                    }
                <div className='border-[#565557] relative xl:translate-x-20 translate-y-15 mt-4 border w-[350px] h-[350px] rounded-full flex justify-center items-center  '>
                
                    <div className='relative  border-[#565557] border w-[70%] h-[70%] rounded-full flex justify-center items-center '>
                        <div className='border border-white p-1 rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500 '>
                            <img src={logo} alt="" className='bg-black w-[100%] h-[100%] p-2 rounded-full ' />

                        </div>
                        <img src={figma} alt="" className='w-[45px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute top-[-33%] ' />
                        <img src={notion} alt="" className='w-[45px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute top-[-10%] right-[-15%] ' />
                        <img src={discord} alt="" className='w-[45px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute right-[-33%]' />
                        <img src={slack} alt="" className='w-[45px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute bottom-[-10%] right-[-15%]  ' />
                        <img src={photoshop} alt="" className='w-[45px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute bottom-[-33%] ' />
                        <img src={protopie} alt="" className='w-[45px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute bottom-[-10%] left-[-15%] ' />
                        <img src={framer} alt="" className='w-[45px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute left-[-33%] ' />
                        <img src={raindrop} alt="" className='w-[45px]  bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#565557] absolute top-[-10%] left-[-15%] ' />


                    </div>

                        <Curve1
                         fill="#fff"
                         className='absolute -left-[150%] w-[500px]  top-[50%]'/>

                         <Curve2
                           className='absolute -right-[55%] top-[50%]' 
                            />
                </div>

            </div>

        </section>

    )
}


export default Collaboration