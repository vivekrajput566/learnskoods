"use client";
// import { useScrollDirection } from "@/utils/useScroll";
import Image from "next/image";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import SideMenu from "./SideMenu";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../images/newLogo3.jpg"
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import Login from "../Login/Login";

const MobileNav = () => {
  const [isOpen,setIsOpen]=useState("none")

//   const isScrolled = useScrollDirection();
//   const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div
      className={`md:hidden  flex items-center justify-between px-body  w-full min-h-[70.97px] shadow-md bg-white fixed top-0 left-0 z-30`}
    >
     {/* <div className="flex items-center"> */}
    
       <Link href={"/"} className=' '>
          <div className="  flex items-center justify-center">
            
            {/* <Image src={logo} alt="logo " className='w-[100%] h-[100%] '/>  */}
            <h2 className="text-2xl font-bold text-[#1967d2]">Superio</h2>

            </div>
            </Link>
     {/* </div> */}
   <div className="flex items-center gap-4">
   <div  onClick={()=>setIsOpen("login")} >
      <AiOutlineUser className="text-2xl text-black"/>
      </div>
       <button
        onClick={() => {
          document.body.classList.add("no-scroll");
          // dispatch(openSideMenu());
          setIsSidebarOpen(true);
        }}
      >
        <AiOutlineMenu className={"text-2xl text-black"}/>
        {/* Menu */}
      </button>
   </div>
        
       
     

      {isSidebarOpen && (
        <SideMenu
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}
         {isOpen==="login"&&<Login setIsOpen={setIsOpen} isOpen={isOpen}/>}
    </div>
  );
};

export default MobileNav;
