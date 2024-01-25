
"use client"
import Link from 'next/link';
import React,{useState} from 'react';
import Login from '../Login/Login';
import MobileNav from './MobileNav';
import { useScrollDirection } from "../../utils/useScroll";
import FixedNav from './FixedNav';

const NavbarClient = () => {
    const [isOpen,setIsOpen]=useState("none")
    const isScrolled = useScrollDirection();
  return (
  <div>
    <MobileNav/>
    {isScrolled?
    <FixedNav/>
    :
      <header className="main-header bg-white text-black py-4  shadow-md border  px-body md:block hidden">
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
              <li><a href="/" className="">Home</a></li>
              <li><a href="/job-list/job-list-v1" className="">Find Jobs</a></li>
              <li><a href="/employers-list/employers-list-v1" className="hover:text-gray-300">Employers</a></li>
              <li><a href="/candidates-list/candidates-list-v1" className="hover:text-gray-300">Candidates</a></li>
              <li><a href="/blog/blog-list-v1" className="hover:text-gray-300">Blog</a></li>
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            </ul>
          </nav>
          <div className="outer-box flex items-center space-x-4">
            {/* <a href="/candidates-dashboard/cv-manager" className="upload-cv">Upload your CV</a> */}
            <div className="btn-box">
              <div onClick={()=>{
                setIsOpen("login")
               document.body.classList.add("no-scroll");
            }}  className="bg-[#e2eaf8] text-[#4f7dda] px-5 py-2 text-[13px] rounded-md cursor-pointer"   >Login / Register</div>
              {/* <Link href={`/signup`}  className="theme-btn btn-style-one">Job Post</Link> */}
            </div>
          </div>
          </div>
        </div>
        {isOpen==="login"&&<Login setIsOpen={setIsOpen} isOpen={isOpen}/>}
      </div>
    </header>
}
  </div>
  );
};

export default NavbarClient;
