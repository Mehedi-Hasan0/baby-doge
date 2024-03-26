"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function LootBoxDetails() {
  const [imageHeight, setImageHeight] = useState(null);

  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.clientHeight);
    }

    function resizeCheck() {
      setImageHeight(imageRef.current.clientHeight);
    }

    window.addEventListener("resize", resizeCheck);

    return () => {
      window.removeEventListener("resize", resizeCheck);
    };
  }, [imageRef && typeof window !== "undefined" && window.innerWidth]);

  const buttonRefs = useRef(null);

  const handleBlobMoving = (e, btnRef) => {
    if (btnRef.current) {
      let x = e.pageX - btnRef.current.offsetLeft;
      let y = e.pageY - btnRef.current.offsetTop;

      btnRef.current.style.setProperty("--x", x + "px");
      btnRef.current.style.setProperty("--y", y + "px");
    }
  };

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
    <section className="text-white section-padding overflow-hidden bg-[url('/assets/images/banner-bg-4.webp')] bg-cover bg-center min-h-[1000px] my-8">
      <div className="main-container">
        <motion.div
          className="flex flex-col justify-center items-center"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          // viewport={{
          //   once: true,
          // }}
        >
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
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-8 max-w-[1077px] mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          {/* left card */}
          <motion.div
            className="flex flex-col justify-center items-center relative"
            style={{ minHeight: `${imageHeight}` }}
            variants={CardVariant}
            initial="initial"
            whileInView="animate"
            // viewport={{
            //   once: true,
            // }}
          >
            <Image
              src={"/assets/images/card-frame.webp"}
              alt="card frame"
              width={493}
              height={657}
              className="relative z-[1] h-[600px] md:h-[600px] lg:h-auto"
              ref={imageRef}
            />

            {/* card content */}
            <div className="px-8 py-12 sm:p-12 lg:p-14 xl:p-16 absolute z-10 top-0 left-0 w-full flex flex-col gap-7 xl:gap-16">
              <p className="text-base lg:text-lg xl:text-xl text-center leading-loose">
                <span className="text-yellow2 font-bold">1 Mint =</span>
                <span className="font-bold">
                  {" "}
                  1 Character 1 Sword
                </span> <br /> Mint more to get higher chance for higher
                rarities!
              </p>
              <p className="text-base lg:text-lg xl:text-xl text-center leading-loose">
                <span className="text-yellow2 font-bold">Mint </span> <br />
                NFT And get a random skin or sword. Mint more to get better
                chance.
              </p>
              <p className="text-base lg:text-lg xl:text-xl text-center leading-loose">
                <span className="text-yellow2 font-bold">Mint </span> <br />
                NFT And get a random skin or sword. Mint more to get better
                chance.
              </p>
            </div>

            {/* card footer btn */}
            <div className="absolute bottom-10 flex flex-col justify-center items-center gap-4 ">
              {/* <Button className="uppercase rounded-none min-w-[260px]">
                Mint Soon
              </Button> */}
              {buttonData.map((btn, i) => (
                <div
                  key={i}
                  className={`${btn.parentBorderColor} min-w-[260px] overflow-hidden blob relative`}
                  ref={buttonRefs}
                  style={{ "--clr": `${btn.blobColor}` }}
                  onMouseMove={(e) => {
                    handleBlobMoving(e, buttonRefs);
                  }}
                >
                  <Button
                    className={`${btn.buttonBgColor} font-bold m-[2px] rounded-none overflow-hidden banner-btn`}
                  >
                    <Link href={btn.link} className="relative z-20 w-full">
                      {btn.label}
                    </Link>
                  </Button>
                </div>
              ))}
              <p>Supported by</p>
            </div>
          </motion.div>
          {/* right card */}
          <motion.div
            className="flex flex-col justify-center items-center relative"
            variants={CardVariant}
            initial="initial"
            whileInView="animate"
            // viewport={{
            //   once: true,
            // }}
          >
            <Image
              src={"/assets/images/card-frame.webp"}
              alt="card frame"
              width={493}
              height={657}
              className="relative z-[1]  h-[600px] md:h-[600px] lg:h-auto"
            />
            {/* card content */}
            <div className="px-8 py-12 sm:p-12 lg:p-14 xl:p-16 absolute z-10 top-0 left-0 w-full flex flex-col justify-evenly lg:justify-between gap-7 lg:gap-20 xl:gap-16 h-full lg:h-auto">
              <p className="text-base leading-loose lg:text-lg lg:leading-relaxed xl:text-xl xl:leading-relaxed">
                We have designed the special In-game character to show our
                tribute to the great Baby Doge community and now the community
                members can also claim one of their own through our NFT
                collection. These characters can be used as in-game skins and
                will have several different variations.
              </p>
              <p className="text-base leading-loose lg:text-lg lg:leading-relaxed xl:text-xl xl:leading-relaxed">
                Once you mint a Loot Box, you will get a Character and you will
                get an additional free Weapon NFT. <br />
                <span className="text-yellow2 font-bold">
                  For the price of one Loot Box, you will get 2 NFTs!
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export const buttonData = [
  {
    label: "MINT SOON",
    link: "#",
    parentBorderColor: "bg-gradient-to-b from-[#C8AA6E] to-[#7A5C29]",
    buttonBgColor: "bg-gradient-to-b from-[#FFC7004D] to-[#FFC70000]",
    blobColor: "#FFC7004D",
  },
];
