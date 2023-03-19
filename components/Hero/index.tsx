import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from 'react-icons/bs';

const Hero: NextPage = () => {
  return (
    <>
      <div className="hidden lg:grid lg:grid-cols-2 gap-[80px] mt-[62px] ">
        <div className="pl-[30px]">
          <div>
            <p className="font-Mulish font-[800] text-[48px] text-[#000000] leading-[55px]">
              Innovating Industries <br className="hidden lg:block" /> from
              Africa to the World
            </p>
            <p className="font-Montserrat font-[400] text-[#2D2D2D] text-[18px] mt-[27px] leading-[28px]">
              We create solution-centric products that improve living conditions
              and increase economic profitability in Africa.
            </p>
            <div className="w-full flex gap-5 pt-5">
              <button className="rounded-[10px] text-white font-bold font-Mulish bg-[blue] py-2 px-5">
                Explore products
              </button>
              <button className="rounded-[10px] text-[blue] font-Mulish font-bold border-2 py-2 px-5">
                Explore products
              </button>
            </div>
          </div>
          <div className="mt-[100px]">
            <div className="relative w-[150px] sm:w-[570px] h-[150px] md:h-[568px] rounded-[27px]">
              <Image
                src="/images/img2.png"
                alt="thumbnail"
                objectFit="cover"
                layout="fill"
                className="rounded-[27px]"
              />
            </div>
          </div>
        </div>
        <div>
          <div className='flex items-center justify-end'>
            <div className="relative w-[150px] sm:w-[600px] h-[150px] md:h-[550px] rounded-r-[27px] lg:rounded-l-[27px] lg:rounded-r-none">
              <Image
                src="/images/img1.png"
                alt="thumbnail"
                objectFit="cover"
                layout="fill"
                className="rounded-r-[27px] lg:rounded-r-none lg:rounded-l-[27px]"
              />
            </div>
          </div>
          <div className="mt-[60px]">
            <p className='font-[800] font-Mulish text-[#000000] text-[24px] leading-[30px] w-full lg:w-[446px]'>
            Our mission is to create technologies that solve major problems and accelerate the world’s transition to a sustainable tech system.
            </p>
            <p className='w-full lg:w-[558px] font-[400] text-[16px] mt-[21px] text-[#2D2D2D] font-Montserrat'>We are keen on identifying  prolonged problems existing in emerging communities and providing corresponding solutions that would solve those problems for everyone. </p>
            <Link href='/' className='text-[#0500FC] font-[800] text-[18px] font-Mulish flex items-center space-x-[10px] mt-[20px]'>
                <p>Learn More</p>
              <BsArrowRight/>
              </Link>
          </div>
         
        </div>
      </div>
      <div className='flex lg:hidden px-[15px] mt-[30px]'>
      <div>
            <p className="font-Mulish font-[800] text-[24px]  text-[#000000] leading-[32px]">
              Innovating Industries <br className="hidden lg:block" /> from
              Africa to the World
            </p>
            <p className="font-Montserrat font-[400] text-[#2D2D2D] text-[14px] mt-[20px] leading-[22px]">
              We create solution-centric products that improve living conditions
              and increase economic profitability in Africa.
            </p>
            <div className="w-[70%] flex flex-col gap-y-[10px] pt-5">
              <button className="rounded-[10px] text-white font-bold font-Mulish bg-[blue] py-2 px-5">
                Explore products
              </button>
              <button className="rounded-[10px] text-[blue] font-Mulish font-bold border-2 py-2 px-5">
                Explore products
              </button>
            </div>

            <div className="relative w-full h-[328px] mt-[40px]  rounded-[14px]">
              <Image
                src="/images/img1.png"
                alt="thumbnail"
                objectFit="cover"
                layout="fill"
                className="rounded-[14px]"
              />
            </div>
            <div className="mt-[40px]">
            <p className='font-[800] font-Mulish text-[#000000] text-[20px] leading-[25px] w-full lg:w-[446px]'>
            Our mission is to create technologies that solve major problems and accelerate the world’s transition to a sustainable tech system.
            </p>
            <p className='w-full  font-[400] text-[14px] mt-[21px] text-[#2D2D2D] font-Montserrat'>We are keen on identifying  prolonged problems existing in emerging communities and providing corresponding solutions that would solve those problems for everyone. </p>
            <Link href='/' className='text-[#0500FC] font-[800] text-[18px] font-Mulish flex items-center space-x-[5px]'>
                <p>Learn More</p>
              <BsArrowRight/>
              </Link>
          </div>
          <div className="relative w-full h-[202px] mt-[40px]  rounded-[10px]">
              <Image
                src="/images/img2.png"
                alt="thumbnail"
                objectFit="cover"
                layout="fill"
                className="rounded-[10px]"
              />
            </div>
          </div>
      </div>
    </>
  );
};

export default Hero;

// <section id="hero" className="w-full pt-5">
//           {/*Left  */}
//           <div className="flex  justify-between flex-col-reverse md:flex-row items-center px-6 mx-auto space-y-0 md:space-y-0">
//             <div className="flex text-center flex-col  space-y-5 md:w-1/2">
//               <h1 className="max-w-xl text-[48px] text-[#000000] font-[800] text-center font-Mulish md:text-5xl md:text-left">
//                 Innovating Industries from Africa to the World
//               </h1>
//               <p className="max-w-md text-[#2D2D2D] text-center font-Montserrat md:text-left">
//                 We create solution-centric products that improve living
//                 conditions and increase economic profitability in Africa.
//               </p>
//
//             </div>

//             <div className="md:mr-[-58px]">
//               <Image
//                 src="/images/img1.png"
//                 alt="Landscape picture"
//                 className="w-full h-[500px]"
//                 width={500}
//                 height={100}
//               />
//             </div>
//           </div>

//           {/*Right  */}
//         </section>
//         <section>
//           <div className="flex  justify-between flex-col-reverse md:flex-row-reverse items-center lg:px-6 mx-auto space-y-0 md:space-y-0">
//             <div className="flex text-center flex-col space-y-5 md:w-1/2">
//               <h1 className="max-w-md text-3xl font-[800] font-Mulish text-center md:text-2xl md:text-left">
//                 Our mission is to create technologies that solve major problems
//                 and accelerate the world’s transition to a sustainable tech
//                 system.
//               </h1>
//               <p className="max-w-md text-center font-Montserrat md:text-left">
//                 we are keen on identifying prolonged problems existing in
//                 emerging communities and providing corresponding solutions that
//                 would solve those problems for everyone.
//               </p>
//             </div>
//
//             <div className="">
//               <Image
//                 src="/images/img2.png"
//                 alt="Landscape picture"
//                 className="w-full h-[450px]"
//                 width={470}
//                 height={100}
//               />
//             </div>
//           </div>
//         </section>
