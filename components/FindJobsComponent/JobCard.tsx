import React from 'react'
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";

const JobCard = () => {
  return (
    <div className='border px-8 py-8 rounded-lg'>
        <div></div>
        <div className='flex flex-col gap-4'>
            <h3 className='text-[15px] font-semibold'>Software Engineer (Android), Libraries</h3>
            <div className='flex items-center gap-x-5'>
                <div className='flex items-center  gap-x-1'>
                <div className='text-lg text-gray-500'><IoBagRemoveOutline /></div>
                <p className='text-[13px] text-gray-500'>Segment</p>
                </div>
                <div className='flex items-center  gap-x-1'>
                <div className='text-lg text-gray-500'><IoLocationOutline /></div>
                <p className='text-[13px] text-gray-500'>London, UK</p>
                </div>
                <div className='flex items-center  gap-x-1'>
                <div className='text-lg text-gray-500'><GoClock /></div>
                <p className='text-[13px] text-gray-500'>11 hours ago</p>
                </div>
                <div className='flex items-center  gap-x-1'>
                <div className='text-lg text-gray-500'><LiaMoneyBillWaveAltSolid /></div>
                <p className='text-[13px] text-gray-500'>$35k - $45k</p>
                </div>
            </div>
            <div className='flex items-center gap-x-5'>
                <p className='text-[13px] px-5 py-[1px] rounded-full bg-[#dde8f8] text-[#3172d3]'>Full Time</p>
                <p className='text-[13px] px-5 py-[1px] rounded-full bg-[#e1f2e5] text-[#54ac60] '>Private</p>
                <p className='text-[13px] px-5 py-[1px] rounded-full bg-[#fef2d9] text-[#fbb316]'>Urgent</p>
            </div>
        </div>
    </div>
  )
}

export default JobCard