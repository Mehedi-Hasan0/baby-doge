"use client";

import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { MdOutlineMail } from "react-icons/md";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export default function WhitelistButton({ isFullWidth = false }) {
  const buttonVariantRef = useRef(null);
  const [butttonHeight, setButttonHeight] = useState(null);

  // getting rendered navbar button height and set to a variable for positioning inner content
  useEffect(() => {
    if (buttonVariantRef.current) {
      setButttonHeight(buttonVariantRef.current.clientHeight);
    }

    function resizeCheck() {
      setButttonHeight(buttonVariantRef.current.clientHeight);
    }

    window.addEventListener("resize", resizeCheck);

    return () => {
      window.removeEventListener("resize", resizeCheck);
    };
  }, [buttonVariantRef && typeof window !== "undefined" && window.innerWidth]);
  return (
    <Dialog>
      {/* BTN */}
      <div
        className={`relative p-1 w-full flex justify-center items-center ${
          isFullWidth ? "w-full" : "w-full min-w-[210px] max-w-[250px]"
        }`}
      >
        {/* left lines/border */}
        <div className=" absolute left-0 top-0 h-full min-h-[42px] w-full flex flex-col">
          <div className="w-[1px] h-full bg-[#f1f1f1]" />
          <div className="w-[1px] min-h-[5px] bg-transparent" />
          <div className="w-[1px] h-full bg-[#f1f1f1]" />
        </div>
        {/* top line */}
        <div
          className="h-[1px] absolute top-0 bg-[#f1f1f1]"
          style={{
            width: "calc(100% - 8px)",
          }}
        />
        {/* bottom line */}
        <div
          className="h-[1.5px] absolute bottom-0 bg-[#a1a1a1]"
          style={{
            width: "calc(100% - 8px)",
          }}
        />
        {/* right lines/border */}
        <div
          className="w-[1.5px] absolute top-0 right-0 flex flex-col justify-between"
          style={{ height: `${butttonHeight + 6}px` }}
        >
          <div
            className="w-[1.5px]  bg-[#f1f1f1]"
            style={{ height: `${butttonHeight / 2 - 2}px` }}
          />
          <div className="w-[1.5px] min-h-[4px] bg-transparent" />
          <div
            className="w-[1.5px] bg-[#f1f1f1]"
            style={{ height: `${butttonHeight / 2 - 2}px` }}
          />
        </div>
        {/* original button inner style element content*/}
        <div className=" relative w-full h-full">
          {/* left top qube */}
          <div className="bg-black w-[6px] h-[6px] absolute top-0 left-0 z-10" />
          {/* middle line */}
          <div
            className={`absolute left-0 w-[7px] h-[3px] z-10 transition duration-300 ease-in middle-qube`}
            style={{
              top: `${butttonHeight / 2 - 1}px`,
              "--elemClr": "#ffffff",
              "--hoverElemClr": "#000000",
            }}
          />
          {/* right bottom qube */}
          <div
            className={`w-[6px] h-[6px] absolute bottom-0 right-0 z-10 transition duration-300 ease-in  right-bottom-qube`}
            style={{
              "--elemClr": "#ffffff",
              "--hoverElemClr": "#000000",
            }}
          />

          {/* button content */}
          <div
            ref={buttonVariantRef}
            className="w-full flex justify-center items-center"
          >
            <DialogTrigger asChild>
              <Button
                variant="customAnimated"
                style={{
                  "--gradClr": "#1a1a1a",
                  "--hoverClr": "#000000",
                }}
                className={`w-full h-5 uppercase font-extrabold rounded-none bg-yellow2 text-sm lg:text-base 2xl:text-xl text-black hover:text-white`}
              >
                whitelist now
              </Button>
            </DialogTrigger>
          </div>
        </div>
      </div>

      <DialogContent className="sm:max-w-[725px] text-white bg-black pt-5">
        {/* content */}
        <div className="grid gap-4 py-4">
          <div className="flex flex-col justify-center items-center gap-3">
            <h4 className="font-jost uppercase text-sm md:text-base">
              GET WHITELISTED NOW!
            </h4>
            <p className="text-sm md:text-base text-[#eeeeee]/70 text-center">
              YOU NEED TO PROVIDE EMAIL ADDRESS AND YOUR SOCIAL MEDIA ACCOUNTS
              TO BE WHITELISTED.
            </p>
          </div>

          {/* input's */}
          <form className="flex flex-col gap-3">
            <label
              htmlFor="emailAddress"
              className=" w-full flex items-center gap-2 bg-black border border-white rounded-md min-h-[30px] p-2"
            >
              <MdOutlineMail size={18} color="#ffffff" />
              <input
                id="emailAddress"
                type="email"
                className="bg-transparent w-full h-full min-h-[30px] pl-2 outline-none text-white"
                placeholder="Enter your email"
              />
            </label>
            <label
              htmlFor="twitter"
              className=" w-full flex items-center gap-2 bg-black border border-white rounded-md min-h-[30px] p-2"
            >
              <FaTwitter size={18} color="#ffffff" />
              <input
                id="twitter"
                type="text"
                className="bg-transparent w-full h-full min-h-[30px] pl-2 outline-none text-white"
                placeholder="Enter your twitter link"
              />
            </label>
            <label
              htmlFor="discord"
              className=" w-full flex items-center gap-2 bg-black border border-white rounded-md min-h-[30px] p-2"
            >
              <FaDiscord size={18} color="#ffffff" />
              <input
                id="discord"
                type="text"
                className="bg-transparent w-full h-full min-h-[30px] pl-2 outline-none text-white"
                placeholder="Enter your discord link"
              />
            </label>
            <label
              htmlFor="discord"
              className=" w-full flex items-center gap-2 text-[#eeeeee]/70"
            >
              Wallet address - BSC
            </label>
            <input
              id="discord"
              type="text"
              className="bg-black border border-white rounded-md p-2 w-full min-h-[30px] pl-2 outline-none text-white"
              placeholder="Enter your wallet link"
            />

            {/* form footer */}
            <div className="flex flex-col justify-center items-center gap-2 mt-5">
              <h4 className="font-jost text-sm md:text-base">
                Just a limited amount of people will be picked and added to the
                whitelist.
              </h4>
              <p className="text-sm md:text-base text-[#eeeeee]/70 text-center">
                You will be notified via e-mail.
              </p>
            </div>

            {/* save btn in footer */}
            <DialogFooter className="mx-auto">
              <Button
                type="submit"
                className="uppercase bg-yellow2 text-black font-bold hover:text-white transition-all duration-300 ease-in"
              >
                Submit
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
