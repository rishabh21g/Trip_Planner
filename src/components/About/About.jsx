const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-screen  md:px-12 lg:px-24 py-12 px-12 mx-auto max-w-7xl">
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
          src="https://plus.unsplash.com/premium_photo-1681487924146-c091598b7e8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-auto md:w-full md:h-auto object-cover rounded-none shadow-lg"
          alt="Trip-X Adventure"
        />
      </div>
    </div>
  );
};

export default About;
