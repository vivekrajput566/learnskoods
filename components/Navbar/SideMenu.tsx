import { Transition } from "@headlessui/react";
import Link from "next/link";
import OutsideClickHandler from "../../utils/OutsideClickHandler";
import { RxCross2 } from "react-icons/rx";
import { MdDashboard } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdLocalPhone } from "react-icons/md";

const social = [
  {
    iconName: <FaFacebookF />,
    name: "Facebook",
    key: "https://www.facebook.com/profile.php?id=61554406271860",
  },
  {
    iconName: <FaInstagram />,
    name: "Instagram",
    key: "https://www.instagram.com/nextopson.in/",
  },
  {
    iconName: <FaTwitter />,
    name: "Twitter",
    key: "https://twitter.com/NextOpson",
  },

  {
    iconName: <FaLinkedinIn />,
    name: "Linkedin",
    key: "https://www.linkedin.com/company/nextopson-in/",
  },
];
const SideMenu = ({ isSidebarOpen, setIsSidebarOpen }: any) => {
  return (
    <div
      className={`h-full  w-[100vw] bg-[rgba(0,0,0,0.5)]  fixed top-0 left-0 z-50 `}
    >
      <Transition
        show={isSidebarOpen}
        enter="transition-transform ease-in-out duration-200"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        className={`z-40 relative h-[102vh] rounded-br-md overflow-y-auto`}
        leave="transition-transform ease-in-out duration-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <OutsideClickHandler
          onClick={() => {
            document.body.classList.remove("no-scroll");
            setIsSidebarOpen(false);
          }}
        >
          <div
            className={`  bg-white overflow-y-auto h-[100vh]   sm:w-[60%] w-[80%]  absolute top-0 left-0  z-50  `}
          >
            <div
              onClick={() => {
                document.body.classList.remove("no-scroll");
                setIsSidebarOpen(false);
              }}
              className="absolute right-3 top-3"
            >
              <RxCross2 className="text-black text-2xl " />
            </div>
            <Link href={"/"} className=" ">
              <div className="  flex items-center ">
                <h2 className="text-2xl font-bold text-[#1967d2] px-5 py-4 border-b w-full">
                  Superio
                </h2>
              </div>
            </Link>
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-4 px-5 py-5 ">
              <div className="flex flex-col px-3 gap-2 items-start ">
                <h1 className="text-2xl  text-[#a9a9a9] font-light">BROWSE</h1>
                <div className="flex flex-col gap-2 items-start mt-1">
                  <Link
                    href={`/`}
                    onClick={(e) => {
                      setIsSidebarOpen(false);
                      document.body.classList.remove("no-scroll");
                    }}
                    className=""
                  >
                    Home
                  </Link>
                  <Link
                    onClick={(e) => {
                      setIsSidebarOpen(false);
                      document.body.classList.remove("no-scroll");
                    }}
                    href={`/`}
                    className=""
                  >
                    Find Jobs
                  </Link>
                  <Link
                    onClick={(e) => {
                      setIsSidebarOpen(false);
                      document.body.classList.remove("no-scroll");
                    }}
                    href={`/`}
                    className=""
                  >
                    Employers
                  </Link>
                  <Link
                    onClick={(e) => {
                      setIsSidebarOpen(false);
                      document.body.classList.remove("no-scroll");
                    }}
                    href={`/`}
                    className=""
                  >
                    Candidates
                  </Link>
                  <Link
                    onClick={(e) => {
                      setIsSidebarOpen(false);
                      document.body.classList.remove("no-scroll");
                    }}
                    href={`/`}
                    className=""
                  >
                    Blog
                  </Link>
                  <Link
                    onClick={(e) => {
                      setIsSidebarOpen(false);
                      document.body.classList.remove("no-scroll");
                    }}
                    href={`/`}
                    className=""
                  >
                    About Us
                  </Link>
                </div>
              </div>
              <div className="flex flex-col px-3 gap-2 items-start ">
                <h1 className="text-2xl text-[#a9a9a9] font-light">SOCIAL</h1>
                <div className="flex flex-col gap-2 items-start mt-1">
                  {social?.map((media) => {
                    return (
                      <Link
                        onClick={(e) => {
                          setIsSidebarOpen(false);
                          document.body.classList.remove("no-scroll");
                        }}
                        href={media.key}
                        target="_blank"
                        key={media.key}
                        className="flex items-center gap-3"
                      >
                        <div className="text-lg">{media.iconName}</div>
                        <p>{media.name}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      </Transition>
    </div>
  );
};

export default SideMenu;
