import { NextPage } from 'next';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/logo.svg'

const Nav: NextPage = () => {
  const [isOpen, setOpen]= useState(false)
  return (
    <>
      <nav className="flex flex-col lg:flex-row justify-between items-center lg:p-[15px_45px]">
        <div className='p-[15px] lg:p-0 flex items-center w-full lg:w-fit justify-between lg:justify-start'>
        <div className=" flex items-center space-x-[5px]">
          <Image
            src={Logo}
            alt="Landscape picture"
            width={50}
            height={50}
          />
          <p className='font-Mulish font-[800] text-[24px] text-[#000000]'>Mambila</p>
        </div>
        <div className='lg:hidden h-[40px] w-[40px] bg-green-300' onClick={()=> setOpen(!isOpen)}></div>
        </div>
        <div className={`${isOpen ? 'left-0' : 'left-[-100%] lg:left-0'} p-[20px] lg:p-0 absolute top-0 lg:relative flex flex-col lg:flex-row items-start lg:items-center space-y-[20px] lg:space-y-0 lg:space-x-[20px] z-30 bg-gray-300 lg:bg-transparent h-screen lg:h-fit w-[70%] md:w-[30%] lg:w-fit transition-all`}>
          <Link href="/" className="font-Mulish font-[700] text-[18px] text-[#000000]">
            Products
          </Link>
          <Link href="/" className="font-Mulish font-[700] text-[18px] text-[#000000]">
            Solutions
          </Link>
          <Link href="/" className="font-Mulish font-[700] text-[18px] text-[#000000]">
            News
          </Link>
          <Link href="/" className="font-Mulish font-[700] text-[18px] text-[#000000]">
            Investor relations
          </Link>
          <Link href="/" className="font-Mulish font-[700] text-[18px] text-[#000000]">
            Careers
          </Link>
          <Link href="/" className="font-Mulish font-[700] text-[18px] text-[#000000]">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
