import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

const Services: NextPage = () => {
  return (
    <>
      <div className="relative bg-lightGray">
        <div className="container mx-auto py-20">
          <div className="flex items-center justify-between">
            <div className="max-w-sm w-1/2">
              <h1 className="max-w-xl text-4xl font-[800] text-center font-Mulish md:text-5xl md:text-left">
                The industries we service.
              </h1>
            </div>
            <div>
              <button className="rounded-[10px] text-white  font-Mulish bg-[blue] py-2 px-5">
                View all industries
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 justify-items-start">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
              <div className="">
                <Image
                  src="/images/img2.png"
                  alt="Shoes"
                  width={200}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
