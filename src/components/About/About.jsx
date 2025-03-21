import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-screen px-6 md:px-12 lg:px-24 py-12 mx-auto">
      <div className="w-full md:w-3/4 flex items-center">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-500">About Trip-X</h1>

          {/* Key Features */}
          <div className="flex flex-wrap mt-8 font-light text-gray-400 gap-4">
            <div className="w-1/2 md:w-auto">
              <span className="uppercase block">AI-Powered</span>
              <p className="text-xl md:text-2xl text-gray-300 font-semibold pt-2">Smart Planning</p>
            </div>
            <div className="w-1/2 md:w-auto">
              <span className="uppercase block">Customizable</span>
              <p className="text-xl md:text-2xl text-gray-300 font-semibold pt-2">Tailored Trips</p>
            </div>
            <div className="w-full md:w-auto">
              <span className="uppercase block">Seamless</span>
              <p className="text-xl md:text-2xl text-gray-300 font-semibold pt-2">Hassle-Free</p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 text-gray-200 text-base md:text-lg leading-relaxed">
            Trip-X is an AI-powered trip planner designed to make your travel hassle-free.
            Whether you seek adventure, relaxation, or a perfect itinerary, our advanced AI-driven
            system carefully analyzes your travel style, interests, and budget to create
            personalized recommendations. From selecting top-rated destinations and comfortable
            accommodations to providing real-time insights on local attractions, hidden gems, and
            exclusive deals, Trip-X ensures a seamless and stress-free journey. Our intelligent
            planner adapts to your preferences, allowing you to explore the world with ease and
            confidence. Let Trip-X handle the details while you focus on making unforgettable
            memories.
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 flex justify-center mt-10 md:mt-0">
        <img
          src="https://cdn.pixabay.com/photo/2021/12/02/10/50/ice-6840241_1280.jpg"
          className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-cover rounded-lg shadow-lg"
          alt="Trip-X Adventure"
        />
      </div>
    </div>
  );
};

export default About;
