import { Link } from "react-router";
import { TbLocationFilled } from "react-icons/tb";
import { FaHotel } from "react-icons/fa6";
import { IoPricetags } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import VisitBtn from "./Visit/VisitBtn";

const HotelCard = ({ hotel }, { index }) => {
  console.log(hotel);

  return (
    <Link
    key={index}
    to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName} ${hotel?.hotelAddress}`}
    target="_blank"
    className="w-full sm:w-80 md:w-96 lg:w-[28rem]"
  >
    <div className="shadow-lg  p-5 bg-transparent border border-gray-300 flex flex-col items-center w-full h-full relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] ">
      <div className=" space-y-3 w-full px-3 h-full">
        <h2 className="font-semibold text-3xl flex gap-x-3 text-gray-100"><span>{hotel?.hotelName}</span><FaHotel/></h2>
        <p className="text-sm flex gap-x-1 text-gray-200 "><TbLocationFilled/><span>{hotel?.hotelAddress}</span></p>
        <p className="text-sm flex gap-x-1 text-gray-200">Price <IoPricetags/><span>{hotel?.price}</span></p>
        <p className="text-sm flex gap-x-1 text-gray-200">Rating<MdOutlineStarPurple500/><span>{hotel?.rating}/5</span></p>
        <p className="text-sm text-gray-200">{hotel?.description}</p>
        <div>
          <VisitBtn />
        </div>
      </div>
    </div>
  </Link>
  
  );
};

export default HotelCard;