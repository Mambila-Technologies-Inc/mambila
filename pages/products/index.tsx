import React from "react";
import Layout from "../../components/Layout";
import { SectorArr } from "../../components/Placeholders/SectorArr";
import { SectorCard } from "../../components/common/SectorCard";

function Products() {
  const initialVisibleItems = 4;
  const [visibleItems, setVisibleItems] = React.useState(initialVisibleItems);

  const handleViewAll = () => {
    setVisibleItems(SectorArr.length);
  };

  const handleViewLess = () => {
    setVisibleItems(initialVisibleItems);
  };
  return (
    <Layout>
      <div className=" mt-8 w-full tablet:max-w-[90%] mx-auto">
        <h1 className=" px-4 tablet:px-0 font-semibold tablet:font-extrabold text-3xl tablet:text-5xl text-[#2D358F] font-Mulish">
          Our Product
        </h1>
        <p className="px-4 tablet:px-0 mt-5 font-normal text-sm tablet:text-lg text-black text-opacity-70 font-Mulish">
          Our investment strategy, rooted in a long-term perspective, allows us
          to contribute significant and enduring value to every company in our
          portfolio.
        </p>
        <div className="mt-8 bg-[#1E1E1E14] bg-opacity-[0.08] px-4 py-4 tablet:px-6 tablet:py-12">
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
          {visibleItems < SectorArr.length ? (
            <div className=" mt-6 flex w-full justify-end">
              <button
                onClick={handleViewAll}
                className="bg-[#0500FC] text-white p-[8px_16px] font-[800] font-Mulish text-[16px] rounded-[8px]"
              >
                View All Industries
              </button>
            </div>
          ) : (
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
      </div>
    </Layout>
  );
}

export default Products;
