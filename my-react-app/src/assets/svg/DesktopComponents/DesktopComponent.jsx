import React from 'react'
import stars from '../../../assets/pricing/stars.svg'
import sphere from '../../../assets/4-small.png'

function DesktopComponent() {
  return (
    <div className=' bg-[var(--bg-color)] relative flex w-full justify-center items-center h-[70vh]'>
      <img src={stars} alt="Stars" className="absolute w-full h-full z-0 object-cover" />
      <img src={sphere} alt="Sphere" className=" w-[200px] h-[200px] z-10 object-cover" />
    </div>
  )
}

export default DesktopComponent
