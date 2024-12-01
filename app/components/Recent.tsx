import { Heebo } from "next/font/google";
import Link from "next/link";
const heebo = Heebo({ subsets: ["latin"] });
function Recent() {
  return (
    <div><section id="recent" className="bg-midcolor text-black mt-8 h-auto w-full px-4 md:px-40">
    <ul className={`flex flex-row justify-between font-medium text-2xl ${heebo.className} pt-6`}>
      <li className="mb-4 md:mb-0">Recent Post</li>
      <Link href="">
        <li className="text-button cursor-pointer hover:underline">View all</li>
      </Link>
    </ul>
  
    <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 pt-8 pb-16">
      <div className={`bg-white ${heebo.className} shadow-buttonShad hover:shadow-none p-6 sm:pr-12 sm:py-9 sm:pl-8`}>
        <h2 className="font-bold text-xl sm:text-2.5xl text-left">Making a design system from scratch</h2>
        <p className="py-6 text-gray-600 text-sm sm:text-lg font-normal">
          15 Sep 2006<span className="px-6 text-lg font-medium">|</span>Design , Pattern
        </p>
        <p className="text-sm sm:text-base mt-2 text-heading font-normal mb-8">
          Making a design system from scratch involves creating a comprehensive set of reusable UI components, styles, and patterns to ensure consistency and efficiency in design and development.
        </p>
      </div>
  
      <div className={`bg-white ${heebo.className} shadow-buttonShad hover:shadow-none p-6 sm:pr-12 sm:py-9 sm:pl-8`}>
        <h2 className="font-bold text-xl sm:text-2.5xl text-left">Making a design system from scratch</h2>
        <p className="py-6 text-gray-600 text-sm sm:text-lg font-normal">
          30 Nov 2024<span className="px-6 text-lg font-medium">|</span>Design , Pattern
        </p>
        <p className="text-sm sm:text-base mt-2 text-heading font-normal mb-8">
          Making a design system from scratch involves creating a comprehensive set of reusable UI components, styles, and patterns to ensure consistency and efficiency in design and development.
        </p>
      </div>
    </div>
  </section>
  
    </div>
  )
}

export default Recent
