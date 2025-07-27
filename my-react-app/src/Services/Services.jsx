import React from 'react';
import loading from '../assets/loading.png'
import bg1 from '../assets/services/service-1.png'
import bg2 from '../assets/services/service-2.png'
import bg3 from '../assets/services/service-3.png'
import {brainwaveServicesIcons} from '../constants/index.js'
import play from  '../assets/play.svg'
import bgImage from '../assets/hero/hero-background.jpg'


function Services() {
  return (

    <section className='flex flex-col justify-center items-center bg-[#101820] '
      style={{backgroundImage:`url(${bgImage})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}
    >
      <div
        className=' w-full flex mt-7 flex-col text-[#fff] p-2'
        >
        <h1 className='text-2xl font-semibold mb-5 w-[60%] '>Generative AI made for creators.</h1>
        <p
          className='text-[grey] mb-10 '
        >
          Brainwave unlocks the potential of AI-powered applications</p>
      </div>
      <div
        className='w-[90%] border h-[85vh] rounded-2xl border-[grey] flex flex-col justify-around items-end '
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "center"
        }}
      >
        <div className=' w-[70%] pr-4 '>

          <h2 className='font-bold text-3xl text-white my-5'>Smartest AI</h2>
          <p className='text-[grey] my-6'>Brainwave unlocks the potential of AI-powered applications</p>

          <ul>
            <li className='text-white border-[#515050] border-t-[1px] py-3 mt-2 ' ><i className="fa-solid text-black fa-check bg-[#9226e5] mr-3 rounded-full p-1"></i> Photo generation</li>
            <li className='text-white border-[#515050] border-t-[1px] py-3 mt-2 ' ><i className="fa-solid text-black fa-check bg-[#9226e5] mr-3 rounded-full p-1"></i> Photo enhance</li>
            <li className='text-white border-[#515050] border-t-[1px] py-3 mt-2 ' ><i className="fa-solid text-black fa-check bg-[#9226e5] mr-3 rounded-full p-1"></i> Seamless Integration</li>
          </ul>

        </div>
        <div className='w-full flex justify-center'>

          <div className='w-[90%] bg-black/20 backdrop-blur-xl   border border-[grey] flex p-4 rounded-4xl text-white items-center justify-start'>
            <img src={loading} alt="" className='w-[20px] mr-3 ' />
            <p className='text-[#fff] font-semibold '>AI is generating</p>
          </div>
        </div>

      </div>

      <div
        className='w-[90%] border h-[85vh] rounded-2xl my-7 border-[grey] flex flex-col justify-around items-end '

        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <div className='rounded-3xl relative p-4 py-6 bg-black text-white '>
 
          <p>Hey Brainwave, enhance this photo</p>

        </div>

        <div className=' text-white px-6'>
          <h2 className='text-3xl font-semibold mb-4'>Photo editing</h2>
          <p className='text-[grey]'>Automatically enhance your photos using our AI app's photo editing features.Try it now.</p>
        </div>

      </div>

       <div className='border border-[#343434] w-[90%]  h-[85vh] rounded-2xl  flex flex-col justify-around items-center p-3   '>
          <div className='text-white  w-[95%] flex flex-col justify-evenly items-start  h-[40%] '>
              <h1 className='text-2xl font-bold '>Video generation</h1>
              <p className='text-[grey] '>The world's most powerful AI photo and video art generation engine.What will you create?</p>
              <div className='flex w-full  justify-around '>
                  {
                    brainwaveServicesIcons.map((data,index)=>(
                      <img key={index} src={data} className='w-[45px] p-2 border rounded-2xl bg-[grey]/30 backdrop-blur-2xl ' />
                    ))
                  }
              </div>
          </div>

          <div className='border flex border-[#343434] py-10 flex-col px-3  justify-between items-start rounded-2xl w-[95%] h-[50%] bg-center bg-cover '
            style={{
              backgroundImage:`url(${bg3})`
            }}
          >
            <div className='relative flex flex-col text-white w-[50%] rounded-2xl bg-[#2c2a2a] p-4 '>
                <p className='text-lg' >Video generated!</p>
                <span className='text-[grey] text-sm w-[100%] text-right '>JUST NOW</span>
            </div>
            <div  className='flex w-full justify-center items-center'> 
                <img src={play} alt="play" className='w-[30px]   h-[30px]  ' />
                <div className='w-[80%]  ml-3 h-[5px] rounded-xl bg-white '></div>
            </div>
          </div>
        
      </div> 
    </section>


  );
}

export default Services
