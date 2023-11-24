import { NextPage } from "next";
// import Image from "next/image";
// import Link from "next/link";
import React from "react";
// import { BsArrowRight } from "react-icons/bs";
import { SectorArr } from "../Placeholders/SectorArr";
import { SectorCard } from "../common/SectorCard";

const Services: NextPage = () => {
  const initialVisibleItems = 4;
  const [visibleItems, setVisibleItems] = React.useState(initialVisibleItems);

  const handleViewAll = () => {
    setVisibleItems(SectorArr.length);
  };

  const handleViewLess = () => {
    setVisibleItems(initialVisibleItems);
  };

  return (
    <>
      <div className="bg-[#D8D8D8] p-[20px] lg:p-[50px_40px] mt-[60px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <p className="font-[800] text-[22px] lg:text-[48px] text-[#000000] leading-[30px] lg:leading-[43px] font-Mulish">
            The industries <br className="hidden lg:block" /> we service.
          </p>
          {visibleItems < SectorArr.length ? (
            <button
              onClick={handleViewAll}
              className="bg-[#0500FC] text-white p-[8px_16px] font-[800] font-Mulish text-[16px] rounded-[8px]"
            >
              View All Industries
            </button>
          ) : (
            <button
              onClick={handleViewLess}
              className="bg-[#0500FC] text-white p-[8px_16px] font-[800] font-Mulish text-[16px] rounded-[8px]"
            >
              View Less
            </button>
          )}
        </div>
        <div className="grid tablet:grid-cols-2 mt-[40px] gap-[40px]">
          {SectorArr.slice(0, visibleItems).map(
            ({ title, content, image }, index) => (
              <SectorCard
                key={index}
                title={title}
                content={content}
                image={image}
              />
            )
          )}
        </div>
        {visibleItems > 4 && (
          <div className=" mt-6 flex w-full justify-end">
            <button
              onClick={handleViewLess}
              className="bg-[#0500FC] text-white p-[8px_16px] font-[800] font-Mulish text-[16px] rounded-[8px]"
            >
              View Less
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Services;

// const services = [
//   {
//     id: 1,
//     title: 'Agriculture',
//     content: "Mambila Technologies is one of Africa's leading provider of integrated payment and digital commerce solutions. We use expertise, cutting-edge innovations, and technologies to provide exceptional financial solutions.",
//     image: '/images/img6.png'
//   },
//   {
//     id: 2,
//     title: 'Finance',
//     content: "Mambila Technologies is one of Africa's leading provider of integrated payment and digital commerce solutions. We use expertise, cutting-edge innovations, and technologies to provide exceptional financial solutions.",
//     image: '/images/img3.png'

//   },
//   {
//     id: 3,
//     title: 'Energy',
//     content: "Mambila Technologies is one of Africa's leading provider of integrated payment and digital commerce solutions. We use expertise, cutting-edge innovations, and technologies to provide exceptional financial solutions.",
//     image: '/images/img4.png'

//   },
//   {
//     id: 4,
//     title: 'Healthcare',
//     content: "Mambila Technologies is one of Africa's leading provider of integrated payment and digital commerce solutions. We use expertise, cutting-edge innovations, and technologies to provide exceptional financial solutions.",
//     image: '/images/img5.png'

//   },

// ]
