import Layout from "../components/Layout";
import { SectorArr } from "../components/Placeholders/SectorArr";
import { SectorCard } from "../components/common/SectorCard";

function Products() {
  return (
    <Layout>
      <div className=" mt-8 max-w-[90%] mx-auto">
        <h1 className=" font-semibold tablet:font-extrabold text-3xl tablet:text-5xl text-[#2D358F] font-Mulish">
          Our Product
        </h1>
        <p className=" mt-5 font-normal text-sm tablet:text-lg text-black text-opacity-70 font-Mulish">
          Our investment strategy, rooted in a long-term perspective, allows us
          to contribute significant and enduring value to every company in our
          portfolio.
        </p>
        <div className=" mt-[10vh] flex flex-wrap justify-center bg-[#1E1E1E14] bg-opacity-[0.08] gap-6 ipad:gap-8 desktop:gap-10 px-6  py-12">
          {SectorArr.map((sector, index) => (
            <SectorCard
              key={index}
              title={sector.title}
              content={sector.content}
              image={sector.image}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Products;
