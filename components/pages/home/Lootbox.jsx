"use client";

import Image from "next/image";
import LootboxButton from "./LootBoxButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { lootboxData } from "@/data";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Lootbox() {
  const [imgParentHover, setImageParentHover] = useState(
    Array(lootboxData.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const newHoverState = [...imgParentHover];
    newHoverState[index] = true;
    setImageParentHover(newHoverState);
  };

  const handleMouseLeave = (index) => {
    const newHoverState = [...imgParentHover];
    newHoverState[index] = false;
    setImageParentHover(newHoverState);
  };

  return (
    <div
      onMouseLeave={() =>
        setImageParentHover(Array(lootboxData.length).fill(false))
      }
      className="text-white section-padding overflow-hidden bg-[url('/assets/images/banner-bg-2.webp')] bg-cover bg-center"
    >
      <div className="main-container">
        <div className="flex flex-col justify-center items-center">
          <h2 className=" flex items-center gap-1 sm:gap-5 text-xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-medium whitespace-nowrap">
            <span className="text-yellow2">Katana Inu</span>
            <Image
              src={"/assets/icons/x-shape.svg"}
              alt=""
              width={42}
              height={46}
              className="w-7 sm:w-11"
            />
            <span className="text-yellowRed">Baby Doge Loot Box</span>
          </h2>
        </div>

        {/* content */}
        <div className="mt-8 sm:mt-10 md:mt-12 xl:mt-14 2xl:mt-16 flex flex-col lg:flex-row gap-8 xl:gap-16 2xl:mx-32 loot-box-container">
          {/* left card */}
          <div className="flex flex-col justify-center items-center text-white relative">
            <Image
              src={"/assets/images/card-frame.webp"}
              alt="card frame"
              width={826}
              height={703}
              className="relative w-full xl:w-[526px] 2xl:w-[600px] z-10 lg:w-[454px] card-frame h-[670px] lg:h-auto"
            />
            {/* card content */}
            <div className="px-8 py-12 sm:p-12 lg:p-14 xl:p-16 absolute z-30 top-0 left-0 w-full flex flex-col gap-7 2xl:gap-12">
              <h4 className="font-bold text-3xl">
                Get your <span className="text-yellow2">whitelist</span> spot
                now!
              </h4>
              <div className="bg-[#434343]/40 border border-[#ffffff]/50 text-sm md:text-base lg:text-lg rounded-[6px] px-6 py-3">
                <span className="text-yellow2 font-semibold">Supply:</span>{" "}
                10,000 Loot Boxes
              </div>
              <p className="text-sm md:text-base lg:text-lg max-w-[324px] pl-7">
                Each Loot Box includes a Baby DogeCharacter and a Weapon NFT
              </p>
              <div className="bg-[#434343]/40 border border-[#ffffff]/50 text-sm md:text-base lg:text-lg rounded-[6px] px-6 py-3">
                <span className="text-yellow2 font-semibold">Price:</span> $15
                for whitelisted Wallets
              </div>
              <p className="text-sm md:text-base lg:text-lg max-w-[324px] pl-7">
                $20 for non-whitelisted Wallets
              </p>
              <div className="flex items-center gap-4 w-full">
                <div className="bg-[#434343]/40 border border-[#ffffff]/50 text-sm md:text-base lg:text-lg rounded-[6px] px-6 py-3 flex-1">
                  <span className="text-yellow2 font-semibold uppercase">
                    chain:
                  </span>{" "}
                  BNB
                </div>
                <div className="bg-[#434343]/40 border border-[#ffffff]/50 text-sm md:text-base lg:text-lg rounded-[6px] px-6 py-3 flex-1">
                  <span className="text-yellow2 font-semibold capitalize">
                    Mint date:
                  </span>{" "}
                  TBA
                </div>
              </div>
            </div>

            {/* footer btn */}
            <div className="absolute bottom-8 xl:bottom-20">
              <Button className="bg-gradient-to-b from-[#FFEE55] to-[#FF9900] rounded-none overflow-hidden banner-btn min-w-[209px] min-h-[40px] flex justify-center items-center font-semibold relative transition-all duration-500 ease-in-out opacity-90 hover:opacity-100 cursor-pointer z-20">
                <Link
                  href="#"
                  className="w-full h-full uppercase text-yellowDarkRed leading-[1.9] relative z-20"
                >
                  whitelist now
                </Link>
                <Image
                  src={"/assets/icons/btn-shape.svg"}
                  width={209}
                  height={40}
                  alt="shape"
                  className="absolute bottom-0 z-10"
                />
              </Button>
            </div>
            {/* glow */}
            <Image
              src={"/assets/icons/glow.svg"}
              alt=""
              width={1509}
              height={80}
              className="absolute bottom-5 xl:bottom-16"
            />
          </div>

          {/* right cards */}
          <div
            onMouseLeave={() =>
              setImageParentHover(Array(lootboxData.length).fill(false))
            }
            className="flex flex-col justify-between gap-5 flex-1 relative z-20 w-full lg:max-w-[715px]"
          >
            {lootboxData.map((data, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 sm:grid-cols-10 cursor-pointer`}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                <div
                  className={` ${
                    i === 0
                      ? "sm:col-start-3 sm:col-span-8"
                      : i === 1
                      ? "sm:col-start-2 sm:col-span-9"
                      : i === 2
                      ? "sm:col-start-1 sm:col-span-10"
                      : i === 3
                      ? "sm:col-start-2 sm:col-span-9"
                      : "sm:col-start-3 sm:col-span-8"
                  }`}
                >
                  <div
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={() => handleMouseLeave(i)}
                    className={`flex items-center gap-1 xl:gap-3`}
                  >
                    {/* polygon shap */}
                    <div className="outer-polygon w-[100px] sm:w-[120px] lg:w-[104px] xl:w-[137px] aspect-square bg-[#A6A6A6]/10 p-3 flex justify-center items-center relative">
                      <div className="outer-polygon bg-[#D9D9D9]/5 w-[70px] sm:w-[100px] lg:w-[70px] xl:w-[104px] aspect-square">
                        <div
                          className={`w-full h-full bg-[#D9D9D9]/5 flex justify-center items-center cursor-pointer transition-all duration-700 ease-in-out ${
                            imgParentHover[i] ? "grayscale-0" : "grayscale"
                          }`}
                        >
                          <Image
                            src={data.iconPath}
                            alt={`loot box icon ${i + 1}`}
                            width={47}
                            height={50}
                            className="w-9 xl:w-12 relative z-20"
                          />
                        </div>
                      </div>
                    </div>
                    {/* right content */}

                    <div
                      onMouseEnter={() => handleMouseEnter(i)}
                      className="flex flex-col gap-2 w-fit"
                    >
                      <div
                        className={` ${
                          imgParentHover[i]
                            ? "bg-[url('/assets/icons/lootbox/loot-text-bg-grad.png')]"
                            : " bg-[url('/assets/icons/lootbox/loot-text-bg.png')]"
                        } transition-all duration-700 ease-in-out bg-cover mr-1 max-w-[318px]`}
                      >
                        <p
                          className={`py-2 text-black text-nowrap text-[10px] sm:text-sm ml-2 xl:ml-4 font-bold ${
                            imgParentHover[i] ? "text-white" : "text-black "
                          } transition-all duration-500 ease-in-out`}
                        >
                          {data.title}
                        </p>
                      </div>
                      <p
                        className={`text-xs sm:text-base lg:text-lg font-medium max-w-[326px] text-white xl:ml-6 ${
                          imgParentHover[i] ? "text-yellow2" : "text-white "
                        } transition-all duration-500 ease-in-out`}
                      >
                        {data.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
