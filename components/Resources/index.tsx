import Link from 'next/link'
import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

function Resources() {
  return (
    <div className='p-[40px]'>
        <p className='text-[#000000] font-[800] font-Mulish text-[40px]'>Resources</p>
        <div className='flex items-center justify-between flex-wrap mt-[50px] border-y-[2px] py-[15px]'>
        <Link href='/' className='flex space-x-[10px]  items-center text-[#0500FC] text-[36px] font-[500] font-Montserrat'>
          <p>Our media kit</p>
          <BsArrowRight/>
        </Link>
        <Link href='/' className='flex space-x-[10px]  items-center text-[#0500FC] text-[36px] font-[500] font-Montserrat'>
          <p>Our Events</p>
          <BsArrowRight/>
        </Link>
        <Link href='/' className='flex space-x-[10px]  items-center text-[#0500FC] text-[36px] font-[500] font-Montserrat'>
          <p>Contact customer support</p>
          <BsArrowRight/>
        </Link>

        </div>
        <div className='flex items-center justify-between flex-wrap  pt-[15px]'>
        <Link href='/' className='flex space-x-[10px]  items-center text-[#0500FC] text-[36px] font-[500] font-Montserrat'>
          <p>Schedule a sync meeting</p>
          <BsArrowRight/>
        </Link>
        <Link href='/' className='flex space-x-[10px]  items-center text-[#0500FC] text-[36px] font-[500] font-Montserrat'>
          <p>Our hardware products</p>
          <BsArrowRight/>
        </Link>
       
        </div>
    </div>
  )
}

export default Resources