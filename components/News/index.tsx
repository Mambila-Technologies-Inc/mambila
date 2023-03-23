import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {HiOutlineArrowLongRight} from 'react-icons/hi2'
function News() {
  return (
    <div className='px-[20px] lg:px-[40px] my-[50px]'>
        <div className='flex items-center justify-between'>
            <div>
            <p className='font-[800] text-[22px] lg:text-[36px] font-Mulish text-[#000000] '>Current happenings in the <br className='hidden lg:block' /> mambila’s ecosystem</p>
            <button className='border-[#0500FC] border rounded-[8px] text-[#0500FC] p-[5px_16px] mt-[10px] font-[600]'>See More News</button>
            </div>
            <div>loll</div>
        </div>
        <div className={` mt-[30px] flex flex-col lg:flex-row items-center gap-[20px] lg:space-x-[30px] `} >
          <div className='min-h-[400px] h-[400px] max-h-[400px] w-full md:min-w-[350px] lg:max-w-[350px]  rounded-t-[20px]'>
            <div className=' h-[50%] rounded-t-[20px]'>
            <div className="relative w-full h-full   rounded-t-[20px]">
              <Image
                src='/images/img6.png'
                alt="thumbnail"
                objectFit="cover"
                layout="fill"
                className="rounded-t-[20px]"
              />
            </div>
            </div>
            <div className='bg-[#0500FC] h-[50%] p-[20px] flex  justify-between'>
              <div className='text-white text-[22px] leading-[25px] font-[700] font-Mulish'>
                Mt unvails future plans for brand new upcoming companie
              </div>
              <div>
                <Link href='/'><HiOutlineArrowLongRight className='text-white text-[30px]'/></Link>
              </div>
            </div>
          </div>
          <div className='min-h-[400px] h-[400px] max-h-[400px] w-full md:min-w-[350px] lg:max-w-[350px]  rounded-t-[20px]'>
            <div className=' h-[50%] rounded-t-[20px]'>
            <div className="relative w-full h-full   rounded-t-[20px]">
              <Image
                src='/images/img6.png'
                alt="thumbnail"
                objectFit="cover"
                layout="fill"
                className="rounded-t-[20px]"
              />
            </div>
            </div>
            <div className='bg-[#0500FC] h-[50%] p-[20px] flex flex-col justify-between'>
              <div className='text-white text-[22px] leading-[25px] font-[700] font-Mulish'>
                Mt unvails future plans for brand new upcoming companie
              </div>
              <div>
                <Link href='/'><HiOutlineArrowLongRight className='text-white text-[30px]'/></Link>
              </div>
            </div>
          </div>
          
         
        </div>
    </div>
  )
}

export default News