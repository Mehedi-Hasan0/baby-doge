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
      console.log(buttonVariantRef.current.clientHeight);
    }

    window.addEventListener("resize", resizeCheck);

    return () => {
      window.removeEventListener("resize", resizeCheck);
    };
  }, [buttonVariantRef && typeof window !== "undefined" && window.innerWidth]);
  return (
    <div className="relative p-1 min-h-[42px] min-w-[155px] flex justify-center items-center">
      {/* left lines/border */}
      <div className=" absolute left-0 top-0 h-full min-h-[42px] w-full flex flex-col">
        <div className="w-[1.5px] h-full bg-[#f1f1f1]" />
        <div className="w-[1.5px] min-h-[5px] bg-transparent" />
        <div className="w-[1.5px] h-full bg-[#f1f1f1]" />
      </div>
      {/* left lines/border */}
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
          className="w-full min-h-[33px] flex justify-center items-center"
        >
          <Button
            variant="customAnimated"
            style={{
              "--gradClr": `${bgVariantType}`,
              "--hoverClr": `${hoverTextColor}`,
            }}
            className={`w-full min-h-[34px] uppercase font-extrabold text-black text-sm rounded-none bg-[${bgColor}]`}
          >
            {textLabel}
          </Button>
        </Link>
      </div>
    </div>
  );
}
