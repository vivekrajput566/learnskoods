"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Login from '../Login/Login';
import MobileNav from './MobileNav';
import { useScrollDirection } from "../../utils/useScroll";
import Cookies from 'js-cookie';
import { AiOutlineUser } from "react-icons/ai";

const FixedNav = () => {
    const [isOpen, setIsOpen] = useState("none")
    const isScrolled = useScrollDirection();
    const [username, setUsernameData] = useState<any>(false)

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
        <div className='w-full  z-30'>
            <header className=" bg-white text-black py-4  shadow-md border  px-body   w-full">
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
                    {isOpen === "login" && <Login setIsOpen={setIsOpen} isOpen={isOpen} />}
                </div>
            </header>
        </div>
    );
};

export default FixedNav;
