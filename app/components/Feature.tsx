import { Heebo } from "next/font/google";
import Image from "next/image";
const heebo = Heebo({ subsets: ["latin"] });
function Feature() {
  return (
    <div>
<div id="feature" className="bg-background mx-auto px-6 sm:px-10 md:px-20 lg:px-40 xl:px-48 text-center">
  <h1 className={`mt-12 text-black lg:text-left font-medium ${heebo.className} text-xl`}>Featured Works</h1>

  <div className="mt-6 flex flex-col lg:flex-row gap-7 text-black items-center lg:items-start justify-center lg:justify-start">
    <Image 
      src={"/dashboard.png"} 
      alt="Image of dashboard" 
      width={250} 
      height={250} 
      className="rounded-lg max-w-full" 
    />
    <div className={`${heebo.className} lg:text-left text-center`}>
      <h1 className="font-bold text-2xl md:text-3xl">Designing Dashboards</h1>
      <div className="flex flex-row justify-center lg:justify-start mt-4">
        <h2 className="bg-button font-semibold text-base md:text-lg rounded-full text-background w-fit px-3">2020</h2>
        <span className="ml-4 md:ml-6 text-sm md:text-xl text-gray-600">Dashboard</span>
      </div>
      <p className={`${heebo.className} font-light text-base md:text-lg mt-6`}>
        Design dynamic dashboards for data visualization, monitor key metrics, streamline decision-making, and optimize business processes for enhanced performance and impactful results.
      </p>
    </div>
  </div>

  <div className="mt-24 flex flex-col lg:flex-row gap-7 text-black items-center lg:items-start justify-center lg:justify-start">
    <Image 
      src={"/girl.png"} 
      alt="Image of dashboard" 
      width={250} 
      height={250} 
      className="rounded-lg max-w-full" 
    />
    <div className={`${heebo.className} lg:text-left text-center`}>
      <h1 className="font-bold text-2xl md:text-3xl">The Human Touch</h1>
      <div className="flex flex-row justify-center lg:justify-start mt-4">
        <h2 className="bg-button font-semibold text-base md:text-lg rounded-full text-background w-fit px-3">2022</h2>
        <span className="ml-4 md:ml-6 text-sm md:text-xl text-gray-600">Empathy</span>
      </div>
      <p className={`${heebo.className} font-light text-base md:text-lg mt-6`}>
        Analyze emotions and behaviors to craft user-focused designs and experiences, fostering meaningful connections and delivering impactful solutions that resonate profoundly with individuals.
      </p>
    </div>
  </div>

  <div className="mt-24 mb-32 flex flex-col lg:flex-row gap-7 text-black items-center lg:items-start justify-center lg:justify-start">
    <Image 
      src={"/art.png"} 
      alt="Image of dashboard" 
      width={250} 
      height={250} 
      className="rounded-lg max-w-full" 
    />
    <div className={`${heebo.className} lg:text-left text-center`}>
      <h1 className="font-bold text-2xl md:text-3xl">AI and Beyond</h1>
      <div className="flex flex-row justify-center lg:justify-start mt-4">
        <h2 className="bg-button font-semibold text-base md:text-lg rounded-full text-background w-fit px-3">2024</h2>
        <span className="ml-4 md:ml-6 text-sm md:text-xl text-gray-600">Innovate</span>
      </div>
      <p className={`${heebo.className} font-light text-base md:text-lg mt-6`}>
        Harness artificial intelligence to innovate industries, reshape user interactions, and build transformative technologies, creating a forward-thinking world with unparalleled advancements.
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Feature
