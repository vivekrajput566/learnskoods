import React from 'react'
import { CiSearch } from "react-icons/ci";


const FilterSection = () => {
  return (
    <div className='bg-[#f5f7fc] h-full p-8 rounded-md'>
        <div className='flex flex-col gap-4'>
        <h2 className='font-semibold text-base'>Search by Keywords</h2>
        <div className='search-container flex items-center w-full bg-white py-4 rounded-md px-4 gap-x-4'>
            <div className=''>
            <CiSearch className='text-xl' />
            </div>
            <input type="text" placeholder='job title, keywords or company'
            className='w-[100%] bg-transparent'/>
        </div>
        </div>
    </div>
  )
}

export default FilterSection