import footerImage from "../../assets/images/footer-img.png";
import {
  FaGoogle,
  FaInstagram,
  FaLongArrowAltRight,
  FaTwitter,
} from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
const Footer = () => {
  return (
    <div className="bg-amber-500 mt-32 ">
      <div className=" h-96 md:max-w-screen-lg md:mx-auto flex items-center justify-between">
        {/* info part */}
        <div className=" gap-10 md:h-96 md:w-2/3 flex flex-col justify-center items-center md:justify-around  ">
          {/* email part */}
          <div className="relative  md:w-11/12">
            <div className="flex">
              <input
                placeholder="Enter Your Email"
                type="text"
                className="w-96 md:w-full px-5 py-3 rounded-2xl"
              />
              <button className="text-base rounded-xl absolute translate-y-1/4 right-2 flex items-center justify-center gap-4 bg-orange-500 text-white px-5 py-1">
                Subscribe <GoArrowRight />
              </button>
            </div>
          </div>

          {/* logo */}
          <div className="  gap-5 flex flex-col-reverse items-center justify-center md:flex md:items-end md:justify-between">
            <div>
            <p className="text-3xl font-extrabold text-center">
              pti<span className="text-red-500">.</span>
            </p>
            <p className=" md:block text-sm font-bold">
              Copyright&copy;TokiOsman.All Right To Reserve
            </p>
            </div>
            {/*  social link*/}
            <ul className="flex items-center justify-center gap-2">
              <li className="bg-orange-200 p-2 rounded-full">
                <FaGoogle className="text-orange-500" />
              </li>
              <li className="bg-orange-200 p-2 rounded-full">
                <FaTwitter className="text-orange-500" />
              </li>
              <li className="bg-orange-200 p-2 rounded-full">
                <FaInstagram className="text-orange-500" />
              </li>
            </ul>
          </div>
        </div>
        {/* image part */}
        <div className="hidden md:w-1/3 md:block ">
          <img src={footerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
