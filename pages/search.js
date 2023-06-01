import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useRouter } from "next/router"
import React from "react"
import { format } from "date-fns"
import InfoCard from "@/components/InfoCard"
import Map from "@/components/Map"

function Search({ searchResults }) {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query
  const formattedStartDate = format(new Date(startDate), "MMM dd")
  const formattedEndDate = format(new Date(endDate), "MMM dd")
  const range = `${formattedStartDate} - ${formattedEndDate}`
  //get a numerical value of the date rage for total cost calculation
  const start = new Date(startDate)
  const end = new Date(endDate)
  const timeDiff = end.getTime() - start.getTime()
  const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24))

  return (
    <div>
      <div className="hidden lg:block">
        <Header
          placeholder={`${location} | ${range} | ${noOfGuests} guest(s)`}
        />
      </div>

      <main className="flex">
        <section className="flex-grow pt-14 px-6 border-b">
          <p className="text-xs">
            300+ Stays for {range} for {noOfGuests} Guest(s)
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults?.record.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  alt="Location"
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={`$${price} / night`}
                  total={`$${price * numDays} total`}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://api.jsonbin.io/v3/b/642b5ba5c0e7653a059d2b42"
  ).then((res) => res.json())

  return {
    props: {
      searchResults,
    },
  }
}
