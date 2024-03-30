"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import Link from "next/link";

// bgVariantType => depending on variant props bg color will change
export default function CustomButtonVariant1({
  textLabel,
  bgColor,
  bgVariantType,
  hoverTextColor,
  elementColor,
  hoverElementColor,
  showFullLines,
  innerBtnPadding,
  textColor = "#000",
  textSize = "text-sm",
  btnWidth = "155px",
  btnHeight = "42px",
  lineWidth = "148px",
  lineHeight = "42px",
  subLineHeight = "19px",
  isFullWidth = false,
}) {
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
    <div
      className={`relative p-1 min-h-[42px] flex justify-center items-center ${
        isFullWidth ? "w-full" : "min-w-[155px] max-w-[280px]"
      }`}
    >
      {/* left lines/border */}
      <div className=" absolute left-0 top-0 h-full min-h-[42px] w-full flex flex-col">
        <div className="w-[1px] h-full bg-[#f1f1f1]" />
        <div className="w-[1px] min-h-[5px] bg-transparent" />
        <div className="w-[1px] h-full bg-[#f1f1f1]" />
      </div>
      {showFullLines && (
        <>
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
        </>
      )}
      {/* original button inner style element content*/}
      <div className=" relative w-full h-full">
        {/* left top qube */}
        <div className="bg-black w-[6px] h-[6px] absolute top-0 left-0 z-10" />
        {/* middle line */}
        <div
          className={`absolute left-0 w-[7px] h-[3px] z-10 transition duration-300 ease-in middle-qube`}
          style={{
            top: `${butttonHeight / 2 - 1}px`,
            "--elemClr": `${elementColor}`,
            "--hoverElemClr": `${hoverElementColor}`,
          }}
        />
        {/* right bottom qube */}
        <div
          className={`w-[6px] h-[6px] absolute bottom-0 right-0 z-10 transition duration-300 ease-in  right-bottom-qube`}
          style={{
            "--elemClr": `${elementColor}`,
            "--hoverElemClr": `${hoverElementColor}`,
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
              "--gradClr": `${bgVariantType}`,
              "--hoverClr": `${hoverTextColor}`,
            }}
            className={`w-full h-5 uppercase font-extrabold rounded-none bg-[${bgColor}] ${textSize} ${innerBtnPadding} text-[${textColor}]`}
          >
            {textLabel}
          </Button>
        </Link>
      </div>
    </div>
  );
}
