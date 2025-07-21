import React, { useState } from 'react'

function Navbar() {

    const li = ['FEATURES','PRICING','HOW TO USE','ROADMAP','NEW ACCOUNT','NEW ACCOUNT','SIGN IN']
    const [nav,setNav] = useState(false)

   const HandleNav = ()=>{
    setNav(prev=>!prev)
   }

  return (
    <>
    <nav>
        <i className="fa-solid fa-bars text-[2rem] cursor-pointer text-[#fff]  " onClick={HandleNav}></i>
    </nav>
      {
        nav &&
        <ul className='absolute z-100 w-[55%] rounded-2xl border left-0 right-0 mx-auto bg-[#fff] top-[100%] '>
            {
              li.map((data,index)=>(
                <li key={index} className='p-[1rem] cursor-pointer hover:text-violet-700 text-center font-[600] '>{data}</li>
              ))
            }
        </ul>
      }
    </>
  )
}

export default Navbar
