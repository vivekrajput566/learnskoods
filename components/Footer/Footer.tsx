import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const DUMMY_DATA = [
    {
      heading: "For Candidates",
      subLinks: [
        { name: "Browse Jobs" },
        { name: "Browse Categories", href: "blogs" },
        { name: "Candidate Dashboard" },
        { name: "Job Alerts" },
        { name: "My Bookmarks" },
      ],
    },
    {
      heading: "For Employers",
      subLinks: [
        { name: "Browse Candidates", href: "" },
        { name: "Employer Dashboard", href: "" },
        { name: "Add Job", href: "" },
        { name: "Job Packages", href: "" },
        // { name: "Payments", href: "" },
      ],
    },
    {
      heading: "About Us",
      subLinks: [
        { name: "About Us", href: "posts" },
        { name: "Job Page Invoice", href: "chats" },
        { name: "Terms Page", href: "notification" },
        { name: "Blog", href: "terms-and-conditions" },
        { name: "Contact", href: "privacy-policy" },
  
      ],
    },
    {
        heading: "Helpful Resources",
        subLinks: [
          { name: "Site Map", href: "posts" },
          { name: "Terms of Use", href: "chats" },
          { name: "Privacy Center", href: "notification" },
          { name: "Security Center", href: "terms-and-conditions" },
          { name: "Accessibility Center", href: "privacy-policy" },
    
        ],
      },
  ];

const Footer = () => {
  return (
    <div className=''>
        <div className='border-t border-b'>
        <div className='flex border-b py-20 px-[7%] gap-5'>
            <div className='w-[30%] '>
            <h2 className="text-3xl font-bold text-[#1967d2]">Learnkoods</h2>
            <div><h5>Call us</h5>
            <h5 className='text-[#266fd4] font-semibold text-lg'>123 456 7890</h5>
            </div>
            <p className='text-[13px] text-gray-500'>329 Queensberry Street, North Melbourne VIC</p>
            <p className='text-[13px] text-gray-500'>3051, Australia.</p>

            <p className='text-[13px] text-gray-500'>support@learnkoods.com</p>

            </div>
            <div className='flex w-[70%]  gap-5'>
            {DUMMY_DATA.map((item: any, idx: number) => {
                return (
                  <div className="lg:w-1/4  flex flex-col gap-4   " key={idx}>
                    <h3 className=" relative font-semibold md:text-base text-base text-[#3c3a5b] ">
                      {item.heading}
                      <div className="bg-primary   absolute bottom-[-12px] p-[1px] w-[55px] h-[2px]"></div>
                    </h3>
                    <div className="flex flex-col gap-4 mt-2 cursor-pointer">
                      {item.subLinks.map((item: any, idx: number) => {
                        return (
                          <div key={idx} >
                            <p className="text-[13px] text-gray-500 hover:text-white font-medium">
                              {/* <p className="text-sm text-[#fff] font-medium"> */}
                              {item.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
        <div className='flex items-center justify-between px-[7%] my-10'>
            <p className='text-[13px] text-gray-500'>© 2024 Learnkoods by Epic . All Right Reserved.</p>
            <div className='flex items-center gap-8'>
                <div><FaFacebookF className='text-base text-gray-500'/></div>
                <div><FaTwitter className='text-base text-gray-500'/></div>
                <div><FaInstagram className='text-base text-gray-500'/></div>
                <div><FaLinkedinIn className='text-base text-gray-500'/></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer