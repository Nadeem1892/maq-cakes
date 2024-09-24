import { Link } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { LiaCcAmex } from "react-icons/lia";
import { FaCcPaypal } from "react-icons/fa6";
import { SiPaytm } from "react-icons/si";
import maqLogo from "../../Assets/logo/MAQ_logo.png"

const Footer = () => {
  return (
    <div>
      {/* section 1 */}
      <div className="bg-pink-100 border-t-2 border-red-200 border-b-2 gap-3  p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div className="grid grid-cols-3 gap-6 items-center w-full">

          <div className="flex items-center gap-2 flex-col justify-center">
            <img
              src="https://media.bakingo.com/bakingo-ssr/static/media/truckIcon.822f5067.svg"
              alt=""
              className="lg:w-10 w-8"
            />
            <h1 className="font-semibold text-gray-600 lg:text-md text-[12px]">
              On Time Delivery
            </h1>
          </div>

          <div className="flex items-center gap-2 flex-col justify-center">
            <img
              src="https://media.bakingo.com/bakingo-ssr/static/media/cakeIcon.f5517658.svg"
              alt=""
              className="lg:w-10 w-8"
            />
            <h1 className="font-semibold text-gray-600 truncate lg:text-md text-[12px]">
              100% Fresh & Hygienic
            </h1>
          </div>

          <div className="flex items-center gap-3 flex-col justify-center">
            <img
              src="https://media.bakingo.com/bakingo-ssr/static/media/fssaiIcon.27904f51.svg"
              alt=""
              className="lg:w-[50px] w-[55px]"
            />
            <h1 className="font-semibold text-gray-600 lg:text-md text-[12px]">
              FSSAI Certified
            </h1>
          </div>
        </div>

        <div className="flex items-center w-[320px] bg-white  border-2 rounded-md border-gray-400">
          <input
            type="email"
            className="py-2 px-2 lg:px-5 text-[16px] rounded-md  focus:outline-none bg-transparent transi"
            id="Email"
            name="Email"
            placeholder="Enter email address"
          />
          <button className="transition-colors py-1 px-3  duration-700 ease-in-out bg-red-500 font-semibold hover:bg-red-600 text-white rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="p-4 lg:p-8">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 lg:place-items-center">
          <div className="flex flex-col items-center gap-1">
            <img className="w-40 h-40" src={maqLogo} alt="" />
            <ul className="flex gap-5 text-[25px] text-gray-600">
              <li className="hover:text-red-400">
                <Link to={"/"}>
                  <FaInstagram />
                </Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>
                  <FaFacebookSquare />
                </Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>
                  <IoLogoYoutube />
                </Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>
                  <FaLinkedin />
                </Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>
                  <FaPinterestSquare />
                </Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>
                  <FaSquareXTwitter />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className=" text-red-400 font-bold text-lg">Know Us</h1>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm font-semibold">
              <li className="hover:text-red-400">
                <Link to={"/"}>Our Story</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>Contact Us</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>Locate Us</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>Blog</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>Media</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>Careers</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-red-400 font-bold text-lg">Need Help</h1>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm font-semibold">
              <li className="hover:text-red-400">
                <Link to={"/"}>FAQ</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>Cancellation and Refund</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>Privacy Policy</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>Terms and Conditions</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>Customer Grievance</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>Sitemap</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-red-400 font-bold text-lg">More Info</h1>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm font-semibold ">
              <li className="hover:text-red-400">
                <Link to={"/"}>Corporate Cakes</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>Coupons & Offers</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>Franchise</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>Investor Relations</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>Stamps</Link>
              </li>
              <li className="hover:text-red-400">
                <Link to={"/"}>Download App</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="bg-pink-100 border-t-2 justify-center items-center border-red-200 flex">
        <h1 className="text-gray-500">We Accepted:</h1>
        <ul className="flex p-4 text-gray-600 gap-5 lg:p-6 text-[25px]">
          <li>
            <Link to={"/"}>
              <FaCcMastercard />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <SiVisa />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <LiaCcAmex />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FaCcPaypal />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <SiPaytm />
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Footer;
