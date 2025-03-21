import { Link } from "react-router";
import image from "../assets/trip.webp"
import { BsFillPinMapFill } from "react-icons/bs";;

const HotelCard = ({ hotel }, { index }) => {
  console.log(hotel);

  return (
    <Link
      key={index}
      to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName} ${hotel?.hotelAddress}`}
      target="_blank"
    >
      <div className="h-[22em] w-[25em] border-2 border-[rgba(59,130,246,0.5)] rounded-none bg-gradient-to-br from-[rgba(59,130,246,1)] to-[rgba(59,130,246,0.01)] text-gray-200 font-nunito p-6  flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[2px] ">
        <div>
          <h1 className="text-[2em] font-medium">{hotel?.hotelName}</h1>
          <p className="text-[0.95em]">Location <BsFillPinMapFill/> {hotel?.hotelAddress}</p>
          <p className="text-[0.95em]">Rating: {hotel?.rating} /5</p>
          <p className="text-[0.95em]">Price: {hotel?.price}</p>
          <p className="text-[0.85em]">{hotel?.description}</p>
        </div>

        <button className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
          <p>Visit </p>
          
        </button>
      </div>

      {/* <div className="rounded-lg shadow-md hover:scale-105 w-96 h-80 p-5 gap-2 bg-gray-200 items-center flex flex-col" >
                <img src={image} alt="Hotel" className="rounded-md w-80 h-auto object-contain" />
                <div>
                <h2 className="font-semibold mt-2">{hotel?.hotelName}</h2>
                <h2 className="text-xs text-gray-600">Location: {hotel?.hotelAddress}</h2>
                <h2 className="text-xs text-gray-600">Price: {hotel?.price}</h2>
                <h2 className="text-xs text-gray-600">Rating: {hotel?.rating}</h2>
                <h2 className="text-xs text-gray-600">{hotel?.description}</h2>

                </div>
            </div> */}
    </Link>
  );
};

export default HotelCard;
