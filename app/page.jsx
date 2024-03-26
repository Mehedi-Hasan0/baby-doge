import Banner from "@/components/pages/home/Banner";
import Ecosystem from "@/components/pages/home/Ecosystem";
// import Characters from "@/components/pages/home/Characters";
import LootBoxDetails from "@/components/pages/home/LootBoxDetails";
import Lootbox from "@/components/pages/home/Lootbox";
import Media from "@/components/pages/home/Media";
import MintingDetails from "@/components/pages/home/MintingDetails";
import Wallet from "@/components/pages/home/Wallet";
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
      <Media />
      <Ecosystem />
      <Wallet />
    </main>
  );
}
