import { motion } from "framer-motion";
import Image from "next/image";

export default function BabydogeCards() {
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
  const leftCardsVariant = {
    initial: {
      opacity: 0,
      x: -30,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    animate: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        delay: 0.15 * i,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };
  return (
    <section className="text-white overflow-hidden bg-[url('/assets/images/banner-bg-3.webp')]  lg:bg-[url('/assets/images/3rd-sec-banner.webp')] bg-cover bg-center lg:pt-10 relative mt-12 sm:mt-16">
      {/* left side lines */}
      <div className="bg-[url('/assets/icons/leftLines.svg')] bg-cover absolute top-0 left-0 min-w-[778px] min-h-[900px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[1000px] z-[2] opacity-10" />
      {/* right side lines */}
      <div className="bg-[url('/assets/icons/rightLines.svg')] bg-cover absolute top-0 right-0 min-w-[778px] min-h-[900px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[1000px] z-[2] opacity-10" />

      <div className="w-[50%] h-full absolute top-0 right-0 z-[1] bg-[url('/assets/images/3rd-sec-top-right-layer.webp')] object-contain" />

      {/* main content */}
      <div className="main-container pb-8 lg:pb-10">
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

        <div className="flex flex-col-reverse lg:flex-row gap-5 sm:gap-10 items-center 2xl:px-28">
          <div className="flex flex-col gap-7 sm:gap-10 relative z-[7] w-full lg:w-1/2">
            {babydogeCaracters.map((ch, i) => (
              <motion.div
                key={i}
                variants={leftCardsVariant}
                custom={i}
                initial="initial"
                whileInView="animate"
                // viewport={{
                //   once: true,
                // }}
              >
                <Image
                  src={ch.img}
                  alt=""
                  width={644}
                  height={181}
                  className={`${i === 0 && "md:ml-10 xl:ml-20"} ${
                    i === 2 && "md:ml-10 xl:ml-20"
                  }`}
                />
              </motion.div>
            ))}
          </div>
          {/*  */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={textVariant}
            initial="initial"
            whileInView="animate"
            // viewport={{
            //   once: true,
            // }}
          >
            <Image
              src={"/assets/images/babydoge-ch.webp"}
              alt=""
              width={756}
              height={786}
              className="relative bottom-7 sm:bottom-7 lg:ml-10 lg:bottom-16 z-[1] lg:right-0 mx-auto lg:mx-0"
            />
          </motion.div>
        </div>
      </div>

      {/* shadow overlay */}
      <div className="w-full h-[50%] bg-gradient-to-b from-transparent to-black absolute bottom-0 z-[6] lg:block hidden" />
    </section>
  );
}

const babydogeCaracters = [
  {
    img: "/assets/images/babydoge-card-1.webp",
  },
  {
    img: "/assets/images/babydoge-card-2.webp",
  },
  {
    img: "/assets/images/babdoge-card-3.webp",
  },
];
