import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router'


const Hero = () => {
  return (
    <div className=' items-center flex flex-col mx-auto gap-8 max-w-full xl:px-40 lg:px-36 md:px-20 sm:px-16 px-12 mt-12'>
      <h1 className='font-bold xl:text-7xl md:text-5xl sm:text-3xl text-center  text-5xl '>
      <span className='text-fuchsia-700'>Explore smarter with Trip-X your AI-powered trip planner.</span>
      <p className=' text-gray-600 font-semibold  text-center text-lg mt-5'> Get personalized itineraries, hidden gems, and hassle-free travel planning in seconds!</p>
      </h1>
      <Link to="/create-trip">
      <Button>Get Started for free</Button>
      </Link>
    </div>
  )
}

export default Hero