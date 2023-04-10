import React from "react"
import Image from "next/image"

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="/Flexible.jpg" fill objectFit="cover" />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-white stroke-black">Where to?</p>

        <button className="text-red-400 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
