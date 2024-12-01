import Image from "next/image"
import { Inter, Heebo } from "next/font/google";
import Link from "next/link";
const heebo = Heebo({ subsets: ["latin"] });
function Hero() {
  return (
<div>
  <section className="text-gray-600 pt-24 bg-background">
    <div className="container flex flex-col-reverse mx-auto px-4 lg:pl-36 lg:py-10 min-[950px]:flex-row items-center">
      <div className="lg:flex-grow lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center">
      <h1 className={`${heebo.className} text-3xl sm:text-4xl mt-6 md:mt-0 md:text-5xl mb-4 font-black text-heading tracking-wider`}>
  <span className="block mb-3">Hi, I am John,</span> Creative Technologist
</h1>
        <p className="mb-6 mt-3 leading-relaxed text-sm sm:text-base md:text-md">
          I blend technical expertise with artistic vision to deliver exceptional digital experiences.
          From crafting stunning user interfaces to developing robust backend systems, I thrive on challenges and pushing the boundaries of technology.
        </p>
        <div className="flex justify-center">
        <Link href={""}><button
          className={`${heebo.className} w-[205px] h-[50px] rounded-[2px] font-[500] mt-1 leading-[26.44px] shadow-buttonShad hover:shadow-none bg-button text-center text-white`}
        >Download Resume</button></Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full w-full sm:w-1/2 relative">
  <Image
    width={292}
    height={300}
    className="rounded-full mx-auto pr-4"
    alt="hero"
    src="/image.png"
  />
  <div className="bg-imgShad absolute inset-0 rounded-full -z-10" />
</div>
    </div>
  </section>
</div>

  )
}

export default Hero
