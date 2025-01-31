import React, { useEffect, useState } from 'react';
import bgheaderDesktop from "/images/bg-header-desktop.svg"
import bgheaderMobile from "/images/bg-header-mobile.svg"

export default function Header() {
const [isMobile, setIsMobile] = useState(window.innerWidth < 480)

  useEffect(()=>{
    function handleResize() {
      setIsMobile(window.innerWidth < 480)
    }

    window.addEventListener('resize', handleResize);
    window.removeEventListener('resize', handleResize)
  }, [isMobile])


  return (
    <nav className='w-full h-[140px] bg-[#5da5a4]'>

      {isMobile?<img src={bgheaderMobile} alt="header image" className='w-full h-full' /> : <img src={bgheaderDesktop} alt="header image" className='w-full h-full' />}
            {/* <img src={bgheaderDesktop} alt="header image" className='w-full h-full' /> */}
    </nav>

  )
}
