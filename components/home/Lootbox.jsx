"use client";

import Image from "next/image";
import LootboxButton from "./LootBoxButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { lootboxData } from "@/data";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CustomButtonVariant1 from "../ui/CustomButtonVariant1";
import { Modal, ModalContent, ModalTrigger } from "../ui/modal";
import ShortBorder from "../shared/SortBorder";
import WhitelistButton from "../shared/WhitelistButton";

export default function Lootbox() {
  const [imgParentHover, setImageParentHover] = useState(
    Array(lootboxData.length).fill(false)
  );
  const mainContentRef = useRef(null);
  const [mainContentWidth, setMainContentWidth] = useState(null);
  const [mainContentHeight, setMainContentHeight] = useState(null);

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

  const textVariant = {
    initial: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.75 },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75 },
    },
  };

  const cardVariant = {
    initial: {
      opacity: 0,
      x: -30,
      transition: { duration: 1.25 },
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.25 },
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
        delay: 0.15 * i,
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

  return (
    <div
      onMouseLeave={() =>
        setImageParentHover(Array(lootboxData.length).fill(false))
      }
      className="text-white section-padding overflow-hidden bg-[url('/assets/images/banner-bg-2.webp')] bg-cover bg-center relative"
    >
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
        className="bg-gradient-to-b from-black/40 2xl:from-black/50 2xl:to-black to-black z-[1] absolute"
        style={{
          width: `${mainContentWidth}px`,
          height: `${mainContentHeight}px`,
        }}
      />
      {/* right frame overlay */}
      <div
        className="bg-[url('/assets/images/lootCard-frame.png')] w-[50%] absolute z-[2] right-0 top-10 bg-no-repeat hidden lg:block"
        style={{
          height: `${mainContentHeight}px`,
        }}
      />

      {/* main content */}
      <div ref={mainContentRef} className="relative z-10">
        {/* content */}
        <div className="sm:mt-10 md:mt-12 xl:mt-14 2xl:mt-16 flex flex-col lg:flex-row gap-8 xl:gap-16 loot-box-container">
          <div className="flex flex-col gap-2 lg:w-[48%] px-6 sm:px-10 md:px-12 lg:pl-16 lg:px-0">
            <motion.div
              className="flex flex-col justify-center items-center"
              variants={textVariant}
              initial="initial"
              whileInView="animate"
              // viewport={{
              //   once: true,
              // }}
            >
              <h2 className=" flex items-center gap-1 sm:gap-5 text-2xl sm:text-3xl lg:text-[28px] xl:text-4xl 2xl:text-5xl font-khand my-8">
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
            </motion.div>
            {/* left card */}
            <motion.div
              className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 justify-center items-center text-white relative"
              variants={cardVariant}
              initial="initial"
              whileInView="animate"
              // viewport={{
              //   once: true,
              // }}
            >
              {/* video player */}

              <video
                src="http://res.cloudinary.com/dlhexsnxq/video/upload/v1709961388/bannerbg_xgkahv.mp4"
                autoPlay
                muted
                loop
                poster="/assets/images/thumbnail2.png"
                width={"100%"}
                height={"100%"}
                className="object-cover aspect-video max-h-[350px]"
              />

              {/* white list btn */}
              <WhitelistButton isFullWidth={false} />

              {/* left card character for mobile */}
              <div className="relative">
                <Image
                  src={"/assets/images/lootBox-ch.png"}
                  alt="babydoge character"
                  width={995}
                  height={315}
                  className="w-[400px] sm:w-full min-h-[250px] object-cover sm:object-contain z-[1] block lg:hidden"
                />
                {/* bg overlay */}
                <div className="w-full h-1/2 absolute bottom-0 z-[2] bg-gradient-to-b from-transparent to-black" />
              </div>
            </motion.div>
          </div>

          {/* right cards */}
          <div
            onMouseLeave={() =>
              setImageParentHover(Array(lootboxData.length).fill(false))
            }
            className="flex-1 relative z-20 lg:max-w-[715px] lg:w-[50%] py-8 lg:py-0  px-6 sm:px-10 md:px-12 lg:pr-16 lg:px-0"
          >
            <div className="flex flex-col justify-between gap-5 ">
              <h4 className="font-jost font-semibold italic text-xl sm:text-sxl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px] uppercase text-yellow2 my-2 lg:my-8 text-center relative z-10">
                utilities
              </h4>
              {lootboxData.map((data, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 sm:grid-cols-10 cursor-pointer relative z-10`}
                  onMouseLeave={() => handleMouseLeave(i)}
                >
                  <motion.div
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
                    variants={rightCardsVariant}
                    custom={i}
                    initial="initial"
                    whileInView="animate"
                    // viewport={{
                    //   once: true,
                    // }}
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
                          className={`text-xs sm:text-base xl:text-lg font-medium max-w-[326px] text-white xl:ml-6 ${
                            imgParentHover[i] ? "text-yellow2" : "text-white "
                          } transition-all duration-500 ease-in-out`}
                        >
                          {data.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* overlay frame for small device */}
            <div className="w-full h-full absolute top-0 left-0 z-[2] bg-[url('/assets/images/lootCard-frame.png')] block lg:hidden" />
          </div>
        </div>
      </div>
      {/* left card character */}
      <Image
        src={"/assets/images/lootBox-ch.png"}
        alt="babydoge character"
        width={995}
        height={315}
        className="absolute w-1/2 xl:w-[57%] 2xl:w-1/2 min-h-[240px] xl:min-h-[320px] bottom-0 left-0 lg:object-cover 2xl:object-contain z-[1] hidden lg:block"
      />

      {/* border top */}
      <div className="absolute w-[10%] h-[3px] bg-yellow2 top-8 lg:top-0 left-0" />
    </div>
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
