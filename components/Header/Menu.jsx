/* eslint-disable @next/next/no-img-element */
import React, {Fragment} from 'react'
import { Dialog, Popover, Tab, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
const navigation = {
    categories: [
      {
        id: "women",
        name: "Women",
        featured: [
          {
            name: "New Arrivals",
            href: "#",
            imageSrc:
              "/womens-new-arrivals.png",
            imageAlt:
              "Models wearing blank tank and pink shorts.",
          },
          {
            name: "Gym Suits",
            href: "#",
            imageSrc:
              "/womens-gymsuits.png",
            imageAlt:
              "Two models wearing tight gym clothing",
          },
          {
            name: "Group Sets",
            href: "#",
            imageSrc:
              "womens-sets.png",
            imageAlt:
              "Model wearing minimalist watch with black wristband and white watch face.",
          },
        ],
        sections: [
          [
            {
              id: "shoes",
              name: "Shoes & Accessories",
              items: [
                { name: "Sneakers", href: "#" },
                { name: "Boots", href: "#" },
                { name: "Flats", href: "#" },
                { name: "Sandals", href: "#" },
                { name: "Heels", href: "#" },
                { name: "Socks", href: "#" },
              ],
            },
            {
              id: "collection",
              name: "Shop Collection",
              items: [
                { name: "Everything", href: "#" },
                { name: "Core", href: "#" },
                { name: "New Arrivals", href: "#" },
                { name: "Sale", href: "#" },
                { name: "Accessories", href: "#" },
              ],
            },
          ],
          [
            {
              id: "clothing",
              name: "All Clothing",
              items: [
                { name: "Basic Tees", href: "#" },
                { name: "Artwork Tees", href: "#" },
                { name: "Tops", href: "#" },
                { name: "Bottoms", href: "#" },
                { name: "Swimwear", href: "#" },
                { name: "Underwear", href: "#" },
              ],
            },
            {
              id: "accessories",
              name: "All Accessories",
              items: [
                { name: "Watches", href: "#" },
                { name: "Wallets", href: "#" },
                { name: "Bags", href: "#" },
                { name: "Sunglasses", href: "#" },
                { name: "Hats", href: "#" },
                { name: "Belts", href: "#" },
              ],
            },
          ],
          [
            {
              id: "brands",
              name: "Brands",
              items: [
                { name: "Full Nelson", href: "#" },
                { name: "My Way", href: "#" },
                { name: "Re-Arranged", href: "#" },
                { name: "Counterfeit", href: "#" },
                { name: "Significant Other", href: "#" },
              ],
            },
          ],
        ],
      },
      {
        id: "men",
        name: "Men",
        featured: [
          {
            name: "Accessories",
            href: "#",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg",
            imageAlt:
              "Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.",
          },
          {
            name: "New Arrivals",
            href: "#",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
            imageAlt:
              "Drawstring top with elastic loop closure and textured interior padding.",
          },
          {
            name: "Tigergear",
            href: "#",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
            imageAlt:
              "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
          },
        ],
        sections: [
          [
            {
              id: "shoes",
              name: "Shoes & Accessories",
              items: [
                { name: "Sneakers", href: "#" },
                { name: "Boots", href: "#" },
                { name: "Sandals", href: "#" },
                { name: "Socks", href: "#" },
              ],
            },
            {
              id: "collection",
              name: "Shop Collection",
              items: [
                { name: "Everything", href: "#" },
                { name: "Core", href: "#" },
                { name: "New Arrivals", href: "#" },
                { name: "Sale", href: "#" },
              ],
            },
          ],
          [
            {
              id: "clothing",
              name: "All Clothing",
              items: [
                { name: "Basic Tees", href: "#" },
                { name: "Artwork Tees", href: "#" },
                { name: "Pants", href: "#" },
                { name: "Hoodies", href: "#" },
                { name: "Swimsuits", href: "#" },
              ],
            },
            {
              id: "accessories",
              name: "All Accessories",
              items: [
                { name: "Watches", href: "#" },
                { name: "Wallets", href: "#" },
                { name: "Bags", href: "#" },
                { name: "Sunglasses", href: "#" },
                { name: "Hats", href: "#" },
                { name: "Belts", href: "#" },
              ],
            },
          ],
          [
            {
              id: "brands",
              name: "Brands",
              items: [
                { name: "Re-Arranged", href: "#" },
                { name: "Counterfeit", href: "#" },
                { name: "Full Nelson", href: "#" },
                { name: "My Way", href: "#" },
              ],
            },
          ],
        ],
      },
    ],
    pages: [
      { name: "Company", href: "#" },
      { name: "Stores", href: "#" },
    ],
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }
const Menu = ({open, setOpen}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
    <Dialog
      as="div"
      className="fixed inset-0 flex z-40 lg:hidden"
      onClose={setOpen}
    >
      <Transition.Child
        as={Fragment}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <Transition.Child
        as={Fragment}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="relative max-w-xs w-full bg-neutral-800 shadow-xl pb-12 flex flex-col overflow-y-auto no-scrollbar">
          <div className="px-4 pt-5 pb-2 flex bg-white">
            <button
              type="button"
              className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Links */}
          <Tab.Group as="div">
            <div className="border-b border-black bg-white">
              <Tab.List className="-mb-px flex px-4 space-x-8">
                {navigation.categories.map((category) => (
                  <Tab
                    key={category.name}
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? "text-orange-600 border-orange-600"
                          : "text-gray-500 border-transparent opacity-50",
                        "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-sm font-medium uppercase"
                      )
                    }
                  >
                    {category.name}
                  </Tab>
                ))}
              </Tab.List>
            </div>
            <Tab.Panels as={Fragment}>
              {navigation.categories.map((category) => (
                <Tab.Panel
                  key={category.name}
                  className="pt-10 pb-8 px-4 space-y-10 bg-neutral-800"
                >
                  <div className="space-y-4">
                    {category.featured.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="group relative aspect-w-1 aspect-h-1 rounded-xl bg-gray-800 overflow-hidden"
                      >
                        <img
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          className="object-center object-cover group-hover:opacity-75"
                        />
                        <div className="flex flex-col justify-end">
                          <div className="p-4 bg-black bg-opacity-60 text-base sm:text-sm">
                            <a
                              href={item.href}
                              className="font-medium text-gray-100"
                            >
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                           
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {category.sections.map((column, columnIdx) => (
                    <div key={columnIdx} className="space-y-10">
                      {column.map((section) => (
                        <div key={section.name}>
                          <p
                            id={`${category.id}-${section.id}-heading-mobile`}
                            className="font-medium text-white"
                          >
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-1"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root hover:bg-neutral-700 py-2 px-1 rounded-lg">
                                <a
                                  href={item.href}
                                  className="-m-2 p-2 block text-gray-300"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          <div className="bg-neutral-800 border-t border-neutral-700 py-6 px-4 space-y-6">
            {navigation.pages.map((page) => (
              <div key={page.name} className="flow-root">
                <a
                  href={page.href}
                  className="-m-2 p-2 block font-medium text-gray-200"
                >
                  {page.name}
                </a>
              </div>
            ))}
          </div>

          <div className="border-t bg-neutral-800 border-neutral-700 py-6 px-4">
            <a href="#" className="-m-2 p-2 flex items-center">
              <img
                src="https://tailwindui.com/img/flags/flag-united-states.svg"
                alt=""
                className="w-5 h-auto block flex-shrink-0"
              />
              <span className="ml-3 block text-base font-medium text-gray-200">
                USD
              </span>
              <span className="sr-only">, change currency</span>
            </a>
          </div>
        </div>
      </Transition.Child>
    </Dialog>
  </Transition.Root>
  )
}

export default Menu