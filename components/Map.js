import React, { useState } from "react"
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import getCenter from "geolib/es/getCenter"

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({})

  const coordinates = searchResults.record.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/faiknet/clg3ckeqo003f01t2bqzyfitf"
      mapboxAccessToken={process.env.access_key}
      initialViewState={{ ...viewport }}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults?.record.map((result) => (
        <Marker key={result.long} longitude={result.long} latitude={result.lat}>
          <p>🧍</p>
        </Marker>
      ))}
    </ReactMapGL>
  )
}

export default Map
