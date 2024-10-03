'use client'
import React from 'react'; //{ useState }
import Link from 'next/link';
import Image from 'next/image';
import "./navbar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import logoBlack from '@/public/images/logo/Logo-black.png';
import NavService from '../nav-service/navservice';
import NavProject from '../nav-project/navproject';

export const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const [isHover, setIsHover] = useState(false);

    // const handleMouseOver = ()=>setIsHover(true)
    // const handleMouseLeave = ()=>setTimeout(()=>setIsHover(false),500)


  return (
    <nav className="m-0 h-[95px] w-full z-[99999999999] bg-white navbar-expand-lg border-b-2 border-[#F6F6F6]">
      <div className="w-full max-w-[1320px] mx-auto px-4 flex gap-3 items-center justify-between relative">

        {/* <!-- Logo --> */}
        <div className="logo max-w-40 m-5">
          <Link className="navbar-brand" href="#">
            {/* <div className={`w-8 h-8 bg-cover bg-center bg-logo-brand-black`}></div> */}
            <Image src={logoBlack} alt='logo' className='w-full h-auto' quality={100}/>
          </Link>
        </div>
      

        <div>
            <ul className='flex gap-5'>
                <li>
                    <a href="#">
                        Home
                    </a> 
                </li>
                <li>
                    <a href="#">
                        About us
                    </a> 
                </li>
                <li>
                    <Link href="#" >
                    {/* onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} */}
                        Services
                    </Link> 
                </li>
                <li>
                    <Link href="#" >
                    {/* onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} */}
                    Projects
                    </Link>
                </li>
                <li>
                    <a href="#">
                        Career
                    </a> 
                </li>
                <li>
                    <a href="#">
                        Contact us
                    </a>
                </li>
            </ul>
        </div>

         <div>
          <a href="tel:+97466325019" className="bg-[#1c7d9b] p-0 py-[10px] px-[12px] rounded-3xl text-white text-sm leading-normal not-italic tracking-[0.34px] transition duration-400 hover:bg-black hover:text-white flex items-center">
            <i className="fa-solid fa-phone mr-[6px]"></i> <FontAwesomeIcon icon={faPhone} className="text-[#0fbbf0] mr-2" />+974 66325019
          </a>
        </div>
      {/* isHover={isHover} */}
      <NavService />
      {/* isHover={isHover} */}
      <NavProject />

      </div>
    </nav>
  );
};

export default Navbar;