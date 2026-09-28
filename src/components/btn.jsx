import React from 'react';
import Image from 'next/image';

const Button = () => {
  return (
    <div>
      <button className='group rounded-full w-fit ml-2 p-4 bg-neutral-700 cursor-pointer transition-all btn duration-300 ease-in-out transform hover:scale-105 overflow-hidden'>
        <div className='relative h-5 w-5 flex flex-col gap-[1.5vw] translate-x-0 translate-y-0  group-hover:translate-x-[200%] group-hover:translate-y-[-200%] duration-300 ease-in-out'>
          
          <div className=''>
            <Image 
              src='/assets/svg/arrow-upper.svg' 
              width={20} 
              height={20} 
              alt='Arrow up' 
              className='w-full h-full'
            />
          </div>
          
          
          <div className='translate-x-[-200%] '>
            <Image 
              src='/assets/svg/arrow-down.svg' 
              width={20} 
              height={20} 
              alt='Arrow down' 
              className='w-full h-full'
            />
          </div>
        </div>
      </button>
    </div>
  )
}

export default Button;