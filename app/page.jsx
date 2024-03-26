import Banner from "@/components/pages/home/Banner";
// import Characters from "@/components/pages/home/Characters";
import LootBoxDetails from "@/components/pages/home/LootBoxDetails";
import Lootbox from "@/components/pages/home/Lootbox";
import MintingDetails from "@/components/pages/home/MintingDetails";
import WeaponNft from "@/components/pages/home/WeaponNft";
import dynamic from "next/dynamic";

const Characters = dynamic(() => import("@/components/pages/home/Characters"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Banner />
      <Lootbox />
      <Characters />
      <LootBoxDetails />
      <MintingDetails />
      <WeaponNft />
    </main>
  );
}
