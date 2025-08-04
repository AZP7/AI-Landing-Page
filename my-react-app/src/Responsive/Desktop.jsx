import React, { useEffect, useState } from 'react'

function Desktop() {

    const [islg,setIsLg] = useState(window.innerWidth>=1024)

    useEffect(()=>{
        const handleresize = ()=>{
            setIsLg(window.innerWidth>=1024)
        }
        window.addEventListener('resize',handleresize)
        return ()=>{
            window.removeEventListener('resize',handleresize)
        }   
    },[])

    return islg
}

export default Desktop