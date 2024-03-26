import Image from "next/image";
import Newsletter from "./Newsletter";
import { footerData } from "@/constant";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white">
      <Newsletter />
      <div className="px-6 sm:px-10 xl:px-12 container py-8 sm:py-10 md:py-12 xl:py-20 2xl:py-24 w-full">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-around">
          {/* 1st content */}
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 max-w-[506px]">
            <Image src={footerData.logo} alt="" width={88} height={88} />
            <div className="flex flex-col gap-4 md:gap-6">
              <p className="text-[#B3B3B3] text-xs sm:text-sm md:text-base">
                {footerData.desc1}
              </p>
              <p className="text-[#B3B3B3] text-xs sm:text-sm md:text-base">
                {footerData.desc2}
              </p>
              <div className="flex flex-row gap-4">
                {footerData.socialLink.map((li, i) => (
                  <Link key={i} href={li.link} className="w-10 h-10">
                    <Image
                      src={li.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="aspect-square object-contain"
                    />
                  </Link>
                ))}
              </div>
              <p className="text-[#B3B3B3] text-xs sm:text-sm md:text-base">
                {footerData.rights}
              </p>
            </div>
          </div>
          {/* group content */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* 2nd content */}
            <div className="flex flex-col gap-5 md:gap-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                About
              </p>
              {footerData.about.map((li, i) => (
                <Link
                  key={i}
                  href={li.link}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-[#747474] whitespace-nowrap"
                >
                  {li.label}
                </Link>
              ))}
            </div>
            {/* 3rd content */}
            <div className="flex flex-col gap-5 md:gap-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                Support
              </p>
              {footerData.support.map((li, i) => (
                <Link
                  key={i}
                  href={li.link}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-[#747474] whitespace-nowrap"
                >
                  {li.label}
                </Link>
              ))}
            </div>
          </div>
          {/* 4th content */}
          <Image
            src={"/assets/images/footer-ch.png"}
            alt=""
            width={952}
            height={642}
            className="-mt-64 object-contain hidden xl:block"
          />
        </div>
      </div>
    </footer>
  );
}
