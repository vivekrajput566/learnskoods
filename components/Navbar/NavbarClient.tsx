
"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Login from '../Login/Login';
import MobileNav from './MobileNav';
import { useScrollDirection } from "../../utils/useScroll";
import FixedNav from './FixedNav';
import Cookies from 'js-cookie';
import { Span } from 'next/dist/trace';
import { AiOutlineUser } from "react-icons/ai";

const NavbarClient = () => {
  const [isOpen, setIsOpen] = useState("none")
  const [username, setUsernameData] = useState<any>(false)
  const isScrolled = useScrollDirection();
  // console.log("isScrolled",isScrolled);
  

  function setUsername(data: any) {
    Cookies.set('username', data);
    setUsernameData(data);
  }

  useEffect(() => {
    const isCookieSet = Cookies.get('username') !== undefined;
    if (isCookieSet) {
      const cookieValue = Cookies.get('username');
      setUsernameData(cookieValue)
    } else {
      console.log('Cookie is not set.');
    }
  }, []);

  return (
    <div className='relative'>
      <MobileNav />
      {/* {isScrolled ?
     <div className='md:fixed top-0 hidden w-full'>   <FixedNav /></div>
        : */}
    <div className=' fixed top-0 left-0  z-30 w-full'>
    <header className={`main-header bg-white text-black py-4 ${isScrolled?"shadow-md":"shadow-none"}   px-body md:block hidden`}>
          <div className="main-box container mx-auto">
            <div className="flex items-center justify-between">

              <div className="w-[20%]">
                <a href="/">
                  <h2 className="text-3xl font-bold text-[#1967d2]">Learnkoods</h2>
                </a>
              </div>

              <div className='flex items-center justify-between  w-[80%]'>
                <nav className="nav main-menu">
                  <ul className="flex space-x-6 text-[13px]">
                    <Link href={`/`} className="">Home</Link>
                    <Link href={`/`} className="">Find Jobs</Link>
                    <Link href={`/`} className="">Employers</Link>
                    <Link href={`/`} className="">Candidates</Link>
                    <Link href={`/`} className="">Blog</Link>
                    <Link href={`/`} className="">About Us</Link>
                  </ul>
                </nav>
                <div className="outer-box flex items-center space-x-4">
                  {/* <a href="/candidates-dashboard/cv-manager" className="upload-cv">Upload your CV</a> */}
                  {!username ? <div className="btn-box">
                    <div onClick={() => {
                      setIsOpen("login")
                      document.body.classList.add("no-scroll");
                    }} className="bg-[#e2eaf8] text-[#4f7dda] px-5 py-2 text-[13px] rounded-md cursor-pointer" >

                      Login / Register
                    </div>
                    {/* <Link href={`/signup`}  className="theme-btn btn-style-one">Job Post</Link> */}
                  </div>
                    :
                    <div className='flex items-center gap-2 text-[#4f7dda] text-[15px]'> <AiOutlineUser className={"text-xl text-[#4f7dda] "} />{username}</div>
                  }
                </div>
              </div>
            </div>
            {isOpen === "login" && <Login setIsOpen={setIsOpen} isOpen={isOpen} setUsername={setUsername} />}
          </div>
        </header>
      </div> 
      {/* } */}
    </div>
  );
};

export default NavbarClient;
