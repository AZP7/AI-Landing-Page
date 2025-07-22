import React from 'react';
import loading from '../assets/loading.png'
import bg1 from '../assets/services/service-1.png'
import bg2 from '../assets/services/service-2.png'
import bg3 from '../assets/services/service-3.png'

function Services() {
  return (

    <>
      <div
        className=' w-full flex flex-col text-[#fff] p-2'>
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
              <li className='text-white border-[grey] border-t-[1px] py-3 ' ><i className="fa-solid fa-check bg-[#910aa6] mr-3 rounded-full p-2"></i> Photo generation</li>
              <li className='text-white border-[grey] border-t-[1px] py-3 ' ><i className="fa-solid fa-check bg-[#910aa6] mr-3 rounded-full p-2"></i> Photo enhance</li>
              <li className='text-white border-[grey] border-t-[1px] py-3 ' ><i className="fa-solid fa-check bg-[#910aa6] mr-3 rounded-full p-2"></i> Seamless Integration</li>
            </ul>

        </div>
        <div className='w-full flex justify-center'>

          <div className='w-[90%] bg-grey/20 backdrop-blur-md p-2  border border-[grey] flex p-4 rounded-4xl text-white items-center justify-start'>
            <img src={loading} alt="" className='w-[20px] mr-3 ' />
            <p className='text-[#fff] font-semibold '>AI is generating</p>
          </div>
        </div>

      </div>

        <div 
          className='w-[90%] border h-[85vh] rounded-2xl border-[grey] flex flex-col justify-around items-end '
        
          style={{
            backgroundImage:`url(${bg2})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center'
          }}
        >
            <div className='border border-white bg-black'>
              <p className='text-white'>Hey Brainwave, enhance this photo</p>
            </div>

            <div className=' text-white px-6'>
              <h2 className='text-3xl font-semibold mb-4'>Photo editing</h2>
              <p className='text-[grey]'>Automatically enhance your photos using our AI app's photo editing features.Try it now.</p>
            </div>

        </div>

    </>

  );
}

export default Services
