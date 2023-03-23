import Link from 'next/link'
import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

function Resources() {
  return (
    <div className='p-[20px] lg:p-[40px]'>
        <p className='text-[#000000] font-[800] font-Mulish text-[24px] lg:text-[40px]'>Resources</p>
        <div className='flex items-center justify-between flex-wrap mt-[20px] lg:mt-[50px] space-y-[15px] lg:space-y-0 py-[15px]  lg:border-t'>
        <Link href='/' className='flex space-x-[10px] border-b items-center text-[#0500FC] w-full lg:w-fit text-[20px] lg:text-[36px] pb-[5px] lg:border-none font-[500] font-Montserrat'>
          <p>Our media kit</p>
          <BsArrowRight/>
        </Link>
        <Link href='/' className='flex space-x-[10px] border-b items-center text-[#0500FC] w-full lg:w-fit text-[20px] lg:text-[36px] font-[500] lg:border-none font-Montserrat'>
          <p>Our Events</p>
          <BsArrowRight/>
        </Link>
        <Link href='/' className='flex space-x-[10px]  items-center text-[#0500FC] w-full lg:w-fit pb-[5px] border-b text-[20px] lg:text-[36px] font-[500] lg:border-none font-Montserrat'>
          <p>Contact customer support</p>
          <BsArrowRight/>
        </Link>

        </div>
        <div className='flex items-center justify-between flex-wrap  lg:border-t space-y-[15px]'>
        <Link href='/' className='flex space-x-[10px] lg:border-none items-center text-[#0500FC] border-b w-full lg:w-fit pb-[5px] text-[20px] lg:text-[36px] font-[500] font-Montserrat'>
          <p>Schedule a sync meeting</p>
          <BsArrowRight/>
        </Link>
        <Link href='/' className='flex space-x-[10px] w-full lg:w-fit  items-center text-[#0500FC] text-[20px] lg:text-[36px] font-[500] font-Montserrat border-b lg:border-none pb-[5px]'>
          <p>Our hardware products</p>
          <BsArrowRight/>
        </Link>
       
        </div>
    </div>
  )
}

export default Resources