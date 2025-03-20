import { Button } from '../ui/button';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto gap-8 max-w-full xl:px-40 lg:px-36 md:px-20 sm:px-16 px-12 mt-12 text-center">
      <h1 className="font-bold xl:text-7xl md:text-5xl sm:text-3xl text-5xl text-white">
        Explore smarter with <span className="text-blue-400">Trip-X</span>
      </h1>
      <p className="text-gray-200 font-semibold text-xl mt-2">
        Get personalized itineraries, hidden gems, and hassle-free travel planning in seconds!
      </p>
      
      
      <Link to="/create-trip">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3  rounded-none px-6 shadow-lg">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default Hero;
