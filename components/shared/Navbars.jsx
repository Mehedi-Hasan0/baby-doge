"use client";

import { navLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import FullWidthBorder from "./FullWidthBorder";
import CustomButtonVariant1 from "../ui/CustomButtonVariant1";

export default function Navbars() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const ref = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollNav, setShowScrollNav] = useState(false);

  //   framer motion variants
  const variants = {
    open: {
      width: 280,
      height: 410,
      top: "-5px",
      right: "-10px",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };

  // closing menu on outside click
  useClickAway(ref, () => setMobileNavOpen(false));

  // handle mouse sticky position
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowScrollNav(scrollPosition >= window.innerHeight);
  }, [scrollPosition]);

  return (
    <>
      <nav
        ref={ref}
        className={`top-0 left-0 w-full z-50 bg-black ${
          showScrollNav ? "fixed animate-fade-in" : "absolute"
        }`}
      >
        <div className="main-container py-4 2xl:py-5 ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex flex-row">
              <div className=" min-w-[60px] lg:min-w-[80px] 2xl:min-w-[120px]">
                <Link href={"/"}>
                  <Image
                    src={"/assets/images/katanaLogo.webp"}
                    alt="logo"
                    width={60}
                    height={60}
                    priority={true}
                  />
                </Link>
              </div>
              {/* large device nav */}
              {/* nav links */}
              <div
                className={`hidden lg:flex items-center gap-5 xl:gap-10 2xl:gap-20`}
              >
                <ul className="flex items-center">
                  {navLinks.map((link, i) => (
                    <li
                      className="px-3 xl:px-4 2xl:px-6 text-white text-sm xl:text-base 2xl:text-lg hover:text-yellow1 transition-colors duration-500 ease-in-out"
                      key={i}
                    >
                      <Link href={"#"}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* btn's */}
            <div className="lg:flex items-center gap-4 xl:gap-6 hidden">
              {/* button variant 1 */}
              <CustomButtonVariant1
                key={1}
                textLabel={"opensea"}
                bgColor={"#dcdcdc"}
                bgVariantType={"#FFD026"}
                hoverTextColor={"#000"}
                elementColor={"#FFD026"}
                hoverElementColor={"#ffffff"}
              />
              {/* button variant 1 */}
              <CustomButtonVariant1
                key={2}
                textLabel={"kainu"}
                bgColor={"#FFD026"}
                bgVariantType={"#232323"}
                hoverTextColor={"#ffffff"}
                elementColor={"#ffffff"}
                hoverElementColor={"#FFD026"}
              />
            </div>
            {/* mobile device nav */}
            <div className="block lg:hidden relative">
              <div className="relative z-50 rounded-full">
                <Hamburger
                  toggled={mobileNavOpen}
                  size={20}
                  color={"#fff"}
                  toggle={setMobileNavOpen}
                  duration={0.9}
                />
              </div>
              <motion.div
                variants={variants}
                animate={mobileNavOpen ? "open" : "closed"}
                initial="closed"
                className="text-black absolute z-40 bg-[#000000] border border-[#1a1a1a] top-2 right-2 rounded-2xl"
              >
                <AnimatePresence>
                  {mobileNavOpen && <MobileNavElement />}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
        {/* border element */}
        <FullWidthBorder />
      </nav>
    </>
  );
}

const MobileNavElement = () => {
  const button = [
    {
      textLabel: "opensea",
      bgColor: "#dcdcdc",
      bgVariantType: "#FFD026",
      hoverTextColor: "#000",
      elementColor: "#FFD026",
      hoverElementColor: "#ffffff",
    },
    {
      textLabel: "kainu",
      bgColor: "#FFD026",
      bgVariantType: "#232323",
      hoverTextColor: "#fff",
      elementColor: "#ffffff",
      hoverElementColor: "#FFD026",
    },
  ];
  //   motion value
  const perspectice1 = {
    initial: {
      opacity: 0,
      rotateX: 90,
    },
    enter: (i) => ({
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.65,
        opacity: {
          duration: 0.35,
        },
        delay: 0.5 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };
  const perspectice2 = {
    initial: {
      opacity: 0,
    },
    enter: (i) => ({
      opacity: 1,
      transition: { delay: 0.9 + i * 0.1 },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <div className="text-white font-medium text-xl px-6 pt-14 pb-8 bg-black rounded-2xl">
      {navLinks.map((link, i) => {
        return (
          <div key={i} className="mobile-link-container">
            <motion.div
              className="py-1"
              custom={i}
              variants={perspectice1}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              <Link href={link.link}>{link.label}</Link>
            </motion.div>
          </div>
        );
      })}

      <div className="flex flex-wrap gap-2 pt-5">
        {button.map((btn, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={perspectice2}
            animate="enter"
            exit="exit"
            initial="initial"
          >
            {/* button variant 1 */}
            <CustomButtonVariant1
              key={i}
              textLabel={btn.textLabel}
              bgColor={btn.bgColor}
              bgVariantType={btn.bgVariantType}
              hoverTextColor={btn.hoverTextColor}
              elementColor={btn.elementColor}
              hoverElementColor={btn.hoverElementColor}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
