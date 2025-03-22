import React from "react";

const VisitBtn = () => {
  return (
    <button className="overflow-hidden relative w-28 p-2 h-8 bg-transparent border border-gray-300 text-gray-200 text-xs font-bold cursor-pointer z-10 group">
      Visit and
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-300 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
        Explore!
      </span>
    </button>
  );
};

export default VisitBtn;
