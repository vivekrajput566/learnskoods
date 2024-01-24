"use client"
import React, { useState, Fragment, useEffect } from 'react'
import { Listbox, Transition } from "@headlessui/react";
import FilterSection from './FilterSection'
import JobCard from './JobCard'
import { IoIosArrowDown } from "react-icons/io";
import { useQuery } from '@tanstack/react-query';
import { fetchJobsData } from '@/utils/databaseService';

const sortByOptions = [
    { id: 2, name: 'Sort by (default)', unavailable: false },
    { id: 3, name: 'This Month', unavailable: false },
    { id: 4, name: 'Investment Year', unavailable: true },
    ]
const MainJobSection = () => {
    const [sortBy, setSortBy] = useState(sortByOptions[0])
    const { data: jobsData} = useQuery({
        queryKey: ["jobsData"],
        queryFn: () => fetchJobsData(),
      });
      console.log(jobsData,"jobsData--------");
  return (
    <div className='flex px-[7%] gap-x-7 my-14'>
        <div className='w-[35%]'>
        <FilterSection/>

        </div>
        <div className='w-[65%]  '>
            <div className='flex items-center justify-between '>
                <p className='text-gray-600 text-[13px] font-medium  my-8'>Show <span className='text-gray-700 text-sm font-semibold'>10</span> jobs</p>
                <div className='  relative w-fit py-2.5 px-3 rounded-md bg-[#f5f7fc]'>
              <Listbox value={sortBy} onChange={setSortBy}>
                <div className=' '>
                  <Listbox.Button className={` w-full    flex justify-between sm:gap-3 gap-5 items-center text-start text-[13px]  text-gray-600`}><span>{(sortBy?.name) || "Select"}</span><span>
                    {/* <FlatIcon className="flaticon-down-arrow text-[#9bb7d3] text-lg" /> */}
                  <div><IoIosArrowDown className={`h-[16px] w-[16px]`}/></div>
                    </span></Listbox.Button>
                  <Listbox.Options className={` absolute top-[50px]  py-1 rounded-md shadow-xl   bg-[#F8FAFC] text-sm flex flex-col gap-2 left-0 z-30 w-full border border-[red]`} >
                    {sortByOptions && sortByOptions.length > 0 && sortByOptions.map((category: any) => (
                      <Listbox.Option key={category.id} value={category} as={Fragment} >
                        {({ active, selected }) => (
                          <li
                            className={`${active ? 'bg-blue-500 text-white cursor-pointer' : '  cursor-pointer'
                              }  flex justify-between  py-1   text-[13px]  text-gray-600 px-3`}
                          >
                            {/* {selected && <CheckIcon />} */}
                            <span>
                              {category.name}
                            </span>
                            {selected && <span>check</span>}
                          </li>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
            </div>
         <div className='flex flex-col gap-8'>
         {
             [1,2,3,4].map((item:any,idx:number)=>{
                return <div key={idx}>
<JobCard/>
                </div>
             })
           }
         </div>

        </div>
       
    </div>
  )
}

export default MainJobSection