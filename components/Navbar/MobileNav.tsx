"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../images/newLogo3.jpg"
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import Login from "../Login/Login";
import Cookies from 'js-cookie';


const MobileNav = () => {
  const [isOpen, setIsOpen] = useState("none")
  const [username, setUsernameData] = useState<any>(false)
  //   const isScrolled = useScrollDirection();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    <div
      className={`md:hidden fixed top-0   px-body  w-full py-4  shadow-md bg-white z-30 `}
    >
      <div className="flex items-center justify-between  h-full ">
        <Link href={"/"} className=' '>
          <div className="  flex items-center justify-center">

            <h2 className="text-2xl font-bold text-[#1967d2]">Superio</h2>

          </div>
        </Link>
        <div className="flex items-center gap-4">
          {!username ?
            <div onClick={() => setIsOpen("login")} >
              <AiOutlineUser className="text-2xl text-black" />
            </div>
            :
            <div className="text-[#4f7dda]">{username}</div>
          }
          <button
            onClick={() => {
              document.body.classList.add("no-scroll");
              setIsSidebarOpen(true);
            }}
          >
            <AiOutlineMenu className={"text-2xl text-black"} />
          </button>
        </div>
        {isSidebarOpen && (
          <SideMenu
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}
        {isOpen === "login" && <Login setIsOpen={setIsOpen} isOpen={isOpen} />}
      </div>
    </div>
  );
};

export default MobileNav;
