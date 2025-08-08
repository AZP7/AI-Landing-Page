import React from 'react'
import Brackets from '../assets/svg/Brackets'
import Line from '../assets/pricing/lines.svg?react'


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
    <div className='w-full pt-6 flex flex-col  justify-center items-center bg-[var(--bg-color)] '>

      <div className='flex  w-full lg:justify-center lg:items-center px-4 flex-col justify-center items-start text-white'>
        <p className='flex justify-center text-[#707090] text-xs items-center '>
          <Brackets className={`mr-2`} />
          GET STARTED WITH BRAINWAVE
          <Brackets className={`scale-x-[-1] ml-2`} />
        </p>
        <div className='text-2xl mt-4 lg:font-medium lg:text-4xl '>Pay once,use forever</div>
      </div>
      
      <div className='w-[95%] relative flex flex-col lg:justify-around justify-center items-center lg:flex-row'>
          {
            prices.map((data, index) => (
              <div key={index} className='border border-[#1f1e1e] lg:w-[30%] w-[100%] h-[400px] lg:h-[550px] p-3 my-4 rounded-2xl ' >
                <div className='text-white h-[50%] flex flex-col justify-between '>
                  <h1 className={`text-3xl font-bold `}
                    style={{color:data.titleColor}}
                  >{data.title}</h1>
                  <p className='text-[grey] text-sm ' >{data.text}</p>
                  {
                    data.price && <p>$<span className='text-4xl font-bold ml-1'>{data.price}</span></p>
                  }
                  <div className='w-full justify-center items-center flex overflow-hidden  '>
                      <button
                        style={{color:data.titleColor}}
                        className=' w-full text-center p-2 rounded-lg cursor-pointer font-bold bg-[#fff] '>
                        GET STARTED
                      </button>
                  </div>
                

                </div>
                <ul className='text-[#fff] mt-6 ' >
                  <li className='text-md flex items-center py-2 mt-3 border-t-1 border-[grey]' >
                    <i className="fa-solid md:text-sm text-xs text-black fa-check bg-[#9226e5] mr-3 rounded-full p-1"></i>
                    <p className='text-xs md:text-sm'>
                      {data.details1}
                    </p>


                  </li>
                  <li className='text-md flex items-center py-2 mt-3 border-t-1 border-[grey]' >
                    <i className="fa-solid md:text-sm text-xs text-black fa-check bg-[#9226e5] mr-3 rounded-full p-1"></i>
                    <p className='text-xs md:text-sm'>
                      {data.details2}
                    </p>

                  </li>
                  <li className='text-md flex items-center py-2 mt-3 border-t-1 border-[grey]' >
                    <i className="fa-solid md:text-sm text-xs text-black fa-check bg-[#9226e5] mr-3 rounded-full p-1"></i>
                    <p className='text-xs md:text-sm'> 
                      {data.details3}
                    </p>
                  </li>
                </ul>
              </div>
            ))
          }
          {/* <Line className='absolute -left-[10%]'/> */}

      </div>
      

    </div>
  )
}

export default Price
