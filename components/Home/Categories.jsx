/* eslint-disable @next/next/no-img-element */

import Link from "next/link"

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const categories = [
    {
      name: 'Women',
      href: '#',
      imageSrc: '/womens-new-arrivals.png',
      imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
      description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
    },
    {
      name: 'Men',
      href: '#',
      imageSrc: '/mens-cat.png',
      imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
      description: 'The rest of the house will still be a mess, but your desk will look great.',
    },
    {
      name: 'Sale',
      href: '#',
      imageSrc: '/sale.png',
      imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
      description: 'Be more productive than enterprise project managers with a single piece of paper.',
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white relative">
        <div className="absolute inset-y-0 bottom-4 left-0 w-1/2 bg-gray-50 rounded-r-3xl z-0 -translate-y-8" />
        <div className="max-w-xl mx-auto py-16 pt-0 px-4  sm:px-6 lg:max-w-7xl lg:px-8 z-10">
        <div className="flex md:items-center md:justify-between z-20">
          <h2
            id="favorites-heading"
            className="text-2xl lg:text-[32px] font-extrabold tracking-tight text-neutral-700 z-20"
          >
            Categories
          </h2>
          <Link
            href={`/collection`}
            className="hidden text-sm font-medium text-neutral-600 hover:text-neutral-500 md:block"
          >
            Shop all catagories<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
  
          <div className="mt-6 space-y-12 lg:space-y-0 grid lg:grid-cols-3 lg:gap-x-8">
            {categories.map((category) => (
              <a key={category.name} href={category.href} className="group block z-10">
                <div
                  aria-hidden="true"
                  className="aspect-w-3 aspect-h-2 rounded-3xl overflow-hidden group-hover:opacity-75 "
                >
                  <img
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
                
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  