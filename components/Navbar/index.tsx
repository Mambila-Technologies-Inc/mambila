import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../assets/logo.svg";
import {AiOutlineMenu} from 'react-icons/ai'
import { useRouter } from "next/router";
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const router = useRouter();
    // what should be used ${router.pathname === link ? "text-[#2D358F]" : ""}, but for now lets just make it work
  return (
    <div className="p-0 lg:p-[15px_30px] sticky top-0 flex flex-col lg:flex-row lg:items-center justify-start lg:justify-between w-full ">
      <div className='p-[15px] lg:p-0 flex items-center w-full lg:w-fit justify-between lg:justify-start'>
      <Link href="/" className="flex items-center  space-x-[5px]">
        <Image alt="Mambila Logo" src={Logo} />
        <p className="font-Mulish text-[24px] font-[800]  text-[#000000]">
          Mambila
        </p>
      </Link>
      <div className='lg:hidden cursor-pointer' onClick={()=> setIsMenuOpen(!isMenuOpen)}>
        <AiOutlineMenu className='text-[35px] text-[#000000]'/>
      </div>
      </div>
      <div className={`${isMenuOpen? 'left-0' : 'left-[-100%] lg:left-0'} absolute top-0 lg:relative flex flex-col lg:flex-row items-start lg:items-center lg:space-x-[20px] space-y-[20px] lg:space-y-0 p-[20px_15px] bg-gray-300 lg:bg-transparent z-50 transition-all h-screen lg:h-fit w-[70%] md:w-[50%] lg:w-fit`}>
        {navLinks.map(({ name, link, id }) => (
          <div key={id}onClick={()=> setIsMenuOpen(!isMenuOpen)}>
            <Link
              href={link}
              className={`font-[700] text-[18px] font-Mulish text-[#000000]`}
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

const navLinks = [
  {
    id: 1,
    name: "Products",
    link: "/products",
  },
  {
    id: 2,
    name: "Solutions",
    link: "/",
  },
  {
    id: 3,
    name: "News",
    link: "/",
  },
  {
    id: 4,
    name: "Investor relations",
    link: "/",
  },
  {
    id: 5,
    name: "Careers",
    link: "/",
  },
  {
    id: 6,
    name: "Contact",
    link: "/",
  },
];
