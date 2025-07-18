// import React from 'react'
// import logo from '../assets/brainwave.svg'
// import Navbar from '../Navbar/Navbar'


// function Header() {
//   return (
//     // <header className='bg-black p-8 flex w-full justify-between items-center relative ' >
//     <header className='bg-green-950 flex w-full border p-10 ' > 
//         <img src={logo} alt="Logo"  className=''/>
//         <Navbar></Navbar>
//         <header className='bg-red-700 text-center p-8'>HelloWorld</header>
//     </header>
//   )
// }

// export default Header
import React from 'react'
import logo from '../assets/brainwave.svg'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <header
      className='border bg-black p-8 w-full flex justify-between items-center relative'
    >
      <img src={logo} alt="" />
      <Navbar></Navbar>
    </header>
  )
}

export default Header