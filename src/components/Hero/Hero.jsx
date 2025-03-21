import { Link } from 'react-router';
import StartPlan from "../btn/btn"
const Hero = () => {
  return (
    <section className="pt-24 bg-transparent">
    <div className="px-12 mx-auto max-w-7xl">
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-300 md:text-6xl md:tracking-tight">
          <span>Plan</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-400 to-gray-400 lg:inline">your dream trip</span> <span>with trip-X</span>
        </h1>
        <p className="px-0 mb-8 text-lg text-gray-200 md:text-xl lg:px-24">
          Let Trip-X simplify your travel experience. Get AI-powered recommendations, personalized itineraries, and effortless trip planning in one place.
        </p>
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
          <Link to="/create-trip">
            <StartPlan/>
         </Link>
        </div>
      </div>
      <div className="w-full mx-auto mt-20 text-center md:w-10/12">
        <div className="relative z-0 w-full mt-8">
          <div className="relative overflow-hidden shadow-2xl">
            <div className="flex items-center flex-none px-4 bg-blue-500 rounded-none h-11  hover:bg-blue-600">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                <div className="w-3 h-3 border-2 border-white rounded-full"></div>
              </div>
            </div>
            <img src="https://cdn.pixabay.com/photo/2020/11/14/19/42/road-5743713_1280.jpg" alt="Trip-X Dashboard" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
