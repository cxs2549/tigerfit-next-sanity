/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"
const trendingProducts = [
  {
    id: 1,
    name: "Tigress Unitard",
    color: "Black",
    price: "$75",
    href: "#",
    imageSrc: "/womens-1.png",
    imageAlt: "Hand stitched, neutral leather long wallet.",
  },
  {
    id: 2,
    name: "Tigress Tights",
    color: "Oceanwave",
    price: "$75",
    href: "#",
    imageSrc: "/womens-2.png",
    imageAlt: "Hand stitched, neutral leather long wallet.",
  },
  {
    id: 3,
    name: "Tiger-tee",
    color: "Blue",
    price: "$75",
    href: "#",
    imageSrc: "mens-1.png",
    imageAlt: "Hand stitched, neutral leather long wallet.",
  },
  {
    id: 4,
    name: "Tiger Shorts",
    color: "Cement Brown",
    price: "$75",
    href: "#",
    imageSrc: "mens-2.png",
    imageAlt: "Hand stitched, neutral leather long wallet.",
  },
  // More products...
]
const Trending = () => {
  return (
    <section aria-labelledby="trending-heading" className="relative">
      <svg
        className="absolute top-8 left-1/2 -ml-3"
        width={404}
        height={392}
        fill="none"
        viewBox="0 0 404 392"
      >
        <defs>
          <pattern
            id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={392}
          fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
        />
      </svg>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6  lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2
            id="favorites-heading"
            className="text-2xl lg:text-[32px] font-extrabold tracking-tight text-neutral-700"
          >
            Trending
          </h2>
          <Link
            href={`/collection`}
            className="hidden text-sm font-medium text-neutral-600 hover:text-neutral-500 md:block"
          >
            Shop the collection<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {trendingProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full h-56 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a
            href="#"
            className="font-medium text-orange-600 hover:text-orange-500"
          >
            Shop the collection<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Trending
