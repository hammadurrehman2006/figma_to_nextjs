import Link from "next/link"

function Header() {
  return (
<header className={`body-font bg-background pt-16`}>
<div className= "items-center justify-center flex flex-col md:flex-row">
<nav className="md:ml-auto flex  items-center lg:pr-16 space-x-14 justify-center">
<Link href={"#feature"} className=" font-sans font-medium text-xl leading-7 text-black hover:text-button cursor-pointer">Works</Link>
<Link href={"#recent"} className=" font-sans font-medium text-xl leading-7 text-black hover:text-button cursor-pointer">Blog</Link>
<Link href={"#footer"} className=" font-sans font-medium text-xl leading-7 text-black hover:text-button cursor-pointer">Contact</Link>
</nav>
</div>
</header>
  )
}

export default Header
