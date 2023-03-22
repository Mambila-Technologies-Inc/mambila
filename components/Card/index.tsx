import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Services: NextPage = () => {
  return (
    <>
      <div className='bg-[#D8D8D8] p-[20px] lg:p-[50px_40px] mt-[60px]'>
        <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between'>
          <p className='font-[800] text-[22px] lg:text-[48px] text-[#000000] leading-[30px] lg:leading-[43px] font-Mulish'>The industries <br className='hidden lg:block' /> we service.</p>
          <button>View all industriess</button>
        </div>
        <div className='grid lg:grid-cols-2 mt-[40px] gap-[40px]'>
          {
            services.map(({id, title, content, image})=> (
              <div key={id} className='shadow rounded-[20px]  bg-white '>
              <div className='p-[20px]'>
              <p className='text-[#000000] font-[700] font-Mulish text-[20px] lg:text-[28px]'>{title}</p>
              <p className='mt-[13px] font-Montserrat text-[12px] lg:text-[16px] font-[400] text-[#000000]'>{content}</p>
              <Link href='/' className='text-[#0500FC] font-[800] text-[18px] font-Mulish flex items-center space-x-[5px]'>
                <p>Learn More</p>
              <BsArrowRight/>
              </Link>
              </div>
              <div className="relative w-full h-[140px] lg:h-[200px]   rounded-b-[20px]">
              <Image
                src={image}
                alt="thumbnail"
                objectFit="cover"
                layout="fill"
                className="rounded-b-[20px]"
              />
            </div>
              </div>
            ))
          }
        </div>
      </div>
      
    </>
  );
};

export default Services;


const services = [
  {
    id: 1,
    title: 'Agriculture',
    content: "Mambila Technologies is one of Africa's leading provider of integrated payment and digital commerce solutions. We use expertise, cutting-edge innovations, and technologies to provide exceptional financial solutions.",
    image: '/images/img6.png'
  },
  {
    id: 2,
    title: 'Finance',
    content: "Mambila Technologies is one of Africa's leading provider of integrated payment and digital commerce solutions. We use expertise, cutting-edge innovations, and technologies to provide exceptional financial solutions.",
    image: '/images/img3.png'

  },
  {
    id: 3,
    title: 'Energy',
    content: "Mambila Technologies is one of Africa's leading provider of integrated payment and digital commerce solutions. We use expertise, cutting-edge innovations, and technologies to provide exceptional financial solutions.",
    image: '/images/img4.png'

  },
  {
    id: 4,
    title: 'Healthcare',
    content: "Mambila Technologies is one of Africa's leading provider of integrated payment and digital commerce solutions. We use expertise, cutting-edge innovations, and technologies to provide exceptional financial solutions.",
    image: '/images/img5.png'

  },
  
]
