import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <section className="text-white section-padding overflow-hidden">
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
            src={"/assets/icons/text-top.svg"}
            alt=""
            width={310}
            height={14}
          />
          <h5 className="uppercase text-base sm:text-lg md:text-xl font-bold tracking-[5px]">
            Media
          </h5>
        </motion.div>

        <motion.div
          className="bg-[url('/assets/icons/frame.svg')] bg-contain bg-no-repeat w-full sm:min-h-[600px] mt-8 sm:mt-10 md:mt-12 lg:mt-16 p-4 sm:px-8 sm:py-10 lg:px-20 pb-10 relative"
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
          <div className="relative py-10 flex justify-center">
            <Button className="bg-gradient-to-b from-[#FFEE55] to-[#FF9900] rounded-none overflow-hidden banner-btn min-w-[130px] sm:min-w-[209px] min-h-[40px] flex justify-center items-center font-semibold relative transition-all duration-500 ease-in-out opacity-90 hover:opacity-100 cursor-pointer z-20 max-w-[200px]">
              <Link
                href="#"
                className="w-full h-full uppercase text-yellowDarkRed leading-[1.9] relative z-20 text-xs sm:text-sm md:text-base"
              >
                whitelist now
              </Link>
              <Image
                src={"/assets/icons/btn-shape.svg"}
                width={209}
                height={40}
                alt="shape"
                className="absolute mt-5"
              />
            </Button>
            {/* glow */}
            <Image
              src={"/assets/icons/glow.svg"}
              alt=""
              width={1509}
              height={80}
              className="absolute bottom-4"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
