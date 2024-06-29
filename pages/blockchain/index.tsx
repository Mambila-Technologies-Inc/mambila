import Image from "next/image";
import Layout from "../../components/Layout";
import { FC } from "react";
import Link from "next/link";

const Blockchain = () => {
  return (
    <Layout>
      <div className=" h-[calc(100vh-120px)] my-[10px] lg:mx-[30px] lg:rounded-lg relative">
        <Image
          src="/images/auc-blockchain-logo.png"
          alt="img"
          fill
          sizes="100%, 100%"
          className=" w-full h-auto object-cover object-center lg:rounded-lg bg-center absolute bg-cover z-10"
        />
        <h1 className=" absolute z-[12] left-[30px] bottom-[30px] font-medium text-3xl lg:text-6xl text-white">
          AUC Blockchain
        </h1>
      </div>

      <div className=" flex flex-col gap-6 text-black px-[30px] my-12">
        <h1 className=" font-medium text-2xl lg:text-[32px]">Chain Lab</h1>
        <p className=" font-semibold text-base lg:text-lg">
          At MAMBILA, we offer a comprehensive suite of financial services
          tailored to meet your diverse needs. Whether you&lsquo;re planning for
          the future, seeking funding, or safeguarding your assets, our team of
          experts is here to guide you every step of the way. Chain Lab is where
          the brightest minds collaborate to tackle fundamental challenges in
          paving the way for Web3, empowering individuals and creators with
          unparalleled ownership of their data and content. Our mission is to
          develop the necessary tools to ensure Web3&lsquo;s security,
          reliability, and seamless adoption on a massive scale.
        </p>
        <button className=" font-medium text-xl p-[10px] w-fit underline underline-offset-4 text-[#2D358F]">
          Learn more
        </button>
      </div>

      <div className=" my-16 flex flex-col items-center">
        <h1 className=" font-bold text-2xl lg:text-[32px] text-[#1E1E1E]">
          Chain Lab Product:
        </h1>
      </div>

      <div className=" flex flex-col gap-[50px] px-5 lg:px-[30px]">
        {chainLabProductsArr.map((item) => (
          <ProductsContainer
            key={item.title}
            desc={item.desc}
            logo={item.logo}
            logoWhite={item.logoWhite}
            title={item.title}
            backgroundCol={item.backgroundCol}
            link={item.link}
          />
        ))}
      </div>
    </Layout>
  );
};
export default Blockchain;

interface ProductsContainerProps {
  logo: string;
  logoWhite: string;
  title: string;
  desc: string;
  backgroundCol: string;
  link: string;
}

const ProductsContainer: FC<ProductsContainerProps> = ({
  logo,
  logoWhite,
  title,
  desc,
  backgroundCol,
  link,
}) => {
  return (
    <Link
      href={link}
      target={link !== "" ? "_blank" : "_self"}
      className="p-5 lg:p-[30px] rounded-lg space-y-6 cursor-pointer"
      style={{
        backgroundColor: `${backgroundCol}1A`,
        border: `1.5px solid ${backgroundCol}`,
      }}
    >
      <h1 className="flex gap-[10px] text-3xl font-bold items-center">
        <Image
          src={logo}
          alt="img"
          className=" w-auto h-[30px] lg:h-[45px]"
          width={50}
          height={45}
          sizes="50px, 45px"
        />
        <span className=" font-medium text-xl lg:text-[32px] text-[#1E1E1E]">
          {title}
        </span>
      </h1>
      <p
        className="font-medium text-sm lg:text-lg"
        style={{ color: backgroundCol }}
      >
        {desc}
      </p>
      <div className=" w-full flex justify-center px-[20px]">
        <button className=" flex gap-[10px] text-lg lg:text-3xl font-bold lg:min-w-[300px] min-w-full shrink-0 h-[75px] rounded-lg bg-[#2E3192] justify-center items-center text-white px-4">
          <Image
            src={logoWhite}
            alt="img"
            className=" w-auto h-[30px] lg:h-[45px]"
            width={50}
            height={45}
            sizes="50px, 45px"
          />
          <span className=" flex shrink-0">{title}</span>
        </button>
      </div>
    </Link>
  );
};

const chainLabProductsArr = [
  {
    logo: "/images/layer-chain-logo.svg",
    logoWhite: "/images/layer-chain-logo-white.svg",
    desc: "At MAMBILA, we offer a comprehensive suite of financial services tailored to meet your diverse needs. Whether you're planning for the future, seeking funding, or safeguarding your assets, our team of experts is here to guide you every step of the way. Chain Lab is where the brightest minds collaborate to tackle fundamental challenges in paving the way for Web3, empowering individuals and creators with unparalleled ownership of their data and content. Our mission is to develop the necessary tools to ensure Web3's security, reliability, and seamless adoption on a massive scale.",
    title: "Layer Chain",
    backgroundCol: "#4A4A4A",
    link: "",
  },
  {
    logo: "/images/web3ventures-logo.svg",
    logoWhite: "/images/web3ventures-logo-white.svg",
    desc: "At MAMBILA, we offer a comprehensive suite of financial services tailored to meet your diverse needs. Whether you're planning for the future, seeking funding, or safeguarding your assets, our team of experts is here to guide you every step of the way. Chain Lab is where the brightest minds collaborate to tackle fundamental challenges in paving the way for Web3, empowering individuals and creators with unparalleled ownership of their data and content. Our mission is to develop the necessary tools to ensure Web3's security, reliability, and seamless adoption on a massive scale.",
    title: "Web3 Ventures",
    backgroundCol: "#EF9621",
    link: "https://www.web3-ventures.xyz/",
  },
  {
    logo: "/images/ubuntu-logo.svg",
    logoWhite: "/images/ubuntu-logo-white.svg",
    desc: "At MAMBILA, we offer a comprehensive suite of financial services tailored to meet your diverse needs. Whether you're planning for the future, seeking funding, or safeguarding your assets, our team of experts is here to guide you every step of the way. Chain Lab is where the brightest minds collaborate to tackle fundamental challenges in paving the way for Web3, empowering individuals and creators with unparalleled ownership of their data and content. Our mission is to develop the necessary tools to ensure Web3's security, reliability, and seamless adoption on a massive scale.",
    title: "Ubuntu Chain",
    backgroundCol: "#EF4923",
    link: "",
  },
  {
    logo: "/images/cex-logo.svg",
    logoWhite: "/images/cex-logo-white.svg",
    desc: "At MAMBILA, we offer a comprehensive suite of financial services tailored to meet your diverse needs. Whether you're planning for the future, seeking funding, or safeguarding your assets, our team of experts is here to guide you every step of the way. Chain Lab is where the brightest minds collaborate to tackle fundamental challenges in paving the way for Web3, empowering individuals and creators with unparalleled ownership of their data and content. Our mission is to develop the necessary tools to ensure Web3's security, reliability, and seamless adoption on a massive scale.",
    title: "CEX",
    backgroundCol: "#2E3192",
    link: "",
  },
  {
    logo: "/images/cex-logo.svg",
    logoWhite: "/images/cex-logo-white.svg",
    desc: "At MAMBILA, we offer a comprehensive suite of financial services tailored to meet your diverse needs. Whether you're planning for the future, seeking funding, or safeguarding your assets, our team of experts is here to guide you every step of the way. Chain Lab is where the brightest minds collaborate to tackle fundamental challenges in paving the way for Web3, empowering individuals and creators with unparalleled ownership of their data and content. Our mission is to develop the necessary tools to ensure Web3's security, reliability, and seamless adoption on a massive scale.",
    title: "Crypto Times TV",
    backgroundCol: "#2E3192",
    link: "",
  },
];
