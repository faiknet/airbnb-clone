import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"

function Banner() {
  const router = useRouter()
  const flexibleSearch = () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const startDate = today.toISOString().substring(0, 10)
    const endDate = tomorrow.toISOString().substring(0, 10)

    router.push({
      pathname: "/search",
      query: {
        location: "Anywhere",
        startDate,
        endDate,
        noOfGuests: "1",
      },
    })
  }

  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="/Flexible.jpg" fill objectFit="cover" />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-white stroke-black">Where to?</p>

        <button
          className="text-red-400 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
          onClick={flexibleSearch}
        >
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
