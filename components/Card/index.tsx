import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Services: NextPage = () => {
  return (
    <>
      <div className='bg-[#D8D8D8] p-[50px_20px] mt-[60px]'>
        <div className='flex items-center justify-between'>
          <p className='font-[800] text-[48px] text-[#000000] leading-[43px] font-Mulish'>The industries <br /> we service.</p>
          <button>View all industries</button>
        </div>
        <div className='grid lg:grid-cols-3 mt-[20px] gap-[40px]'>
          {
            services.map(({id, title, content})=> (
              <div key={id} className='shadow rounded-[20px] p-[20px] text-[#000000]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, soluta fuga. Ullam doloremque, minus maiores, doloribus accusamus vitae esse harum tempore libero, corrupti expedita recusandae dolor molestiae in repellat fuga?</div>
            ))
          }
        </div>
      </div>
      {/* <div className="relative bg-lightGray">
        <div className="container mx-auto pb-20">
          <div className="flex items-center justify-between py-20">
            <div className="max-w-sm w-1/2">
              <h1 className="max-w-xl text-5xl font-[800] text-center font-Mulish md:text-5xl md:text-left">
                The industries we service.
              </h1>
            </div>
            <div>
              <button className="rounded-[10px] text-white mr-20 font-Mulish bg-[blue] py-2 px-5">
                View all industries
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 justify-items-start">
            <div className="card w-1/4 lg:w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title font-Mulish font-[800] text-4xl">
                  Finance
                </h2>
                <p className="text-[16px] space-y-5 font-Montserrat">
                  We are creating practical solutions to address everyday health
                  issues that people face, such as fitness trackers, tools to
                  promote a healthy lifestyle, and better early disease
                  diagnosis.
                </p>
                <Link
                  href="/"
                  className="flex items-center gap-1 text-[blue] font-Mulish font-bold text-[20px]"
                >
                  Learn more <FiArrowRight />
                </Link>
              </div>
              <div className="">
                <Image
                  src="/images/img3.png"
                  alt="Shoes"
                  className="w-full h-[150px]"
                  width={200}
                  height={100}
                />
              </div>
            </div>
            <div className="card w-1/4 lg:w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title font-Mulish font-[800] text-4xl">
                  Energy
                </h2>
                <p className="text-[16px] space-y-5 font-Montserrat">
                  Through MT Renewable Energy, we are developing clean energy
                  resources to meet industrial, commercial, and domestic needs
                  in underserved areas of emerging communities.
                </p>
                <Link
                  href="/"
                  className="flex items-center gap-1 text-[blue] font-Mulish font-bold text-[20px]"
                >
                  Learn more <FiArrowRight />
                </Link>
              </div>
              <div className="">
                <Image
                  src="/images/img4.png"
                  alt="Shoes"
                  className="w-full h-[150px]"
                  width={200}
                  height={100}
                />
              </div>
            </div>
            <div className="card w-1/4 lg:w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title font-Mulish font-[800] text-4xl">
                  Healthcare
                </h2>
                <p className="text-[16px] space-y-5 font-Montserrat">
                  We are creating practical solutions to address everyday health
                  issues that people face, such as fitness trackers, tools to
                  promote a healthy lifestyle, and better early disease
                  diagnosis.
                </p>
                <Link
                  href="/"
                  className="flex items-center gap-1 text-[blue] font-Mulish font-bold text-[20px]"
                >
                  Learn more <FiArrowRight />
                </Link>
              </div>
              <div className="">
                <Image
                  src="/images/img5.png"
                  alt="Shoes"
                  className="w-full h-[150px]"
                  width={200}
                  height={100}
                />
              </div>
            </div>
            <div className="card w-1/4 lg:w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title font-Mulish font-[800] text-4xl">
                  Agriculture
                </h2>
                <p className="text-[16px] space-y-5 font-Montserrat">
                  Mambila Technologies is Africa’s leading Integrated Payments
                  and Digital Commerce Solutions company,
                </p>
                <Link
                  href="/"
                  className="flex items-center gap-1 text-[blue] font-Mulish font-bold text-[20px]"
                >
                  Learn more <FiArrowRight />
                </Link>
              </div>
              <div className="">
                <Image
                  src="/images/img6.png"
                  alt="Shoes"
                  className="w-full h-[150px]"
                  width={200}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Services;


const services = [
  {
    id: 1,
    title: 'Agriculture',
    content: "Mambila Technologies is one of Africa's leading provider of integrated payment and digital commerce solutions. We use expertise, cutting-edge innovations, and technologies to provide exceptional financial solutions."
  },
  {
    id: 2,
    title: 'Finance',
    content: "Mambila Technologies is one of Africa's leading provider of integrated payment and digital commerce solutions. We use expertise, cutting-edge innovations, and technologies to provide exceptional financial solutions."
  },
  {
    id: 3,
    title: 'Energy',
    content: "Mambila Technologies is one of Africa's leading provider of integrated payment and digital commerce solutions. We use expertise, cutting-edge innovations, and technologies to provide exceptional financial solutions."
  },
  {
    id: 4,
    title: 'Healthcare',
    content: "Mambila Technologies is one of Africa's leading provider of integrated payment and digital commerce solutions. We use expertise, cutting-edge innovations, and technologies to provide exceptional financial solutions."
  },
  
]
