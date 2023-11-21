import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import React, { FC } from "react";

interface ISectorCardProps {
  title: string;
  content: string;
  image: string;
}

export const SectorCard: FC<ISectorCardProps> = ({ title, content, image }) => {
  return (
    <div
      className={`shadow rounded-3xl bg-white lmax-w-[540px] min-w-[250px] tablet:w-[45%] flex flex-col justify-between`}
    >
      <div className="p-5">
        <p className="text-black font-bold font-Mulish text-xl ipad:text-[28px]">
          {title}
        </p>
        <p className="mt-[13px] font-Montserrat text-xs lg:text-base font-normal text-black">
          {content}
        </p>
        <Link
          href="/"
          className="text-[#2D358F] font-normal text-lg font-Mulish flex items-center space-x-[5px] p-[10px]"
        >
          <p>Learn More</p>
          <BsArrowRight />
        </Link>
      </div>
        <Image
          src={image}
          alt="Sector image"
          width={540}
          height={218}
          className="rounded-b-3xl object-cover w-full h-full"
        />
    </div>
  );
};
