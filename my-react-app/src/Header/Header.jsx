import React from 'react'
import logo from '../assets/brainwave.svg'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <header
      className='fixed bg-grey/30 backdrop-blur-md p-4 w-full z-100 flex justify-between items-center'
    >
      <img src={logo} alt="" />
      <Navbar></Navbar>
    </header>
  )
}

export default Header