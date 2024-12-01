import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
    return (
        <div>
            <footer id="footer" className="font-sans font-medium text-xl pt-12 leading-7 pb-8 bg-footer text-center">
                <div className="container px-5 py-8 mx-auto">
                    <span className="inline-flex justify-center">
                        <a className="text-heading text-3xl ml-4">
                            <FaFacebookSquare/>
                        </a>
                        <a className="text-heading text-3xl ml-12">
                            <FaInstagram/>
                        </a>
                        <a className="text-heading text-3xl ml-12">
                            <FaTwitter/>
                        </a>
                        <a className="text-heading text-3xl ml-12">
                            <FaLinkedin/>
                        </a>
                    </span>
                    <p className="mt-6 text-black text-center leading-10">Copyright © 2025 All Rights Reserved <br /> Created by Muhammad Hammad ur Rehman.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
