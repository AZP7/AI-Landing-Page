import React from 'react'

function Navbar() {

    const li = ['FEATURES','PRICING','HOW TO USE','ROADMAP','NEW ACCOUNT','NEW ACCOUNT','SIGN IN']

  return (
    <>
    <nav>
        <i className="fa-solid fa-bars text-[2rem] cursor-pointer text-[#fff]  "></i>
    </nav>
        <ul className='absolute w-[55%] rounded-2xl border left-0 right-0 mx-auto bg-[#fff] top-[100%] '>
            {
              li.map((data,index)=>(
                <li key={index} className='p-[1rem] cursor-pointer hover:text-violet-700 text-center font-[600] '>{data}</li>
              ))
            }
        </ul>
    </>
  )
}

export default Navbar
