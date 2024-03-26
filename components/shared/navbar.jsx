"use client";

import { navLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const buttonRefs = buttonData.map(() => useRef(null));
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

  const handleBlobMoving = (e, btnRef) => {
    if (btnRef.current) {
      let x = e.pageX - btnRef.current.offsetLeft;
      let y = e.pageY - btnRef.current.offsetTop;

      btnRef.current.style.setProperty("--x", x + "px");
      btnRef.current.style.setProperty("--y", y + "px");
    }
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
        className={`main-container py-4 2xl:py-5 top-0 left-0 w-full z-50 ${
          showScrollNav ? "fixed animate-fade-in bg-black" : "absolute"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className=" min-w-[60px] xl:min-w-[150px]">
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
            {/* btn */}
            <div className="flex items-center gap-4 xl:gap-6">
              {buttonData.map((btn, i) => (
                <div key={i} className={`${btn.parentBorderColor}`}>
                  <Button
                    ref={buttonRefs[i]}
                    style={{ "--clr": `${btn.blobColor}` }}
                    onMouseMove={(e) => {
                      handleBlobMoving(e, buttonRefs[i]);
                    }}
                    className={`${btn.buttonBgColor} m-[2px] rounded-none font-bold italic blob relative overflow-hidden`}
                  >
                    <Link href={btn.link} className="relative z-20 w-full">
                      {btn.label}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
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
      </nav>
    </>
  );
}

const MobileNavElement = () => {
  const buttonRefs = buttonData.map(() => useRef(null));

  const handleBlobMoving = (e, btnRef) => {
    if (btnRef.current) {
      let x = e.pageX - btnRef.current.offsetLeft;
      let y = e.pageY - btnRef.current.offsetTop;

      btnRef.current.style.setProperty("--x", x + "px");
      btnRef.current.style.setProperty("--y", y + "px");
    }
  };

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
    <div className="text-white font-medium text-xl px-6 pt-14 pb-5">
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

      <div className="flex items-center justify-center flex-wrap gap-1 pt-5">
        {buttonData.map((btn, i) => (
          <motion.div
            key={i}
            className={`${btn.parentBorderColor}`}
            custom={i}
            variants={perspectice2}
            animate="enter"
            exit="exit"
            initial="initial"
          >
            <Button
              onMouseMove={(e) => {
                handleBlobMoving(e, buttonRefs[i]);
              }}
              ref={buttonRefs[i]}
              style={{ "--clr": `${btn.blobColor}` }}
              className={`${btn.buttonBgColor} m-[1px] rounded-none font-bold italic blob relative overflow-hidden`}
            >
              <Link href={btn.link} className="relative z-20">
                {btn.label}
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const buttonData = [
  {
    label: "Contact Wallet",
    link: "#",
    parentBorderColor: "bg-gradient-to-b from-[#C7C7C7] to-[#4B4B4B]",
    buttonBgColor: "bg-gradient-to-b from-[#014AF3] to-[#10184E]",
    blobColor: "#014AF3",
  },
  {
    label: "OpenSea",
    link: "#",
    parentBorderColor: "bg-gradient-to-b from-[#C7C7C7] to-[#4B4B4B]",
    buttonBgColor: "bg-gradient-to-b from-[#C7C7C74D] to-[#BBBBBB00]",
    blobColor: "#C7C7C74D",
  },
  {
    label: "KAINU",
    link: "#",
    parentBorderColor: "bg-gradient-to-b from-[#C8AA6E] to-[#7A5C29]",
    buttonBgColor: "bg-gradient-to-b from-[#FFC7004D] to-[#FFC70000]",
    blobColor: "#FFC7004D",
  },
];
