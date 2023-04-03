import React from "react"
import Image from "next/image"
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid"

function Header() {
  return (
    <header className="sticky top-0 z-10 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          fill
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Center */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm md:hover:shadow-md transition duration-150">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400"
        ></input>
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer stroke-white mx-2" />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 cursor-pointer">
        <p className="font-semibold hidden md:inline-flex hover:bg-gray-100 rounded-3xl p-3">
          Airbnb your home
        </p>
        <GlobeAltIcon className="h-6 box-content hover:bg-gray-100 p-3 rounded-3xl" />

        <div className="flex space-x-2 border-2 p-2 rounded-full items-center hover:shadow-md transition duration-150">
          <Bars3Icon className="h-6 stroke-gray-500" />
          <UserCircleIcon className="h-8" />
        </div>
      </div>
    </header>
  )
}

export default Header
