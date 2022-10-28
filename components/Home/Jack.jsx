import React from 'react'

const Jack = () => {
  return (
    <div className=' overflow-hidden md:overflow-auto no-scrollbar relative after:absolute after:inset-0 after:bg-black/25'>
        <img src="/jacked.png" className='md:hidden' alt="" />
        <img src="/jacked-2.png" className='md:block hidden' alt="" />

        <div className="  flex justify-center  w-full">
            <div className="absolute bottom-8  w-full mx-auto px-6 flex flex-col lg:px-0  z-10 md:top-1/2 md:-translate-y-1/2 md:bottom-0 max-w-7xl">
            <h1 className="text-2xl font-extrabold tracking-tight text-white lg:text-4xl uppercase">
              New: Tigerclaw
            </h1>
            <p className="mt-4 text-xl text-white">
              Tear them a new one.
            </p>
            <a
              href="#"
              className="mt-8 max-w-[140px] inline-block bg-white border border-transparent rounded-full py-3 px-8 text-xs uppercase font-extrabold text-gray-900 hover:bg-gray-100 boop"
            >
              Shop Now
            </a>
                  </div>
        </div>
    </div>
  )
}

export default Jack