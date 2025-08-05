import React from 'react'
import Brackets from '../assets/svg/Brackets'
import image1 from '../assets/roadmap/image-1.png'
import image2 from '../assets/roadmap/image-2.png'
import image3 from '../assets/roadmap/image-3.png'
import image4 from '../assets/roadmap/image-4.png'
import grid from '../assets/grid.png'


function FullDetails() {

  const data1 = [
    {
      date: "MAY 2023",
      btn: "Done",
      img: image1,
      title: "Voice Recognition",
      icon:"fa-solid fa-check  rounded-full p-2",
      text: "Enable the chatbot to understand and respond to voice commands,making it easier for users to interact with the app hands-free."
    },
    {
      date: "MAY 2023",
      btn: "Done",
      img: image3,
      icon:"fa-solid fa-check  rounded-full p-2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with."
    },
  ]
  const data2=[
    {
      date: "MAY 2023",
      btn: "IN PROGRESS",
      img: image2,
      icon:"fa-solid mr-3 fa-spinner",
      title: "Gamification",
      text: "Add game-like elements,such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently."
    },
    {
      date: "MAY 2023",
      btn: "IN PROGRESS",
      img: image4,
      title: "Integration with APIs",
      icon:"fa-solid mr-3 fa-spinner",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations."
    }

  ]

  return (

    <section className='flex flex-col bg-[#040404] pb-6 justify-center items-center' id='fullDetails' >

      <div className='text-white w-full p-2'>
        <h1 className='text-center my-3 w-full underline-offset-4 underline lg:text-sm '>SEE THE FULL DETAILS</h1>
        <div className='my-2 lg:flex lg:flex-col mt-[50px] lg:pt-5 lg:justify-center lg:items-center'>
          <p className='text-xs flex justify-start items-center'>
            <Brackets className={`mr-2`} />
            READY TO GET STARTED
            <Brackets className={`ml-2 scale-x-[-1]`} />

          </p>
          <h2 className='text-2xl lg:text-4xl lg:font-medium font-bold my-2'>What we're working on</h2>
        </div>
      </div>
      <div className='container flex flex-col justify-around md:flex-row '>

          <div className='flex flex-col md:w-[48%] justify-center items-center md:flex-row md:flex-wrap md:justify-evenly'>
              {
                data1.map((data, index) => (
                  <div key={index}
                    style={{
                      backgroundImage:`url(${grid})`,
                      backgroundSize:"contain",
                      backgroundPosition:"center",
                      backgroundRepeat:"no-repeat"
                    }}
                    className='border border-white text-white my-3 w-[90%] h-[650px] overflow-hidden md:w-[45vw] rounded-xl '
                  >
                      
                      <div className=' overflow-hidden h-[70%]'>

                        <div className='flex w-full  justify-between items-center p-3'>

                          <p className='flex items-center '>
                            <Brackets className={`mr-2`}/>
                            {data.date}
                            <Brackets className={`ml-2 scale-x-[-1]`} />

                          </p>
                          <button className='bg-white rounded-xl py-1 px-3 text-black'>
                            <i className={data.icon}/>
                            {data.btn}
                          </button>

                        </div>
                        <img src={data.img} className='object-contain' alt="" />

                      </div>

                      <div className='h-[30%] px-3'>

                        <h1 className='text-4xl md:text-2xl font-semibold mb-3'>{data.title}</h1>
                        <p className='text-[grey]' >{data.text}</p>

                      </div>

                  </div>
                ))
              }

          </div>
          <div className='flex flex-col md:w-[48%] translate-y-12 justify-center items-center md:flex-row md:flex-wrap md:justify-evenly '>
          {
                data2.map((data, index) => (
                  <div key={index}
                    style={{
                      backgroundImage:`url(${grid})`,
                      backgroundSize:"contain",
                      backgroundPosition:"center",
                      backgroundRepeat:"no-repeat"
                    }}
                    className='border border-white text-white my-3 w-[90%] md:w-[45vw] rounded-xl h-[650px] '
                  >
                      
                      <div className=' overflow-hidden h-[70%]  '>

                        <div className='flex w-full  justify-between items-center p-3'>

                          <p className='flex items-center '>
                            <Brackets className={`mr-2`}/>
                            {data.date}
                            <Brackets className={`ml-2 scale-x-[-1]`} />

                          </p>
                          <button className='bg-white rounded-xl py-1 px-3 text-black'>
                            <i className={data.icon}/>
                            {data.btn}
                          </button>

                        </div>
                        <img src={data.img} className='object-contain' alt="" />

                      </div>

                      <div className='h-[30%] px-3'>

                        <h1 className='text-4xl md:text-2xl font-semibold mb-3'>{data.title}</h1>
                        <p className='text-[grey]' >{data.text}</p>

                      </div>

                  </div>
                ))
              }

          </div>

      </div>
    </section>

  )
}

export default FullDetails