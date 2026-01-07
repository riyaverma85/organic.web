
import mainbanner1 from "../assets/images/carousel-2.jpg";
import mainbanner2 from "../assets/images/carousel-1.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

const MainBanner = () => {
  return (
    <div className='relative'>
           <img src={mainbanner1} alt="banner" className="w-full hidden md:block" height="200px"/>
           <img src={mainbanner2} alt="banner" className="w-full  md:hidden" height="200px"/>
          <div className="absolute inset-0 flex flex-col md:justify-center items-center md:items-start justify-end pb-24 md:pb-0  md:pl-18 lg:pl-24 h-full text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15">
                Fresh Organic Goods for Your Lifestyle</h1>
            
              <div className="flex items-center mt-6 font-medium">
                <Link to={"/products"} className="group flex items-center gap-2 bg-primary text-white px-7 md:px-9 py-3 rounded transition cursor-pointer  hover:bg-primary-dull ">
                Shop now <IoIosArrowRoundForward className="md:hidden transition group-focus:translate-x-1"/>
                </Link>
                <Link to={"/products"} className="group hidden items-center gap-2  px-9 md:flex py-3  cursor-pointer">
                Explore deals <IoMdArrowForward className=" transition group-focus:translate-x-1"/>
                </Link>
              </div>
          </div>
    </div>
)
}

export default MainBanner;