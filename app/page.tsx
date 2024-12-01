import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Recent from "./components/Recent";
import Feature from "./components/Feature";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Recent/>
    <Feature/>
    <Footer/>
    </>
  );
}
