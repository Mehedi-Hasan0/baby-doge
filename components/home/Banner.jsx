import Image from "next/image";
import BannerButton from "./BannerButton";
import { motion } from "framer-motion";

export default function Banner() {
  const textVariant = {
    initial: {
      opacity: 0,
      x: -30,
      transition: { duration: 0.75 },
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75 },
    },
  };

  const img1Variant = {
    initial: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.85 },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85 },
    },
  };

  const img2Variant = {
    initial: {
      opacity: 0,
      x: -30,
      transition: { duration: 0.9 },
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9 },
    },
  };

  const img3Variant = {
    initial: {
      opacity: 0,
      x: 30,
      transition: { duration: 0.95 },
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.95 },
    },
  };
  return (
    <div className="text-white bg-[url('/assets/images/mobile-bg.webp')] sm:bg-[url('/assets/images/sm-banner-bg.webp'), url('/assets/images/bannerbg.webp')] md:bg-[url('/assets/images/md-banner-bg.webp'), url('/assets/images/bannerbg.webp')] lg:bg-[url('/assets/images/bannerbg.webp')] bg-cover pt-44 md:pt-24 relative min-h-[900px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[1024px] flex items-center overflow-hidden">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between main-container">
        {/* texts and btn */}
        <motion.div
          className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3 sm:gap-5 flex-1 sm:w-full mt-96 sm:mt-[750px] md:mt-[1050px] lg:mt-0 lg:w-1/2 lg:my-10 xl:my-10 w-[320px] mx-auto"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <h1 className="uppercase font-bold leading-[0.9] banner-heading">
            Baby
            <span className="text-yellow2">doge</span>
          </h1>
          <div className="flex flex-col gap-2">
            <h3 className=" text-4xl sm:text-6xl xl:text-5xl 2xl:text-[64px] uppercase leading-[0.9] font-semibold text-center lg:text-start">
              Character
            </h3>
            <p className="text-base md:text-lg 2xl:text-2xl text-center lg:text-start">
              In <span className="text-yellow2">Katana Inu</span> game on{" "}
              <span className="text-yellowRed">Baby Doge</span>
            </p>
          </div>
          {/* btn */}
          <div>
            <BannerButton />
          </div>
        </motion.div>
        {/* right side content */}
        <motion.div
          className="hidden lg:block absolute w-full h-full top-0 right-0 lg:top-5 xl:top-0"
          variants={img1Variant}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <Image
            src={"/assets/images/ch-1.webp"}
            alt=""
            width={1920}
            height={320}
            className="object-cover absolute top-0 lg:right-0 w-full z-[2]"
          />
          <Image
            src={"/assets/images/ch-2.webp"}
            alt=""
            width={1920}
            height={320}
            className="object-cover absolute top-0 right-0 w-full"
          />
          <Image
            src={"/assets/images/ch-3.webp"}
            alt=""
            width={1920}
            height={320}
            className="object-cover absolute top-0 right-0 w-full z-[1]"
          />
        </motion.div>
      </section>
    </div>
  );
}