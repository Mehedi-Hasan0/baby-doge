"use client";

import Banner from "@/components/home/Banner";
import Ecosystem from "@/components/home/Ecosystem";
// import Characters from "@/components/pages/home/Characters";
import LootBoxDetails from "@/components/home/LootBoxDetails";
import Lootbox from "@/components/home/Lootbox";
import Media from "@/components/home/Media";
import MintingDetails from "@/components/home/MintingDetails";
import Wallet from "@/components/home/Wallet";
import WeaponNft from "@/components/home/WeaponNft";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Loader from "./loading";
import Footer from "@/components/shared/Footer";
import Navbars from "@/components/shared/Navbars";
import BabydogeCards from "@/components/home/BabydogeCards";

const Characters = dynamic(() => import("@/components/home/Characters"), {
  ssr: false,
});

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbars />
      <main>
        <Banner />
        <Lootbox />
        <Characters />
        <LootBoxDetails />
        <BabydogeCards />
        <MintingDetails />
        <WeaponNft />
        <Media />
        <Ecosystem />
        <Wallet />
      </main>
      <Footer />
    </>
  );
}
