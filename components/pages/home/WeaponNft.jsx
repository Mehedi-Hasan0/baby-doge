"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { weaponNftData } from "@/data";

export default function WeaponNft() {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(2); // State to keep track of active slide index
  const [slides, setSlides] = useState(
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3
  );

  const handleSlideChange = (swiper) => {
    if (swiper.realIndex === 4) {
      setActiveSlide(0);
    } else {
      setActiveSlide(swiper.realIndex + 1); // Update active slide index when slide changes
    }
    console.log(swiper.realIndex, "index");
  };

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Autoplay]);
      setSwiperLoaded(true);
    });

    function resizeCheck() {
      setSlides(
        typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3
      );
    }

    window.addEventListener("resize", resizeCheck);

    return () => {
      window.removeEventListener("resize", resizeCheck);
    };
  }, []);

  if (!swiperLoaded) {
    return null; // loading state
  }

  return (
    <section className="text-white section-padding overflow-hidden">
      <div className="main-container">
        <div className="py-8 flex flex-col justify-center items-center">
          <Image
            src={"/assets/icons/text-top.svg"}
            alt=""
            width={310}
            height={14}
          />
          <h5 className="uppercase text-base sm:text-lg md:text-xl font-bold tracking-[5px]">
            Weapon nfts
          </h5>
        </div>

        {/* slider */}
        <div className=" text-black">
          <Swiper
            slidesPerView={slides}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            onSlideChange={handleSlideChange}
            initialSlide={2}
            // modules={[Pagination]}
            className="mySwiper flex justify-center items-center"
          >
            {weaponNftData.map((data, i) => (
              <SwiperSlide
                key={i}
                className={`${
                  activeSlide === i
                    ? "  min-h-[100px] py-40"
                    : " min-h-[100px] "
                } relative`}
              >
                <div className="flex justify-center items-center">
                  {/* bg */}
                  <Image
                    src={"/assets/images/weapon/weapon-bg.png"}
                    alt=""
                    width={252}
                    height={744}
                    className={`${
                      activeSlide === i ? "block absolute" : "hidden"
                    }`}
                  />

                  {/* sword */}
                  <Image
                    src={data.nft}
                    alt=""
                    width={490}
                    height={520}
                    className={`${
                      activeSlide === i
                        ? " opacity-100 lg:opacity-100"
                        : "opacity-100 lg:opacity-40"
                    } pt-10  min-h-[500px] 2xl:min-h-[600px] relative z-10`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
