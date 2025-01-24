import React from 'react';
import bgheaderDesktop from "/images/bg-header-desktop.svg"

export default function Header() {
  return (
    <nav className='w-full h-[140px] bg-[#5da5a4]'>
            <img src={bgheaderDesktop} alt="header image" className='w-full h-full' />
    </nav>

  )
}
