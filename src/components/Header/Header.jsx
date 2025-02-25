import React from 'react';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className='max-w-full flex justify-between mx-auto items-center xl:px-6 md:px-4 px-8 my-2 p-3 shadow-md'>
      <span className='flex justify-center items-center font-bold  xl:text-4xl md:text-3xl text-2xl text-fuchsia-700'>TRIP-X <lord-icon
        src="https://cdn.lordicon.com/onmwuuox.json"
        trigger="loop"
        delay="500"
        stroke="bold"
        state="in-jump-dynamic"
        colors="primary:#a800b7,secondary:#a800b7"
        >
      </lord-icon></span>
      <Button>Sign In</Button>
    </header>
  )
}

export default Header