import React from "react"

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800 cursor-pointer ">
        <h5 className="font-bold">ABOUT</h5>
        <p className="hover:underline">How Airbnb works</p>
        <p className="hover:underline">Newsroom</p>
        <p className="hover:underline">Investors</p>
        <p className="hover:underline">Airbnb Plus</p>
        <p className="hover:underline">Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 cursor-pointer">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="hover:underline">Accessibility</p>
        <p className="hover:underline">This is not a real site</p>
        <p className="hover:underline">It's a clone</p>
        <p className="hover:underline">Referrals accepted</p>
        <p className="hover:underline">Faik Meta</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 cursor-pointer">
        <h5 className="font-bold">HOST</h5>
        <p className="hover:underline">Airbnb your home</p>
        <p className="hover:underline">AirCover for hosts</p>
        <p className="hover:underline">Explore hosting resources</p>
        <p className="hover:underline">Visit our community forum</p>
        <p className="hover:underline">How to host responsibly</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 cursor-pointer">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="hover:underline">Help Centre</p>
        <p className="hover:underline">AirCover</p>
        <p className="hover:underline">Supporting people with disabilities</p>
        <p className="hover:underline">Cancellation options</p>
        <p className="hover:underline">Our COVID-19 Response</p>
      </div>
    </div>
  )
}

export default Footer
