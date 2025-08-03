import React from 'react'
import Brackets from '../assets/svg/Brackets'
import image1 from '../assets/roadmap/image-1.png'
import image2 from '../assets/roadmap/image-2.png'
import image3 from '../assets/roadmap/image-3.png'
import image4 from '../assets/roadmap/image-4.png'
import grid from '../assets/grid.png'


function FullDetails() {

  const datas = [
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
      btn: "IN PROGRESS",
      img: image2,
      icon:"fa-solid mr-3 fa-spinner",
      title: "Gamification",
      text: "Add game-like elements,such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently."
    },
    {
      date: "MAY 2023",
      btn: "Done",
      img: image3,
      icon:"fa-solid fa-check  rounded-full p-2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with."
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

    <section className='flex flex-col bg-[#0e0d15] justify-center items-center' id='fullDetails' >

      <div className='text-white w-full p-2'>
        <h1 className='text-center my-3 w-full underline-offset-4 underline '>SEE THE FULL DETAILS</h1>
        <div className='my-2'>
          <p className='text-xs flex justify-start items-center'>
            <Brackets className={`mr-2`} />
            READY TO GET STARTED
            <Brackets className={`ml-2 scale-x-[-1]`} />

          </p>
          <h2 className='text-2xl font-bold my-2'>What we're working on</h2>
        </div>
      </div>

      {
        datas.map((data, index) => (
          <div key={index}
          >
              
              <div>

                <div>

                  <p>{data.date}</p>
                  <button>{data.btn}</button>

                </div>
                <img src={data.img} alt="" />

              </div>

              <div>

              </div>

          </div>
        ))
      }

    </section>

  )
}

export default FullDetails