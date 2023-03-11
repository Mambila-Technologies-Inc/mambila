import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

const Hero: NextPage = () => {
  return (
    <>
      <div className="pb-20">
        <section id="hero" className="w-full pt-5">
          {/*Left  */}
          <div className="flex  justify-between flex-col-reverse md:flex-row items-center px-6 mx-auto space-y-0 md:space-y-0">
            <div className="flex text-center flex-col  space-y-5 md:w-1/2">
              <h1 className="max-w-xl text-4xl font-[800] text-center font-Mulish md:text-5xl md:text-left">
                Innovating Industries from Africa to the World
              </h1>
              <p className="max-w-md text-center font-Montserrat md:text-left">
                We create solution-centric products that improve living
                conditions and increase economic profitability in Africa.
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

            <div className="md:mr-[-58px]">
              <Image
                src="/images/img1.png"
                alt="Landscape picture"
                width={470}
                height={100}
              />
            </div>
          </div>

          {/*Right  */}
        </section>
        <section>
          <div className="flex  justify-between flex-col-reverse md:flex-row-reverse items-center px-6 mx-auto space-y-0 md:space-y-0">
            <div className="flex text-center flex-col  space-y-5 md:w-1/2">
              <h1 className="max-w-md text-3xl font-[800] font-Mulish text-center md:text-2xl md:text-left">
                Our mission is to create technologies that solve major problems
                and accelerate the world’s transition to a sustainable tech
                system.
              </h1>
              <p className="max-w-md text-center font-Montserrat md:text-left">
                we are keen on identifying prolonged problems existing in
                emerging communities and providing corresponding solutions that
                would solve those problems for everyone.
              </p>
            </div>
            <div className="">
              <Image
                src="/images/img2.png"
                alt="Landscape picture"
                width={470}
                height={100}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
