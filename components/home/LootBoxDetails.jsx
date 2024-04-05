"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomButtonVariant1 from "../ui/CustomButtonVariant1";
import WhitelistButton from "../shared/WhitelistButton";

export default function LootBoxDetails() {
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

  const CardVariant = {
    initial: {
      opacity: 0.5,
      y: 30,
      transition: { duration: 0.9 },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    },
  };

  return (
    <section className="text-white overflow-hidden bg-[url('/assets/images/4th-sec-banner.webp')] bg-cover bg-center lg:my-8 lg:pt-0 xl:pt-8 2xl:pt-10 relative">
      {/* left side lines */}
      <div className="bg-[url('/assets/icons/leftLines.svg')] bg-cover absolute top-0 left-0 min-w-[778px] min-h-[900px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[1000px] z-[2] opacity-10" />
      {/* right side lines */}
      <div className="bg-[url('/assets/icons/rightLines.svg')] bg-cover absolute top-0 right-0 min-w-[778px] min-h-[900px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[1000px] z-[2] opacity-10" />

      {/* left frame overlay */}
      <div className="bg-[url('/assets/images/lootCard-frame.png')] w-[50%] h-full absolute z-[2] left-0 top-0 bg-cover bg-no-repeat hidden lg:block" />

      {/* main content */}
      <div className="">
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-8 mx-auto lg:mt-8">
          {/* left card */}
          <div className="relative lg:z-10 px-6 sm:px-10 md:px-12 lg:px-0 lg:pl-16 w-full lg:w-1/2 flex justify-center items-center pt-8 sm:pt-10 lg:pt-0">
            <div className="flex flex-col justify-center items-center w-full md:w-3/4 lg:w-full relative z-10 lg:pr-4 xl:pr-16">
              <h2 className=" flex items-center gap-1 sm:gap-5 text-2xl sm:text-3xl lg:text-[28px] xl:text-4xl 2xl:text-5xl font-khand my-6 xl:my-8">
                <span className="text-white">Katana Inu</span>
                <Image
                  src={"/assets/icons/x-shape.svg"}
                  alt=""
                  width={42}
                  height={46}
                  className="w-7 sm:w-11"
                />
                <span className="text-yellow2">BabyDoge</span> Loot Box
              </h2>
              {/*  */}
              <div className="mt-5 md:mt-4 2xl:mt-9 w-full">
                <div className="flex flex-col gap-7">
                  {/*  */}
                  <div className="flex flex-col gap-4">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-light text-white/70">
                      Get your whitelist spot now!
                    </p>
                    <div className="border border-white bg-[#434343]/40 w-full">
                      <p className="py-4 px-8 lg:px-4 xl:px-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ">
                        <span className="text-yellow2 font-bold">Supply:</span>{" "}
                        10,000 Loot Boxes
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-4">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-light text-white/70 max-w-[335px]">
                      Each Loot Box includes a Baby DogeCharacter and a Weapon
                      NFT
                    </p>
                    <div className="border border-white bg-[#434343]/40">
                      <p className="py-4 px-8 lg:px-4 xl:px-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        <span className="text-yellow2 font-bold">Price:</span>{" "}
                        $15 for whitelisted Wallets
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-4">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-light text-white/70 max-w-[335px]">
                      $20 for non-whitelisted Wallets
                    </p>
                    <div className="flex items-center gap-4 xl:gap-8 2xl:gap-20 w-full">
                      <div className="border border-white bg-[#434343]/40 flex-1">
                        <p className="py-4 px-8 lg:px-4 xl:px-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                          <span className="text-yellow2 font-bold">CHAIN:</span>{" "}
                          BNB
                        </p>
                      </div>
                      {/*  */}
                      <div className="border border-white bg-[#434343]/40 flex-1">
                        <p className="py-4 px-8 lg:px-4 xl:px-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                          <span className="text-yellow2 font-bold">
                            Mint Date:
                          </span>{" "}
                          TBA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="mt-8 md:mt-10 2xl:mt-16 w-full flex flex-col justify-center items-center max-w-[670px] gap-7">
                {/*  */}
                <div className="flex flex-col items-center">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold">
                    <span className="text-yellow2">1 Mint =</span> 1 Character 1
                    Sword
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center">
                    Mint more to get higher chance for higher rarities!
                  </p>
                </div>
                {/*  */}
                <div className="flex flex-col items-center">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold text-yellow2">
                    Mint NFT
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center">
                    And get a random skin or sword. Mint more to get better
                    chance.
                  </p>
                </div>
                {/*  */}
                <div className="py-5 xl:py-9">
                  <WhitelistButton isFullWidth={false} />
                </div>
              </div>
            </div>

            {/* overlay frame for small device */}
            <div className="w-full h-full absolute top-0 left-0 z-[2] bg-[url('/assets/images/lootCard-frame.png')] block lg:hidden" />
          </div>

          {/* right card */}
          <div className="w-full lg:w-[50%] xl:w-[45%] px-6 sm:px-10 md:px-12 lg:pr-16 flex flex-col items-center gap-8 sm:gap-20 md:gap-32 pt-20 lg:pt-0 md:mt-16 justify-evenly">
            {/* 1st card */}
            <div className="bg-[url('/assets/images/loot-box-detail-card-frame.png')]  bg-contain sm:bg-contain bg-no-repeat min-w-[340px] sm:min-w-[550px] md:min-w-[673px] lg:min-w-[460px] xl:min-w-[580px] xl:min-h-[300px] 2xl:min-w-[673px] 2xl:h-[261px] relative">
              <p className="text-white/70 text-xs sm:text-base md:text-xl lg:text-base py-8 px-5 sm:py-12 sm:px-10 md:py-12 md:px-10 lg:py-7 lg:px-6 xl:py-12 xl:px-10 2xl:py-16 2xl:px-14 max-w-[250px] sm:max-w-[390px] md:max-w-[398px] lg:max-w-[350px] xl:max-w-[398px] relative z-10 bottom-2 sm:bottom-3">
                We have designed the special In-game character to show our
                tribute to the great Baby Doge community and now the community
                members can also claim one of their own through our NFT
                collection.
              </p>
              <Image
                src={"/assets/images/lootbox-detail-ch-1.webp"}
                alt=""
                width={600}
                height={487}
                className="absolute z-[2] w-[500px] -bottom-10 -right-16 sm:w-[600px] sm:-bottom-20 sm:-right-28 md:-bottom-28 md:-right-28 md:w-[700px] lg:w-[400px] lg:-bottom-10 lg:-right-20 xl:w-[500px] xl:bottom-0 xl:-right-16 2xl:-bottom-28 2xl:-right-28 2xl:w-[700px]"
              />
            </div>
            {/* 2nd card */}
            <div className="bg-[url('/assets/images/loot-box-detail-card-frame.png')]  bg-contain sm:bg-contain bg-no-repeat min-w-[340px] sm:min-w-[550px] md:min-w-[673px] lg:min-w-[460px] xl:min-w-[580px] xl:min-h-[300px] 2xl:min-w-[673px] 2xl:h-[261px] relative">
              <p className="text-white/70 text-xs sm:text-base md:text-xl lg:text-base py-8 px-5 sm:py-12 sm:px-10 md:py-12 md:px-10 lg:py-7 lg:px-6 xl:py-12 xl:px-10 2xl:py-16 2xl:px-14 max-w-[250px] sm:max-w-[390px] md:max-w-[398px] lg:max-w-[350px] xl:max-w-[398px] relative z-10 bottom-2 sm:bottom-3">
                Once you mint a Loot Box, you will get a Character and you will
                get an additional free Weapon NFT.
                <br />
                <span className="text-yellow2">
                  For the price of one Loot Box, you will get 2 NFTs!
                </span>
              </p>
              <Image
                src={"/assets/images/lootbox-detail-ch-2.webp"}
                alt=""
                width={600}
                height={487}
                className="absolute z-[2] w-[200px] -bottom-10 -right-14 sm:w-[350px] sm:-bottom-20 sm:-right-28 -md:-bottom-16 md:-right-28 md:w-[400px] lg:w-[260px] lg:-bottom-16 lg:-right-20 xl:w-[370px] xl:-bottom-5 xl:-right-20 2xl:-bottom-16 2xl:-right-28 2xl:w-[460px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* border-top */}
      <div className="w-[10%] h-[3px] bg-yellow2 absolute top-0 left-0 z-10" />
    </section>
  );
}

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
