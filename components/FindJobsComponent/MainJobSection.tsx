"use client"
import React, { useState, Fragment, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { CircularProgress, Skeleton } from "@mui/material";
import { Listbox, Transition } from "@headlessui/react";
import JobCard from './JobCard'
import { IoIosArrowDown } from "react-icons/io";
import { useQuery } from '@tanstack/react-query';
import { fetchJobsData } from '@/utils/databaseService';
import Modal from '../Modal/modal';

const sortByOptions = [
  { id: 1, name: 'Sort by (default)', unavailable: false },
  { id: 2, name: 'Newest', unavailable: false },
  { id: 3, name: 'Oldest', unavailable: true },
]
const MainJobSection = () => {
  const { data: jobsData } = useQuery({
    queryKey: ["jobsData"],
    queryFn: () => fetchJobsData(),
  });
  console.log(jobsData, "jobsData--------");

  const [sortBy, setSortBy] = useState(sortByOptions[0])
  const [jobs, setJobs] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [searchResults, setSearchResults] = useState<any>([])
  const [searchedTerm, setSearchedTerm] = useState("")
  const [isSearchResult, setIsSearchResults] = useState(false)
  const [isNoResultVisible, setIsNoResultVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)


  const fetchJobs = async (url: any) => {
    setIsLoading(true)
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }

      const data = await response.json();
      setJobs(data.results || []);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
      setIsLoading(false)

    } catch (error: any) {
      setIsLoading(false)

      console.error(error.message);
    }
  };

  useEffect(() => {
    // Initial load
    setIsLoading(true)
    fetchJobs("https://learnkoodsapi.onrender.com/jobs_api/");
  }, []);

  const handleNextPage = async () => {
    setIsModalOpen(true)
    document.body.classList.add("no-scroll");

    if (nextPageUrl) {
      await fetchJobs(nextPageUrl);
      document.body.classList.remove("no-scroll")
      setIsModalOpen(false)

    }
  };

  const handlePrevPage = async () => {
    setIsModalOpen(true)
    document.body.classList.add("no-scroll");
    if (prevPageUrl) {
      await fetchJobs(prevPageUrl);
      document.body.classList.remove("no-scroll")
      setIsModalOpen(false)

    }
  };

  const renderSearchResults = (searchTerm: any) => {
    if (searchTerm && jobs && jobs.length > 0) {
      const res: any = jobs.filter((item: any, idx: number) => {
        if (item.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.company.toLowerCase().includes(searchTerm.toLowerCase())) {
          return item;
        }
      });
      console.log('res', res);
      setJobs(res)
      setIsSearchResults(true);
      setSearchResults(res);
      setIsNoResultVisible(res.length === 0);
    } else {
      fetchJobs("https://learnkoodsapi.onrender.com/jobs_api/")
      setIsSearchResults(false);
      setSearchResults([]);
      setIsNoResultVisible(false);
    }
  }

  useEffect(() => {
    const sortedJobs = [...jobs].sort((a: any, b: any) => {
      if (sortBy.id === 2) {
        // Sort by Newest
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      } else if (sortBy.id === 3) {
        // Sort by Oldest
        return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
      } else {
        return 0;
      }
    });

    // console.log("sortedJobs", sortedJobs);

    setJobs(sortedJobs);
  }, [sortBy]);
  // console.log(sortBy,"sortBy");

  return (
    <div className='flex md:flex-row flex-col px-[7%] gap-x-7 sm:mt-14 sm:mb-14 mt-7 mb-7'>
      <div className='md:w-[35%] w-[100%]'>
        <div className='bg-[#f5f7fc] h-full sm:p-8 p-4 rounded-md'>
          <div className='flex flex-col gap-4'>
            <h2 className='font-semibold text-base'>Search by Keywords</h2>
            <div className='search-container flex items-center w-full bg-white py-4 rounded-md px-4 gap-x-4'>
              <div className=''>
                <CiSearch className='text-xl' />
              </div>
              <input value={searchedTerm} onChange={(e) => {
                setSearchedTerm(e.target.value);
                renderSearchResults(e.target.value);
              }} type="text" placeholder='job title, keywords or company'
                className='w-[100%] bg-transparent outline-0' />
            </div>
          </div>
        </div>
      </div>
      {isLoading && 
                  <Modal isOpen={isModalOpen} setOpen={setIsModalOpen}>
          <div className="flex flex-col gap-2 justify-center items-center">
            <CircularProgress className="!text-white"></CircularProgress>
            <p className="text-white font-medium text-lg">
              Processing...
            </p>
          </div>
        </Modal>
        
      }

        {jobs.length==0 ?
        
        <div className='md:w-[65%]  w-[100%]'>
        <div className='flex items-center justify-center '>
        <div role="status flex justify-center w-full ">
          
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
      </div>
      </div>
       

          :
        
        



      <div className='md:w-[65%]  w-[100%]'>
        <div className='flex items-center justify-between '>
          <p className='text-gray-600 text-[13px] font-medium  my-8'>Show <span className='text-gray-700 text-sm font-semibold'>5</span> jobs</p>
          <div className='  relative w-fit py-2.5 px-3 rounded-md bg-[#f5f7fc]'>
            <Listbox value={sortBy} onChange={setSortBy}>
              <div className=' '>
                <Listbox.Button className={` w-full    flex justify-between sm:gap-3 gap-5 items-center text-start text-[13px]  text-gray-600`}><span>{(sortBy?.name) || "Select"}</span><span>
                  <div><IoIosArrowDown className={`h-[16px] w-[16px]`} /></div>
                </span></Listbox.Button>
                <Listbox.Options className={` absolute top-[40px]  py-1 rounded-md shadow-xl   bg-[#F8FAFC] text-sm flex flex-col gap-1 left-0 z-30 w-full `} >
                  {sortByOptions && sortByOptions.length > 0 && sortByOptions.map((category: any) => (
                    <Listbox.Option key={category.id} value={category} as={Fragment} >
                      {({ active, selected }) => (
                        <li
                          // onClick={()=>getSortedResults()}
                          className={`${active ? 'bg-blue-500 text-white cursor-pointer' : '  cursor-pointer'
                            }  flex justify-between     text-[13px]  text-gray-600 px-3`}
                        >
                          {/* {selected && <CheckIcon />} */}
                          <span>
                            {category.name}
                          </span>
                          {/* {selected && <span>check</span>} */}
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
          {jobs.length > 0 ?

            <>{jobs.map((item: any, idx: number) => {
              return <div key={idx}>
                <JobCard item={item} />
              </div>
            })}</>

            :
            <div className='text-xl  text-[#1967d2] font-semibold w-full flex justify-center items-center  text-center h-[50vh]'>No Jobs Found !</div>
          }
        </div>
        {jobs && jobs.length > 0 &&
          <div className='flex gap-5 mt-8 justify-center  text-white '>
            <button onClick={handlePrevPage} disabled={!prevPageUrl} className='bg-blue-500 px-5 py-2 rounded-md'>
              Previous
            </button>
            <button onClick={handleNextPage} disabled={!nextPageUrl} className='bg-blue-500 px-5 py-2 rounded-md'>
              Next
            </button>
          </div>}
        <Modal isOpen={isModalOpen} setOpen={setIsModalOpen}>
          <div className="flex flex-col gap-2 justify-center items-center">
            <CircularProgress className="!text-white"></CircularProgress>
            <p className="text-white font-medium text-lg">
              Processing...
            </p>
          </div>
        </Modal>
        {/* {isLoading&&
                  <div className="w-full min-h-[60vh]  flex items-center justify-center ">
                  <div className="spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                  } */}
      </div>
  
                }

    </div>
  )
}

export default MainJobSection