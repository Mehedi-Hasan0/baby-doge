import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomButtonVariant1 from "../ui/CustomButtonVariant1";

export default function Media() {
  const textVariant = {
    initial: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.9 },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    },
  };
  return (
    <section className="text-white overflow-hidden bg-[url('/assets/images/banner-bg-3.webp')] bg-cover bg-center pb-8 relative mt-8">
      <div className="main-container">
        <motion.div
          className="py-10 flex flex-col justify-center items-center"
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
          <h5 className="uppercase text-base sm:text-lg md:text-xl font-bold tracking-[5px]">
            Media
          </h5>
        </motion.div>

        <motion.div
          className="bg-[url('/assets/icons/frame.svg')] bg-contain bg-no-repeat w-full sm:min-h-[600px] sm:mt-10 md:mt-12 lg:mt-16 p-4 sm:px-8 sm:py-10 lg:px-20 pb-10 relative"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          // viewport={{
          //   once: true,
          // }}
        >
          <Image
            src={"/assets/images/media-1.png"}
            alt="meadi1"
            width={1300}
            height={495}
            className="w-full"
          />

          <div className="mt-5 grid grid-cols-3 items-center gap-5 w-full">
            <Image
              src={"/assets/images/media-2.png"}
              alt=""
              width={284}
              height={224}
              className="w-full opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300 ease-in"
            />
            <Image
              src={"/assets/images/media-3.png"}
              alt=""
              width={284}
              height={224}
              className="w-full opacity-70 hover:opacity-100 cursor-pointer  transition-all duration-300 ease-in"
            />
            <Image
              src={"/assets/images/media-4.png"}
              alt=""
              width={284}
              height={224}
              className="w-full opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300 ease-in"
            />
          </div>

          {/* footer btn */}
          {/* white list button */}
          <div className="mt-7 flex justify-center">
            {/* white list btn */}
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
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 flex flex-row justify-between w-full h-[3px] z-20">
        <div className="w-[10%] bg-yellow2 h-[3px]" />
        <div className="w-[60%] bg-white h-[3px]" />
      </div>
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
