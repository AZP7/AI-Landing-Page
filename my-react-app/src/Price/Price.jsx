import React from 'react'
import Brackets from '../assets/svg/Brackets'
import CustomBtn from '../assets/Svg/CustomBtn'



function Price() {

  const bgimage  = "../assets/Svg/Group1.svg"

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
    <div className='w-full pt-6 flex flex-col justify-center items-center bg-[#0e0d15] '>

      <div className='flex  w-full px-4 flex-col justify-center items-start text-white'>
        <p className='flex justify-center text-[#707090] text-xs items-center '>
          <Brackets className={`mr-2`} />
          GET STARTED WITH BRAINWAVE
          <Brackets className={`scale-x-[-1] ml-2`} />
        </p>
        <div className='text-2xl mt-4'>Pay once,use forever</div>
      </div>
      {
        prices.map((data, index) => (
          <div key={index} className='border border-[#1f1e1e] w-[95%] h-[60vh] p-3 my-4 rounded-2xl ' >
            <div className='text-white h-[50%] flex flex-col justify-between '>
              <h1 className={`text-3xl font-bold `}
                style={{color:data.titleColor}}
              >{data.title}</h1>
              <p className='text-[grey] text-sm ' >{data.text}</p>
              {
                data.price && <p>$<span className='text-4xl font-bold ml-1'>{data.price}</span></p>
              }
              <div className='w-full rounded-xl overflow-hidden h-[70px] '>
                  <CustomBtn className={`w-full h-full`}/>
              </div>
              {/* <div className=' w-full  bg-black  flex '>

              <button className='border w-[60%] cursor-pointer p-1 text-[#333] bg-[#fff] font-bold ' >{data.btn}</button>
              </div> */}
            </div>
            <ul className='text-[#fff] mt-6' >
              <li className='text-md flex items-center py-2 mt-3 border-t-1 border-[grey]' >
                <i className="fa-solid  text-black fa-check bg-[#9226e5] mr-3 rounded-full p-1"></i>
                <p>
                  {data.details1}
                </p>


              </li>
              <li className='text-md flex items-center py-2 mt-3 border-t-1 border-[grey]' >
                <i className="fa-solid text-black fa-check bg-[#9226e5] mr-3 rounded-full p-1"></i>
                <p>
                  {data.details2}
                </p>

              </li>
              <li className='text-md flex items-center py-2 mt-3 border-t-1 border-[grey]' >
                <i className="fa-solid text-black fa-check bg-[#9226e5] mr-3 rounded-full p-1"></i>
                <p> 
                  {data.details3}
                </p>
              </li>
            </ul>
          </div>
        ))
      }

    </div>
  )
}

export default Price
