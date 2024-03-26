"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Ecosystem() {
  const buttonRefs = buttonData.map(() => useRef(null));
  const handleBlobMoving = (e, btnRef) => {
    if (btnRef.current) {
      let x = e.pageX - btnRef.current.offsetLeft;
      let y = e.pageY - btnRef.current.offsetTop;

      btnRef.current.style.setProperty("--x", x + "px");
      btnRef.current.style.setProperty("--y", y + "px");
    }
  };

  return (
    <section className="text-white overflow-hidden lg:bg-[url('/assets/images/banner-bg-7.png')] bg-cover bg-center md:min-h-[500px] lg:min-h-[700px] 2xl:min-h-[800px] sec-7-container">
      <div className="main-container relative">
        <div className="md:bg-[url('/assets/images/sec-7-ch.png')] bg-contain bg-no-repeat w-[800px] lg:w-full md:min-h-[700px] lg::min-h-[984px] absolute top-0 -right-16 lg:right-0 z-[1]" />
        {/* content */}
        <div className="bg-[url('/assets/images/section-7-frame.svg')] bg-cover bg-no-repeat w-full max-h-[984px] px-8 py-10 md:p-14 lg:p-16 xl:p-20 mx-auto relative z-[2] flex md:block justify-center items-center">
          <div className=" flex flex-col gap-6 md:gap-8 justify-center items-center md:justify-start md:items-start">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Katana Inu is a{" "}
              <span className="text-yellow2">
                MMO NFT <br /> PC Game
              </span>
            </h4>

            <Image
              src={"/assets/icons/line.svg"}
              alt=""
              width={550}
              height={2}
            />
            <p className="text-xs sm:text-sm md:text-base">
              Check for Katana Inu Ecosystem for Renting, Staking, our <br />
              Marketplace or for purchasing our $Kata Token:
            </p>

            {/* btn */}
            <div className="flex flex-col gap-4">
              {buttonData.map((btn, i) => (
                <div key={i} className={`${btn.parentBorderColor} w-[250px]`}>
                  <Button
                    ref={buttonRefs[i]}
                    style={{ "--clr": `${btn.blobColor}` }}
                    onMouseMove={(e) => {
                      handleBlobMoving(e, buttonRefs[i]);
                    }}
                    className={`${btn.buttonBgColor} w-full m-[2px] rounded-none font-medium blob relative overflow-hidden banner-btn`}
                  >
                    <Link
                      href={btn.link}
                      className="relative z-20 w-full text-xs sm:text-sm md:text-base"
                    >
                      {btn.label}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const buttonData = [
  {
    label: "Kainu.io",
    link: "#",
    parentBorderColor: "bg-gradient-to-b from-[#C7C7C7] to-[#4B4B4B]",
    buttonBgColor: "bg-gradient-to-b from-[#C7C7C74D] to-[#BBBBBB00]",
    blobColor: "#C7C7C74D",
  },
  {
    label: "Buy $kata token",
    link: "#",
    parentBorderColor: "bg-gradient-to-b from-[#C7C7C7] to-[#4B4B4B]",
    buttonBgColor: "bg-gradient-to-b from-[#C7C7C74D] to-[#BBBBBB00]",
    blobColor: "#C7C7C74D",
  },
  {
    label: "Play Katanainu",
    link: "#",
    parentBorderColor: "bg-gradient-to-b from-[#C8AA6E] to-[#7A5C29]",
    buttonBgColor: "bg-gradient-to-b from-[#FFC7004D] to-[#FFC70000]",
    blobColor: "#FFC7004D",
  },
];
