"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CustomButtonVariant1 from "../ui/CustomButtonVariant1";

export default function MintingDetails() {
  const [miningNumber, setMiningNumber] = useState(823);
  const [minting, setMinting] = useState(1);

  const totalMiningNumber = 5555;
  const percentageOfMining = Math.ceil(
    (miningNumber * 100) / totalMiningNumber
  );

  const mainContentRef = useRef(null);
  const [mainContentWidth, setMainContentWidth] = useState(null);
  const [mainContentHeight, setMainContentHeight] = useState(null);

  const textVariant = {
    initial: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.75 },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75 },
    },
  };
  const imgVariant = {
    initial: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.75 },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75 },
    },
  };

  const rightCardsVariant = {
    initial: {
      opacity: 0,
      x: -30,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    animate: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        delay: 0.35 * i,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  useEffect(() => {
    if (mainContentRef.current) {
      setMainContentWidth(mainContentRef.current.clientWidth);
      setMainContentHeight(mainContentRef.current.clientHeight);
    }

    function handleResize() {
      setMainContentWidth(mainContentRef.current.clientWidth);
      setMainContentHeight(mainContentRef.current.clientHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 383838 / 100
  // 434242 / 12

  return (
    <section className="text-white overflow-hidden bg-[url('/assets/images/banner-bg-2.webp')] bg-cover bg-center mt-5 sm:mt-12 lg:mt-20 relative">
      {/* left side lines */}
      <div className="bg-[url('/assets/icons/leftLines.svg')] bg-cover absolute top-0 left-0 min-w-[778px] min-h-[900px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[1000px] z-[2] opacity-10" />
      {/* right side lines */}
      <div className="bg-[url('/assets/icons/rightLines.svg')] bg-cover absolute top-0 right-0 min-w-[778px] min-h-[900px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[1000px] z-[2] opacity-10" />
      {/* left side dots */}
      <div className="absolute bottom-8 sm:bottom-0 left-6 sm:left-10 md:left-12 lg:left-16 bg-[url('/assets/icons/bottomLeftDots.svg')] bg-cover z-[4] w-[130px] h-[35px] opacity-30" />
      {/* right side dots */}
      <div className="absolute top-32 right-6 sm:right-10 md:right-12 lg:right-16 bg-[url('/assets/icons/rightTopDots.svg')] bg-cover z-[4] w-[60px] h-[96px] opacity-30" />

      {/* bottom gradient overlay */}
      <div
        className="h-[20%] absolute z-[3] bg-gradient-to-b from-transparent to-black bottom-0"
        style={{
          width: `${mainContentWidth}px`,
        }}
      />
      {/* full width gradient overlay */}
      <div
        className="bg-gradient-to-b from-transparent to-black z-[1] absolute"
        style={{
          width: `${mainContentWidth}px`,
          height: `${mainContentHeight}px`,
        }}
      />
      <div
        className="bg-gradient-to-b from-transparent to-black z-[1] absolute bottom-0 left-0"
        style={{
          width: `${mainContentWidth}px`,
          height: `${mainContentHeight / 2}px`,
        }}
      />

      {/* main content */}
      <div ref={mainContentRef} className="main-container relative z-10 ">
        {/* btn */}
        <div className="py-12 sm:py-8 flex flex-col justify-center items-center gap-7">
          <div>
            <Image
              src={"/assets/icons/text-top-yellow.svg"}
              alt=""
              width={310}
              height={14}
            />
            <h5 className="uppercase text-base sm:text-lg md:text-xl font-bold tracking-[5px] text-center">
              Mint Here
            </h5>
          </div>
          <div>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-white/80 text-center leading-5 sm:leading-normal mb-1 lg:mb-0">
              In this lootbox, you will mint{" "}
              <span className="text-yellow2 font-medium">1 random NFT</span> of
              character or sword
            </p>
            <p className="text-xs sm:text-sm md:text-base text-white/80 text-center">
              Check for Katana Inu Ecosystem for Renting, Staking, our
              Marketplace or for purchasing our $Kata Token:
            </p>
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:flex-row relative gap-10 lg:gap-0">
          <div className="lg:w-[22%] xl:w-[25%] 2xl:w-[30%] relative bottom-20 lg:bottom-10">
            <Image
              src={"/assets/images/mint-ch-1.png"}
              alt=""
              width={617}
              height={899}
              className="object-contain"
            />
          </div>
          {/* middle card */}
          <div className="-mt-36 lg:-mt-0 relative lg:col-start-3 lg:col-end-9 2xl:col-start-3 2xl:col-span-3 flex-1 w-full sm:w-[90%] md:w-[80%] lg:w-[56%] xl:w-[50%] 2xl:w-[40%] bg-[url('/assets/images/min-frame.png')] bg-no-repeat bg-cover px-4 xl:px-10 2xl:px-10 min-card-bg">
            {/* card content */}
            {/* ////////////////////////////////////////////// */}
            {/* content */}
            <div className="flex flex-col gap-3 md:gap-4 2xl:gap-6 justify-center items-center max-w-[418px] 2xl:max-w-[600px] mx-auto pt-7 pb-9 xl:pt-10 2xl:pt-14 mint-card">
              {/* favourite * share * affiliate */}
              <div className="flex items-center flex-wrap justify-center gap-2 md:gap-3 xl:gap-4 w-full lg:justify-between pb-3">
                {/* favourite */}
                <div className="py-2 pl-2 pr-5 bg-[#000000] rounded-full flex items-center gap-2">
                  <div className="p-2 rounded-full bg-[#E4E4E41A]">
                    <Image
                      src="/assets/icons/favourite.svg"
                      alt="favourite"
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="text-white text-xs md:text-sm font-bold">
                    Favourite
                  </p>
                </div>
                {/* share */}
                <div className="py-2 pl-2 pr-5 bg-[#000000] rounded-full flex items-center gap-2">
                  <div className="p-2 rounded-full bg-[#E4E4E41A]">
                    <Image
                      src="/assets/icons/share.svg"
                      alt="favourite"
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="text-white text-xs md:text-sm font-bold">
                    Share
                  </p>
                </div>
                {/* affiliate */}
                <div className="py-2 pl-2 pr-5 bg-[#000000] rounded-full flex items-center gap-2">
                  <div className="p-2 rounded-full bg-[#E4E4E41A]">
                    <Image
                      src="/assets/icons/affiliate.svg"
                      alt="favourite"
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="text-white text-xs md:text-sm font-bold">
                    Affiliate
                  </p>
                </div>
              </div>

              {/* progress and details */}
              <div className="flex items-center justify-between w-full gap-6">
                <div className="flex flex-col gap-2 lg:gap-4">
                  <p className="text-xs md:text-sm text-[#D0D4EA]">
                    Total Available (Sold/Total)
                  </p>
                  <p className="text-base md:text-lg lg:text-xl xl:text-[28px] text-white font-bold">
                    <span className="text-[#F9C306]">{miningNumber}</span>/
                    {totalMiningNumber}
                  </p>
                </div>

                {/* radial progress */}
                <div className=" rounded-full bg-[#30373F]">
                  <div
                    className="radial-progress text-[#F9C306]"
                    style={{ "--value": percentageOfMining }}
                    role="progressbar"
                  >
                    <div className="bg-[#0e0c15] p-2 rounded-full">
                      <p className="rounded-full px-2 py-3 bg-[#30373F] text-white text-base">
                        {percentageOfMining}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* price & mint */}
              <div className="flex flex-col gap-4 md:gap-6 w-full">
                {/* minting details */}
                <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5">
                  <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                    <p className="text-white text-sm md:text-base lg:text-lg font-semibold tracking-wide">
                      <span className="text-[#F9C306]">Print</span>/Mint:
                    </p>

                    {/* ethereum text */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icons/etherium.svg"
                        alt="ethereum"
                        width={32}
                        height={32}
                      />

                      <p className="px-4 py-1 rounded-full bg-[#F9C306] text-[#15131D] capitalize">
                        ethereum
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-10">
                  <h4 className="text-sm md:text-base lg:text-lg xl:text-xl font-bold text-[#F9C306]">
                    0.04 Ethereum{" "}
                    <span className="font-normal text-sm md:text-base lg:text-lg 2xl:text-xl text-white">
                      (0.04 ETH)
                    </span>
                  </h4>
                  {/* minting btn */}
                  <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
                    {/* minting increase & decrease btn */}
                    <div className="p-2 rounded-full bg-[#ffffff] flex items-center gap-2 lg:gap-3">
                      <button
                        onClick={() => {
                          setMinting((prev) => prev + 1);
                        }}
                      >
                        <Image
                          src="/assets/icons/add-circle.svg"
                          width={28}
                          height={28}
                          alt="plus or increase btn"
                        />
                      </button>
                      <p className="min-w-[20px] text-black text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center">
                        {minting}
                      </p>
                      <button
                        onClick={() => {
                          if (minting === 1) {
                            return;
                          } else {
                            setMinting((prev) => prev - 1);
                          }
                        }}
                      >
                        <Image
                          src="/assets/icons/minus-sign-circle.svg"
                          width={28}
                          height={28}
                          alt="minus or decrease btn"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                {/* public sale */}
                <div className="flex flex-col gap-5 md:gap-6 lg:gap-6 xl:gap-5 2xl:gap-6 lg:px-10 mt-4 md:mt-0">
                  <button className="px-3 py-2 md:px-4 lg:px-5 lg:py-3 2xl:px-6 2xl:py-4 bg-[#322907] hover:bg-[#4d4012] transition duration-200 ease-in uppercase rounded-md text-white font-medium w-full">
                    public sale
                  </button>

                  {/* white list button */}
                  <div>
                    {/* white list btn */}
                    {whiteListBtn.map((btn, i) => (
                      <CustomButtonVariant1
                        key={btn.bgColor}
                        textLabel={btn.textLabel}
                        bgColor={btn.bgColor}
                        textSize={btn.textSize}
                        innerBtnPadding={btn.innerBtnPadding}
                        bgVariantType={btn.bgVariantType}
                        hoverTextColor={btn.hoverTextColor}
                        elementColor={btn.elementColor}
                        hoverElementColor={btn.hoverElementColor}
                        showFullLines={btn.showFullLines}
                        isFullWidth={true}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-5 md:gap-8 px-5">
                    <p className="text-sm md:text-base text-white uppercase">
                      <span className="text-[#F9C306] font-semibold">
                        Price:
                      </span>{" "}
                      0.04 ETH
                    </p>
                    <p className="text-sm md:text-base text-white uppercase">
                      <span className="text-[#F9C306] font-semibold">
                        Limit:
                      </span>{" "}
                      75 NFTs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////////////////////////////////////// */}
          </div>
          {/* avatar */}
          <div className="lg:w-[22%] xl:w-[25%] 2xl:w-[30%] relative bottom-10 lg:bottom-10">
            <Image
              src={"/assets/images/mint-ch-2.png"}
              alt=""
              width={531}
              height={805}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 w-full h-2/5 bg-gradient-to-b from-transparent to-black z-[2]" />
    </section>
  );
}

export const avatarData = [
  {
    iconLink: "/assets/images/avatar-1.png",
  },
  {
    iconLink: "/assets/images/avatar-2.png",
  },
  {
    iconLink: "/assets/images/avatar-3.png",
  },
];

const whiteListBtn = [
  {
    textLabel: "whitelist now",
    bgColor: "#FFD026",
    textSize: "text-sm lg:text-base 2xl:text-xl ",
    innerBtnPadding: "px-10 h-8",
    bgVariantType: "#232323",
    hoverTextColor: "#ffffff",
    elementColor: "#ffffff",
    hoverElementColor: "#FFD026",
    showFullLines: true,
  },
];
