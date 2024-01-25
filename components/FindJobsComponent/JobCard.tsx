import React from 'react'
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import Image from 'next/image';
import moment from 'moment';

const JobCard = ({item}:any) => {
    const createdAt = item?.timestamp;
  const currentTime = moment();

  const duration = moment.duration(currentTime.diff(moment(createdAt)));
  const years = Math.floor(duration.asYears());
  const months = Math.floor(duration.asMonths());
  const weeks = Math.floor(duration.asWeeks());
  const days = Math.floor(duration.asDays());
  const hours = Math.floor(duration.asHours());
  const minutes = Math.floor(duration.asMinutes());
  const seconds = Math.floor(duration.asSeconds());

  const formattedTime =
    years > 0 ? `${years}years ago` :
      months > 0 ? `${months} months ago` :
        weeks > 0 ? `${weeks} weeks ago` :
          days > 0 ? `${days} days ago` :
            hours > 0 ? `${hours} hours ago` :
              minutes > 0 ? `${minutes} minutes ago` :
                `${seconds} seconds ago`;


                console.log("formattedTime",formattedTime);
                
  return (
    <div className='border sm:p-8 p-4 rounded-lg flex gap-4'>
        <div className='h-[50px] w-[50px] rounded-md '>
            <Image src={`${item.url}`} alt={`${item?.company}`} width={1000} height={1000} className='h-[100%] w-[100%] rounded-md object-fill'/>
        </div>
        <div className='flex flex-col gap-4'>
            <h3 className='text-[15px] font-semibold line-clamp-1'>{item.job_title}</h3>
            <div className='flex items-center gap-x-5'>
                {/* <div className='flex items-center  gap-x-1'>
                <div className='text-lg text-gray-500'><IoBagRemoveOutline /></div>
                <p className='text-[13px] text-gray-500'>Segment</p>
                </div> */}
              { item?.location&&
               <div className='flex items-center  gap-x-1'>
                <div className='text-lg text-gray-500'><IoLocationOutline /></div>
                <p className='text-[13px] text-gray-500'>{item?.location}</p>
                </div>}
                <div className='flex items-center  gap-x-1'>
                <div className='text-lg text-gray-500'><GoClock /></div>
                <p className='text-[13px] text-gray-500'>{formattedTime}</p>
                </div>
               {item?.min_salary&&item?.max_salary&&
                 <div className='flex items-center  gap-x-1'>
                 <div className='text-lg text-gray-500'><LiaMoneyBillWaveAltSolid /></div>
                 <p className='text-[13px] text-gray-500'>{item?.min_salary} - {item?.max_salary}</p>
                 </div>
               }
            </div>
            <div className='flex items-center gap-x-5'>
{item?.job_type&&
                <p className='text-[13px] px-5 py-[2px] rounded-full bg-[#dde8f8] text-[#3172d3]'>{item?.job_type}</p>

}               
 {/* <p className='text-[13px] px-5 py-[2px] rounded-full bg-[#e1f2e5] text-[#54ac60] '>Private</p> */}
                {/* <p className='text-[13px] px-5 py-[2px] rounded-full bg-[#fef2d9] text-[#fbb316]'>Urgent</p> */}
            </div>
        </div>
    </div>
  )
}

export default JobCard