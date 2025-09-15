import React from 'react'
import logo from '../assets/brainwave.svg'
import Navbar from '../Navbar/Navbar'
import Desktop from '../Responsive/Desktop'


function Header() {
  const isDesktop = Desktop();
  const li = ['FEATURES','PRICING','HOW TO USE','ROADMAP','NEW ACCOUNT']
  const account = ['NEW ACCOUNT','SIGN IN']

  return (
    <header
      className='fixed z-140 bg-black/50 backdrop-blur-md p-4 w-full flex justify-between items-center'
    >
      <img src={logo} alt="" />
      {
        isDesktop?
        <>
        <nav className='w-[75%] flex justify-between items-center '>

          <ul className='flex justify-around w-[65%] '>
            {
              li.map((data,index)=>(
                <li className='text-gray-400  cursor-pointer transition-all duration-600 hover:text-violet-700 text-center font-[600]' key={index}>{data}</li>
              ))
            }

          </ul>

          <ul className='flex justify-evenly w-[30%] '>
            {
              account.map((data,index)=>(
                <li className='text-gray-400  cursor-pointer transition-all duration-600 hover:text-violet-700 text-center font-[600]' key={index}>{data}</li> 
              ))
            }

          </ul>
          

        </nav>
        </>:

        <Navbar></Navbar>
      }
    </header>
  )
}

export default Header