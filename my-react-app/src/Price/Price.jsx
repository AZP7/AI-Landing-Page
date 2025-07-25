import React from 'react'
import Brackets from '../assets/svg/Brackets'
import { pricing } from '../constants'
function Price() {

  const prices = [
    {
      title: 'Basic',
      titleColor: "#da7a21",
      text: 'AI chatbot,personalized recommendations',
      price: '0',
      btn: 'GET STARTED',
      details1: 'An Ai chatbot that can understand your queries',
      details2: 'Personalized recommendations based on your preferences',
      details3: 'Ability to explore the app and its features without any cost'
    },
    {
      title: "Premium",
      titleColor: "#cf27df",
      text: "Advanced AI chatbot,priority support,analytics dashboard",
      price: '9.99',
      btn: 'GET STARTED',
      details1: "An advanced AI chatbot that can understand complex queries",
      details2: "An analytics dashboard to track your conversations",
      details3: "Priority support to solve issues quickly"
    },
    {
      title: "Enterprise",
      titleColor: "#df2755",
      text: "Custom AI chatbot,advanced analytics, dedicated account",
      btn: "CONTACT US",
      details1: "An AI chatbot that can understand your queries",
      details2: "Personailzed recommendations based in your preferences",
      details3: "Ability to explore the app and its features without any cost"
    }
  ]

  return (
    <div className='w-full flex flex-col justify-center items-center bg-black '>

      <div className='flex  w-full px-4 flex-col justify-center items-start text-white'>
        <p className='flex justify-center text-[#272744] text-sm items-center '>
          <Brackets className={`mr-2`} />
          GET STARTED WITH BRAINWAVE
          <Brackets className={`scale-x-[-1] ml-2`} />
        </p>
        <div className='text-2xl'>Pay once,use forever</div>
      </div>
      {
        prices.map((data, index) => (
          <div key={index} className='border border-[#1f1e1e] w-[95%] h-[60vh] p-3 my-4 rounded-2xl ' >
            <div className='text-white h-[50%] flex flex-col justify-between '>
              <h1 className={`text-[${data.titleColor}] text-3xl font-bold `} >{data.title}</h1>
              <p className='text-[grey] text-sm ' >{data.text}</p>
              {
                data.price && <p>$<span className='text-4xl font-bold ml-1'>{data.price}</span></p>
              }
              <button className='border cursor-pointer rounded-xl p-1 text-[#333] bg-[#fff] font-bold ' >{data.btn}</button>
            </div>
            <ul className='text-[#fff] mt-6' >
              <li className='text-sm py-2 border-t-1 border-[grey]' >
                <i className="fa-solid fa-check bg-[#910aa6] mr-3 rounded-full p-2"></i>
                {data.details1}

              </li>
              <li className='text-sm py-2 border-t-1 border-[grey]' >
                <i className="fa-solid fa-check bg-[#910aa6] mr-3 rounded-full p-2"></i>
                {data.details2}
              </li>
              <li className='text-sm py-2 border-t-1 border-[grey]' >
                <i className="fa-solid fa-check bg-[#910aa6] mr-3 rounded-full p-2"></i>
                {data.details3}
              </li>
            </ul>
          </div>
        ))
      }

    </div>
  )
}

export default Price
