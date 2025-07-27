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
import { collabContent } from "../constants/index.js"
import ButtonGradient from '../assets/Svg/ButtonGradient.jsx';

function Collaboration() {


    return (
        <section className='w-full p-3 flex flex-col justify-center items-center bg-[#0e0d15] '>
            <h2 className='text-white text-2xl font-bold my-10'>AI Chat App for seamless collaboration</h2>
            {

                collabContent.map((data) => (
                    <div key={data.id} className='text-white mb-4  w-full'>
                        <span className='mb-3 mt-3 text-md text-left w-[100%] '><i className="fa-solid text-[#131313] fa-check bg-[#9226e5] mr-3 rounded-full p-1"></i> {data.title}</span>
                        <p className='mt-3 text-sm text-[#8d8e8f] mb-5'>{data.text ? data.text : ""}</p>
                    </div>
                ))
            }

            <div className='flex justify-start  w-full p-2'>

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
                        <button className='w-[100%] h-[100%] bg-black rounded-md text-white hover:text-[#9226e5] transition-all duration-300 cursor-pointer '>
                            TRY IT NOW
                        </button>
                    </div>
                </div>
            </div>


            {
                collabContent.map((data) => (
                    <p key={data.id} className='text-[#8d8e8f] text-sm mt-4'>{data.text ? data.text : ""}</p>
                ))
            }
            <div className='border-[#565557] border w-[350px] h-[350px] rounded-full flex justify-center items-center  '>
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
            </div>

        </section>

    )
}


export default Collaboration