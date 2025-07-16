import React from 'react'
import logo from '../assets/brainwave.svg'
import Navbar from '../Navbar/Navbar'


function Header() {
  return (
    <header className='bg-[#333] p-[1rem] flex w-full justify-between items-center relative ' >
        <img src={logo} alt="Logo"  className=''/>
        <Navbar></Navbar>
    </header>
  )
}

export default Header
