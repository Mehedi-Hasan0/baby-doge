"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function MintingDetails() {
  const [miningNumber, setMiningNumber] = useState(823);
  const [minting, setMinting] = useState(1);

  const totalMiningNumber = 5555;
  const percentageOfMining = Math.ceil(
    (miningNumber * 100) / totalMiningNumber
  );

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

  return (
    <section className="text-white section-padding overflow-hidden bg-none xl:bg-[url('/assets/images/banner-bg-5.webp')] bg-cover bg-center min-h-[1200px] lg:mt-20">
      <div className="main-container relative">
        {/* btn img */}
        <div className="flex justify-center items-center">
          <Image
            src={"/assets/icons/min-button.svg"}
            alt="minting btn"
            width={292}
            height={42}
            className="relative z-20"
          />
        </div>
        {/* content */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 2xl:grid-cols-6 relative lg:mt-20 place-content-center items-center 2xl:mx-20 gap-10">
          {/* // mobile device show character */}
          <motion.div
            variants={textVariant}
            initial="initial"
            whileInView="animate"
            // viewport={{
            //   once: true,
            // }}
          >
            <Image
              src={"/assets/images/mobile-mint-ch.webp"}
              alt=""
              width={1024}
              height={700}
              className="block lg:hidden w-[500px] relative z-[1]"
            />
          </motion.div>
          {/* middle card */}
          <div className="-mt-44 lg:-mt-0 relative lg:col-start-3 lg:col-end-9 2xl:col-start-3 2xl:col-span-3">
            <motion.div
              variants={imgVariant}
              initial="initial"
              whileInView="animate"
              // viewport={{
              //   once: true,
              // }}
            >
              <Image
                src={"/assets/images/card-frame.webp"}
                alt="card frame"
                width={593}
                height={800}
                className="relative z-10 w-full h-[700px] sm:h-[700px] md:h-[740px] lg:h-[820px] xl:h-[780px] 2xl:h-[880px] "
              />
            </motion.div>

            {/* card content */}
            <motion.div
              className="px-5 py-8 sm:p-12 lg:p-14 xl:px-8 xl:py-10 2xl:p-12 absolute z-10 top-0 left-0 w-full flex flex-col gap-3"
              variants={textVariant}
              initial="initial"
              whileInView="animate"
              // viewport={{
              //   once: true,
              // }}
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light">
                In this lootbox, you will mint{" "}
                <span className="text-yellow2 font-medium">1 random NFT</span>{" "}
                of character or sword
              </p>
              <Image
                src={"/assets/images/lootbox-text.png"}
                alt=""
                width={284}
                height={38}
              />
              <p className="font-light text-xs lg:text-sm text-[#D0D4EA]">
                Check for Katana Inu Ecosystem for Renting, Staking, our
                Marketplace or for purchasing our $Kata Token:
              </p>

              {/* ////////////////////////////////////////////// */}
              {/* content */}
              <div className="flex flex-col gap-3 md:gap-4 2xl:gap-6 pt-2">
                {/* favourite * share * affiliate */}
                <div className="flex items-center gap-2 md:gap-3 xl:gap-4">
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
                <div className="flex items-center gap-20">
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
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 mt-3">
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

                      <h4 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-[#F9C306]">
                        0.04 Ethereum{" "}
                        <span className="font-normal text-sm md:text-base lg:text-lg 2xl:text-2xl text-white">
                          (0.04 ETH)
                        </span>
                      </h4>
                    </div>
                  </div>

                  {/* minting btn */}
                  <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
                    {/* minting increase & decrease btn */}
                    <div className="p-2 rounded-full bg-[#30373F] flex items-center gap-2 lg:gap-3">
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
                      <p className="min-w-[20px] text-[#F9C306] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center">
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

                    {/* mint now btn */}
                    <button className="min-w-[170px] text-[#30373F] bg-[#F9C306] border border-[#F9C306] hover:bg-transparent hover:text-white transition duration-200 ease-in text-center text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl uppercase rounded-md  py-2 font-bold">
                      mint now!
                    </button>
                  </div>
                  {/* public sale */}
                  <div className="flex flex-col gap-3 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
                    <button className="px-3 py-2 md:px-4 lg:px-5 lg:py-3 2xl:px-6 2xl:py-4 bg-[#937300] hover:bg-[#F9C306] hover:text-[#30373F] transition duration-200 ease-in uppercase rounded-md text-white font-medium w-fit">
                      public sale
                    </button>

                    <div className="flex items-center gap-5 md:gap-8 lg:gap-10 2xl:gap-14">
                      <p className="text-sm md:text-base text-white uppercase">
                        <span className="text-[#F9C306] font-medium">
                          Price:
                        </span>{" "}
                        0.04 ETH
                      </p>
                      <p className="text-sm md:text-base text-white uppercase">
                        <span className="text-[#F9C306] font-medium">
                          Limit:
                        </span>{" "}
                        75 NFTs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ////////////////////////////////////////////// */}
            </motion.div>
          </div>
          {/* avatar */}
          <div className="lg:col-start-9 lg:col-end-13 2xl:col-start-6 text-white relative z-10 flex flex-col justify-between items-center lg:items-start">
            {avatarData.map((data, i) => (
              <motion.div
                key={i}
                variants={rightCardsVariant}
                custom={i}
                initial="initial"
                whileInView="animate"
              >
                <div
                  className={`
                   ${i === 0 ? "lg:ml-32" : i === 1 ? "lg:ml-0" : "lg:ml-32"}
                  flex flex-col justify-between`}
                >
                  <Image
                    src={data.iconLink}
                    alt="avatar"
                    width={i === 1 ? 278 : 178}
                    height={178}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* large device showing this bg character */}
        <Image
          src={"/assets/images/mint-ch.webp"}
          alt="mint character"
          width={1920}
          height={1080}
          className="absolute w-full top-0 left-0 hidden lg:block h-[600px] md:h-[600px] lg:h-auto xl:h-[880px] 2xl:h-[980px] object-cover lg:opacity-40 xl:opacity-100"
        />
      </div>
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
