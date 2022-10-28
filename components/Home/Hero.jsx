/* eslint-disable @next/next/no-img-element */
import React from "react"


const Hero = () => {
  return (
    <div className="relative bg-gray-900">
      {/* Decorative image and overlay */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src="/hero.jpg"
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 opacity-40"
      />

      <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
        <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl uppercase">
          New: Tigergear
        </h1>
        <p className="mt-4 text-xl text-white">
          Equip yourself with the softest and most breathable gym clothes on
          earth.
        </p>
        <a
          href="#"
          className="mt-8 inline-block bg-white border border-transparent rounded-full py-3 px-8 text-xs uppercase font-extrabold text-gray-900 hover:bg-gray-100 boop"
        >
          Shop Now
        </a>
      </div>
    </div>
  )
}

export default Hero
