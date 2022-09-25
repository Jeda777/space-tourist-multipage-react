import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { iconClose, iconHamburger, logo} from '../assetsIndex'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  let location = useLocation();

  return (
    <div className='flex justify-between items-center overflow-hidden max-w-[1440px] mx-auto'>

      <img className='p-6' src={logo} alt="logo" />

      <nav id='desktop-nav' className='hidden sm:inline-block bg-white backdrop-blur-lg bg-opacity-5 text-lg md:text-xl lg:text-2xl relative'>
        <ul className='flex h-24 items-center gap-9 lg:gap-12 px-12 xl:px-28'>
          <li className={`${location.pathname === '/' ? 'active-link' : ''} after:w-[34px] md:after:w-[37px]
          lg:after:w-[76px]`}>
            <Link to='/'><span>00&nbsp;</span> Home</Link>
          </li>
          <li className={`${location.pathname === '/destination' ? 'active-link' : ''} after:w-[78px] md:after:w-[87px]
          lg:after:w-[132px]`}>
            <Link to='/destination'><span>01&nbsp;</span> Destination</Link>
          </li>
          <li className={`${location.pathname === '/crew' ? 'active-link' : ''} after:w-[35px] md:after:w-[39px]
          lg:after:w-[78px]`}>
            <Link to='/crew'><span>02&nbsp;</span> Crew</Link>
          </li>
          <li className={`${location.pathname === '/technology' ? 'active-link' : ''} after:w-[88px] md:after:w-[98px]
          lg:after:w-[148px]`}>
            <Link to='/technology'><span>03&nbsp;</span> Technoology</Link>
          </li>
        </ul>
      </nav>

      <button onClick={() => setOpen((prev) => !prev)} className='z-20 sm:hidden pr-6'>
        <img src={open ? iconClose : iconHamburger} alt="menu opening button" />
      </button>

      <nav id='mobile-nav' className={`sm:hidden bg-black bg-opacity-5 backdrop-blur-lg w-[70%] fixed top-0 p-8 pt-28 text-2xl
      transition-all z-10 ${open ? 'right-0' : 'right-[-100%]'}`}>
        <ul className='flex flex-col gap-6'>
          <li className={location.pathname === '/' ? 'active-mobile-link' : ''}>
            <Link to='/'><span>00</span> Home</Link>
          </li>
          <li className={location.pathname === '/destination' ? 'active-mobile-link' : ''}>
            <Link to='/destination'><span>01</span> Destination</Link>
          </li>
          <li className={location.pathname === '/crew' ? 'active-mobile-link' : ''}>
            <Link to='/crew'><span>02</span> Crew</Link>
          </li>
          <li className={location.pathname === '/technology' ? 'active-mobile-link' : ''}>
            <Link to='/technology'><span>03</span> Technoology</Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default Navbar