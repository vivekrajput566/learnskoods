
"use client"
import Link from 'next/link';
import React,{useState} from 'react';
import Login from '../Login/Login';

const NavbarClient = () => {
    const [isOpen,setIsOpen]=useState("none")
    const [username,setUsernameData]=useState(false)
  

    function setUsername(data:any){

      setUsernameData(data);



    }



  return (
    <header className="main-header bg-white text-black py-4 shadow-xl px-body">
      <div className="main-box container mx-auto">
        <div className="flex items-center justify-between">
          <div className="logo-box">
            <div className="logo">
              <a href="/">
                <h2 className="text-2xl font-bold">Learnkoods</h2>
              </a>
            </div>
          </div>
          <nav className="nav main-menu">
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/job-list/job-list-v1" className="hover:text-gray-300">Find Jobs</a></li>
              {/* <li><a href="/employers-list/employers-list-v1" className="hover:text-gray-300">Employers</a></li> */}
              {/* <li><a href="/candidates-list/candidates-list-v1" className="hover:text-gray-300">Candidates</a></li> */}
              {/* <li><a href="/blog/blog-list-v1" className="hover:text-gray-300">Blog</a></li> */}
              {/* <li><a href="/about" className="hover:text-gray-300">About Us</a></li> */}
            </ul>
          </nav>
          <div className="outer-box flex items-center space-x-4">
            {/* <a href="/candidates-dashboard/cv-manager" className="upload-cv">Upload your CV</a> */}
            <div className="btn-box">
              <div onClick={()=>setIsOpen("login")}  className="theme-btn btn-style-three call-modal" data-bs-toggle="modal" data-bs-target="#loginPopupModal">{!username?"Login / Register":username}</div>
              {/* <Link href={`/signup`}  className="theme-btn btn-style-one">Job Post</Link> */}
            </div>
          </div>
        </div>
        {isOpen==="login"&&<Login setIsOpen={setIsOpen} isOpen={isOpen} setUsername={setUsername}/>}
      </div>
    </header>
  );
};

export default NavbarClient;
