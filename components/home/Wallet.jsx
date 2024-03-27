import Image from "next/image";
import { motion } from "framer-motion";

export default function Wallet() {
  const textVariant = {
    initial: {
      opacity: 0,
      y: 20,
      transition: { duration: 1.2 },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2 },
    },
  };

  const cardsVariant = {
    initial: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    animate: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.65,
        delay: 0.25 * i,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  return (
    <section className="text-white overflow-hidden section-padding lg:bg-[url('/assets/images/banner-bg-8.png')] bg-cover bg-center min-h-[700px] 2xl:min-h-[800px] pb-10 lg:mt-16 lg:pb-20">
      <div className="main-container">
        <motion.div
          className="flex flex-col justify-center items-center gap-4 mb-8 sm:mb-10 md:mb-14 lg:mb-16 xl:mb-20"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          // viewport={{
          //   once: true,
          // }}
        >
          <p className="tex-xs sm:text-base md:text-lg lg:text-[22px] font-light text-center">
            Trade with world’s most trusted and fastest wallets
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-yellowRed font-medium">
            Wallets We Support
          </h2>
        </motion.div>

        {/* wallet card */}
        <div className="flex flex-row justify-center flex-wrap gap-9">
          {walletData.map((card, i) => (
            <motion.div
              key={i}
              variants={cardsVariant}
              custom={i}
              initial="initial"
              whileInView="animate"
              // viewport={{
              //   once: true,
              // }}
            >
              <Image src={card.card} alt="" width={171} height={209} />
            </motion.div>
          ))}
        </div>

        {/* how it works */}
        <div className=" flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-yellowRed font-medium"
            variants={textVariant}
            initial="initial"
            whileInView="animate"
            // viewport={{
            //   once: true,
            // }}
          >
            How it works
          </motion.h2>

          {/* content */}
          <div className="flex flex-col md:flex-row items-center gap-2 mt">
            {howItWorksData.map((data, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center gap-2"
              >
                <div className="flex flex-col items-center gap-2">
                  <Image src={data.icon} alt="" width={77} height={77} />
                  <p className="text-light text-xs xl:text-sm text-center">
                    {data.label}
                  </p>
                </div>
                <Image
                  src={"/assets/icons/wallet/works-arrow.svg"}
                  alt=""
                  width={122}
                  height={2}
                  className={`${
                    i === 3 ? "hidden" : "block"
                  } h-[122px] rotate-90 md:rotate-0`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const walletData = [
  {
    card: "/assets/icons/wallet/Wallet1.png",
  },
  {
    card: "/assets/icons/wallet/Wallet2.png",
  },
  {
    card: "/assets/icons/wallet/Wallet3.png",
  },
  {
    card: "/assets/icons/wallet/Wallet4.png",
  },
  {
    card: "/assets/icons/wallet/Wallet5.png",
  },
];

const howItWorksData = [
  {
    icon: "/assets/icons/wallet/works-icon-1.png",
    label: "Set up your wallet",
  },
  {
    icon: "/assets/icons/wallet/works-icon-2.png",
    label: "Create your collection",
  },
  {
    icon: "/assets/icons/wallet/works-icon-3.png",
    label: "Add your NFTs",
  },
  {
    icon: "/assets/icons/wallet/works-icon-4.png",
    label: "List them for sale",
  },
];
