import React, { useState, useRef } from "react"
import Image from "next/image"
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range"
import { useRouter } from "next/router"

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [numberOfGuests, setNumberOfGuests] = useState(1)
  const [toggleMenu, setToggleMenu] = useState(false)
  const menuDropDown = useRef(null)
  const searchDropDown = useRef("")
  const router = useRouter()

  const search = () => {
    const location = searchInput !== " " ? searchInput : "Anywhere"

    router.push({
      pathname: "/search",
      query: {
        location: location,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: numberOfGuests,
      },
    })
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  // Resets searchInput so that the date range picker closes
  const resetInput = () => {
    setSearchInput("")
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  const closeOpenMenu = (e) => {
    if (
      menuDropDown.current &&
      toggleMenu &&
      !menuDropDown.current.contains(e.target)
    ) {
      setToggleMenu(false)
    }
    if (
      searchDropDown.current &&
      searchInput != "" &&
      !searchDropDown.current.contains(e.target)
    ) {
      resetInput()
    }
  }

  typeof window !== "undefined" &&
    document.addEventListener("mousedown", closeOpenMenu)

  return (
    <header className="sticky top-0 z-10 grid  grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer"
      >
        <Image
          src="/airbnb-logo-long.png"
          fill
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Center */}
      <div className="flex md:border-2 rounded-full py-2 md:shadow-sm md:hover:shadow-md transition duration-150">
        <input
          type="text"
          placeholder={placeholder || "Anywhere"}
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400 sm:placeholder:text-center"
          value={searchInput}
          onClick={(e) => setSearchInput(" ")}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <MagnifyingGlassIcon
          onClick={search}
          className="hidden lg:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer stroke-white mx-2"
        />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-900">
        <p className="hidden lg:inline-flex font-semibold hover:bg-gray-100 rounded-3xl p-3 cursor-pointer">
          Airbnb your home
        </p>
        <GlobeAltIcon className="hidden lg:inline-flex h-6 box-content hover:bg-gray-100 p-3 rounded-3xl cursor-pointer" />

        {toggleMenu ? (
          <div
            className="flex space-x-2 border-2 p-2 rounded-full items-center hover:shadow-md transition duration-150 cursor-pointer"
            ref={menuDropDown}
            onClick={() => setToggleMenu(false)}
          >
            <Bars3Icon className="h-6 stroke-gray-500" />
            <UserCircleIcon className="h-8" />
          </div>
        ) : (
          <div
            className="flex space-x-2 border-2 p-2 rounded-full items-center hover:shadow-md transition duration-150 cursor-pointer"
            ref={menuDropDown}
            onClick={() => setToggleMenu(true)}
          >
            <Bars3Icon className="h-6 stroke-gray-500" />
            <UserCircleIcon className="h-8" />
          </div>
        )}

        {/* Dropdown Menu */}
        {toggleMenu && (
          <div className="bg-white rounded-xl w-[240px] absolute top-20 drop-shadow-2xl text-start right-12">
            <ul className=" py-4 cursor-pointer">
              <li className="font-semibold py-2 hover:bg-gray-100">
                <span className="px-4 py-4">Sign up</span>
              </li>
              <li className="hover:bg-gray-100 py-2">
                <span className="px-4">Log in</span>
              </li>
            </ul>
            <hr className="px-0 w-full border-gray-300"></hr>
            <ul className=" py-4 cursor-pointer">
              <li className="py-2 hover:bg-gray-100">
                <span className="px-4 py-4">Airbnb your home</span>
              </li>
              <li className="hover:bg-gray-100 py-2">
                <span className="px-4">Help</span>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Search Menu */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto" ref={searchDropDown}>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="flex  items-center border-b mb-4">
            <h2 className="2xl flex-grow font-semibold">Number of Guests</h2>

            <UsersIcon className="h-5" />

            <input
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              type="number"
              min={1}
              max={16}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>

          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-500">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
