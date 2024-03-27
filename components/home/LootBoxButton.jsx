"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";

const LootboxButton = () => {
  const buttonRefs = useRef(null);

  const handleBlobMoving = (e, btnRef) => {
    if (btnRef.current) {
      let x = e.pageX - btnRef.current.offsetLeft;
      let y = e.pageY - btnRef.current.offsetTop;

      btnRef.current.style.setProperty("--x", x + "px");
      btnRef.current.style.setProperty("--y", y + "px");
    }
  };

  return (
    <div className="grid grid-cols-6 gap-3 max-w-[320px] md:max-w-[400px] mt-5 lg:mt-0 2xl:mt-3">
      {buttonData.map((btn, i) => (
        <div
          key={i}
          className={`${btn.parentBorderColor} ${
            i === 0
              ? "col-start-1 col-span-6"
              : i === 1
              ? "col-start-1 col-end-4"
              : "col-start-4 col-end-7"
          }  overflow-hidden blob relative`}
          ref={buttonRefs}
          style={{ "--clr": `${btn.blobColor}` }}
          onMouseMove={(e) => {
            handleBlobMoving(e, buttonRefs);
          }}
        >
          <Button
            className={`${btn.buttonBgColor} ${
              i === 0 ? "font-bold" : ""
            }  m-[2px] rounded-none  italic  overflow-hidden banner-btn`}
          >
            <Link href={btn.link} className="relative z-20 w-full">
              {btn.label}
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default LootboxButton;

export const buttonData = [
  {
    label: "WHITELIST NOW",
    link: "#",
    parentBorderColor: "bg-gradient-to-b from-[#C8AA6E] to-[#7A5C29]",
    buttonBgColor: "bg-gradient-to-b from-[#FFC7004D] to-[#FFC70000]",
    blobColor: "#FFC7004D",
  },
];
