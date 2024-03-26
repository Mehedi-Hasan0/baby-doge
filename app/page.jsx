import Banner from "@/components/pages/home/Banner";
import Characters from "@/components/pages/home/Characters";
import LootBoxDetails from "@/components/pages/home/LootBoxDetails";
import Lootbox from "@/components/pages/home/Lootbox";

export default function Home() {
  return (
    <main>
      <Banner />
      <Lootbox />
      <Characters />
      <LootBoxDetails />
    </main>
  );
}
