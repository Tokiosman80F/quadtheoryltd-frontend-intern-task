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
    <div className="bg-amber-500  ">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        {/* info part */}
        <div className=" h-96 w-2/3 flex flex-col justify-around border border-black ">
          {/* email part */}
          <div className="relative w-11/12">
            <div className="flex">
              <input
                placeholder="Enter Your Email"
                type="text"
                className="w-full px-5 py-3 rounded-2xl"
              />
              <button className="text-base rounded-xl absolute translate-y-1/4 right-2 flex items-center justify-center gap-4 bg-orange-500 text-white px-5 py-1">
                Subscribe <GoArrowRight />
              </button>
            </div>
          </div>

          {/* logo */}
          <div>
            <p className="text-3xl font-extrabold">
              pti<span className="text-red-500">.</span>
            </p>

            {/*  copyright & social */}
            <div className="flex justify-between items-center">
              <p className="text-sm font-bold"> Copyright&copy;TokiOsman.All Right To Reserve</p>
              <ul className="flex items-center gap-2">
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
        </div>
        {/* image part */}
        <div className="w-1/3">
          <img src={footerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
