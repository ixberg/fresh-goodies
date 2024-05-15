import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Productlist from "@/components/Productlist";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header></Header>
      <Navigation></Navigation>
      <Productlist></Productlist>
    </main>
  );
}
