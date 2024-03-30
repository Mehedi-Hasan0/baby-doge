"use client";

import Image from "next/image";
import CustomButtonVariant1 from "../ui/CustomButtonVariant1";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const BannerButton = () => {
  const buttonVariantRef = useRef(null);
  const [butttonHeight, setButttonHeight] = useState(null);

  // getting rendered navbar button height and set to a variable for positioning inner content
  useEffect(() => {
    if (buttonVariantRef.current) {
      setButttonHeight(buttonVariantRef.current.clientHeight);
    }

    function resizeCheck() {
      setButttonHeight(buttonVariantRef.current.clientHeight);
    }

    window.addEventListener("resize", resizeCheck);

    return () => {
      window.removeEventListener("resize", resizeCheck);
    };
  }, [buttonVariantRef && typeof window !== "undefined" && window.innerWidth]);
  return (
    <>
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
        />
      ))}

      <div className="flex flex-row items-center mt-5 md:mt-8 2xl:mt-16 gap-6">
        {/* katana logo */}
        {logoData.map((data, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-4"
          >
            <Image
              src={data.icon}
              alt="katan Inu logo"
              width={62}
              height={62}
              className="aspect-square object-contain"
            />
            {/* /////////////////// BTN //////////////////// */}
            <div className="relative p-1 min-h-[42px] min-w-[155px] flex justify-center items-center">
              {/* left lines/border */}
              <div className=" absolute left-0 top-0 h-full min-h-[42px] w-full flex flex-col">
                <div className="w-[1px] h-full bg-[#f1f1f1]" />
                <div className="w-[1px] min-h-[5px] bg-transparent" />
                <div className="w-[1px] h-full bg-[#f1f1f1]" />
              </div>
              {/* top line */}
              <div
                className="h-[1px] absolute top-0 bg-[#f1f1f1]"
                style={{
                  width: "calc(100% - 8px)",
                }}
              />
              {/* bottom line */}
              <div
                className="h-[1.5px] absolute bottom-0 bg-[#a1a1a1]"
                style={{
                  width: "calc(100% - 8px)",
                }}
              />
              {/* right lines/border */}
              <div
                className="w-[1.5px] absolute top-0 right-0 flex flex-col justify-between"
                style={{ height: `${butttonHeight + 6}px` }}
              >
                <div
                  className="w-[1.5px]  bg-[#f1f1f1]"
                  style={{ height: `${butttonHeight / 2 - 2}px` }}
                />
                <div className="w-[1.5px] min-h-[4px] bg-transparent" />
                <div
                  className="w-[1.5px] bg-[#f1f1f1]"
                  style={{ height: `${butttonHeight / 2 - 2}px` }}
                />
              </div>
              {/* original button inner style element content*/}
              <div className=" relative w-full h-full">
                {/* left top qube */}
                <div className="bg-black w-[6px] h-[6px] absolute top-0 left-0 z-10" />
                {/* middle line */}
                <div
                  className={`absolute left-0 w-[7px] h-[3px] z-10 transition duration-300 ease-in middle-qube`}
                  style={{
                    top: `${butttonHeight / 2 - 1}px`,
                    "--elemClr": "#ffffff",
                    "--hoverElemClr": "#000000",
                  }}
                />
                {/* right bottom qube */}
                <div
                  className={`w-[6px] h-[6px] absolute bottom-0 right-0 z-10 transition duration-300 ease-in  right-bottom-qube`}
                  style={{
                    "--elemClr": "#ffffff",
                    "--hoverElemClr": "#000000",
                  }}
                />

                {/* button content */}
                <Link
                  ref={buttonVariantRef}
                  href={"#"}
                  className="w-full flex justify-center items-center"
                >
                  <Button
                    variant="customAnimated"
                    style={{
                      "--gradClr": "#FFD026",
                      "--hoverClr": "#000000",
                    }}
                    className={`w-full h-5 uppercase font-extrabold rounded-none bg-[#1a1a1a] text-sm text-[#ffffff]`}
                  >
                    {data.textLabel}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BannerButton;

const logoData = [
  {
    icon: "/assets/images/katanaLogo.webp",
    textLabel: "Kataninu",
  },
  {
    icon: "/assets/images/baby-doge-logo.png",
    textLabel: "babydoge",
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
