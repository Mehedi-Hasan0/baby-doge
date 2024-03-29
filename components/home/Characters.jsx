"use client";

import { charactersData } from "@/data";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Characters() {
  const [imageHeight, setImageHeight] = useState(null);
  const [detailBox, setDetailBox] = useState(null);
  const [detailBoxHover, setDetailBoxHover] = useState(
    Array(charactersData.length).fill(false)
  );
  const imageRef = useRef(null);
  const detailBoxRef = useRef(null);

  const handleMouseEnter = (index) => {
    const newHoverState = [...detailBoxHover];
    newHoverState[index] = true;
    setDetailBoxHover(newHoverState);
  };

  const handleMouseLeave = (index) => {
    const newHoverState = [...detailBoxHover];
    newHoverState[index] = false;
    setDetailBoxHover(newHoverState);
  };

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.clientHeight);
    }

    if (detailBoxRef.current) {
      setDetailBox(detailBoxRef.current.clientWidth);
    }

    function resizeCheck() {
      setImageHeight(imageRef.current.clientHeight);
      setDetailBox(detailBoxRef.current.clientWidth);
    }

    window.addEventListener("resize", resizeCheck);

    return () => {
      window.removeEventListener("resize", resizeCheck);
    };
  }, [imageRef && typeof window !== "undefined" && window.innerWidth]);

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

  const characterVariant = {
    initial: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.75 },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
      },
    },
  };

  const rightCardsVariant = {
    initial: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.35 * i,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  return (
    <section className="text-white overflow-hidden bg-[url('/assets/images/banner-bg-3.webp')] bg-cover bg-center lg:pt-10">
      <div className="main-container">
        <motion.div
          className="py-8 flex flex-col justify-center items-center"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          // viewport={{
          //   once: true,
          // }}
        >
          <Image
            src={"/assets/icons/text-top-yellow.svg"}
            alt=""
            width={310}
            height={14}
          />
          <h5 className="uppercase text-base sm:text-lg md:text-xl font-bold">
            BABYDOGE
          </h5>
        </motion.div>

        {/* characters */}
        <div className="md:mt-4 lg:mt-8 2xl:mt-0 relative flex items-center w-full h-full">
          {/* <Image
            src={"/assets/images/character-bg.png"}
            alt="background frame"
            width={1525}
            height={777}
            className={`absoulute top-0 left-0 w-full z-[1]`}
          /> */}

          {/* ch - content */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-0 lg:flex z-30 w-full xl:px-20"
            variants={characterVariant}
            initial="initial"
            whileInView="animate"
            // viewport={{
            //   once: true,
            // }}
          >
            {charactersData.map((data, i) => (
              <motion.div
                key={i}
                className="w-full flex flex-col"
                variants={rightCardsVariant}
                initial="initial"
                whileInView="animate"
                custom={i}
              >
                <div
                  className={`relative w-full flex items-center justify-center`}
                  style={{ minHeight: `${imageHeight}px` }}
                >
                  <Image
                    src={data.character}
                    alt="baby doge characters"
                    width={i === 0 ? 278 : i === 1 ? 238 : i === 2 ? 731 : 377}
                    height={i === 0 ? 572 : i === 1 ? 662 : i === 2 ? 775 : 658}
                    className={`w-full aspect-square object-contain min-h-[238px] ${
                      i === 0
                        ? "w-[478px]"
                        : i === 1
                        ? "w-[438px]"
                        : i === 2
                        ? "w-[731px]"
                        : "w-[477px]"
                    }`}
                    ref={imageRef}
                  />
                </div>
                {/* w-[220px] h-[220px] 2xl:h-[300px] 2xl:w-[300px] */}
                <div
                  onMouseLeave={() =>
                    setDetailBoxHover(Array(charactersData.length).fill(false))
                  }
                  className={`-mt-16 relative z-[2] mx-auto 2xl:-mt-36 `}
                >
                  <div
                    ref={detailBoxRef}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={() => handleMouseLeave(i)}
                    className={`bg-gradient-to-b from-[#DBDBDB] to-[#DBDBDB]/0 relative min-h-[240px] min-w-[200px] flex justify-center items-center cursor-pointer ${
                      detailBoxHover[i] ? "opacity-95" : "opacity-85 "
                    }`}
                  >
                    <div className="absolute top-0 left-0 w-full h-full z-[1] blur-3xl bg-black/80" />
                    {/* bg-gradient-to-b from-[#2B2A2A]/95 to-[#000000] */}
                    <div
                      className={`min-w-[198px] min-h-[238px] flex flex-col items-center pt-7 transition-all duration-700 ease-in-out relative z-10 ${
                        detailBoxHover[i]
                          ? "hover:bg-[#482300]/85"
                          : "bg-[#000000]/80"
                      }`}
                    >
                      <p className=" tracking-widest text-xs">{data.label1}</p>
                      <p className=" font-semibold tracking-widest text-sm">
                        {data.slug1}
                      </p>
                      <p className="font-light text-xs">{data.label2}</p>
                      <p className="font-semibold text-xs">{data.slug2}</p>
                      <Image
                        src={data.badge}
                        alt="baby doge avatar"
                        width={72}
                        height={72}
                        className="mt-4"
                      />
                      <div className="absolute bottom-0 left-0 min-h-[34px] min-w-[200px] bg-gradient-to-b from-[#DBDBDB] to-[#DBDBDB]/0 flex justify-center items-center">
                        <div
                          className={`min-w-[198px] min-h-[32px] flex items-center justify-between px-2 transition-all duration-700 ease-in-out ${
                            detailBoxHover[i]
                              ? "bg-[#a92700]/60"
                              : "bg-[#000000]/80"
                          }`}
                        >
                          <Image
                            src={data.footerIcon}
                            alt=""
                            width={28}
                            height={28}
                          />
                          <p className="text-xs">{data.footerLabel}</p>
                        </div>
                      </div>
                    </div>
                    {/* // title // */}
                    <div
                      className={`absolute -top-4 bg-[#f0f0f0] border border-white z-10`}
                      style={{ left: `${Math.floor(detailBox / 4.5)}px` }}
                    >
                      <p className="text-black py-1 px-6 font-semibold text-xs sm:text-sm">
                        {data.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
