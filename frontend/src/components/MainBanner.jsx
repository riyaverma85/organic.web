import mainbanner1 from "../assets/images/carousel-2.jpg";
import mainbanner2 from "../assets/images/carousel-1.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const MainBanner = () => {
  return (
    <div className='relative'>
           <img src={mainbanner1} alt="banner" className="w-full hidden md:block" height="250px"/>
           <img src={mainbanner2} alt="banner" className="w-full  md:hidden" height="250px"/>
           <div>
              <h1>Fresh Organic Goods for Your Lifestyle</h1>
              <div>
                <Link toclassName="group flex items-center gap-2 bg-primary text-white px-7 md:px-9 py-3 rounded transition cursor-pointer  hover:bg-primary-dull " to="/shop">
                Shop now <IoIosArrowRoundForward className="md:hidden transition group-focus:translate-x-1"/>
                  
                </Link>
              </div>
           </div>
    </div>

  )
}

export default MainBanner;