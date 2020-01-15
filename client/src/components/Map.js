import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 40.741895,
    longitude: -73.989308,
    width: '100vw',
    height:'100vh',
    zoom: 10
  })
  return (
    <ReactMapGL
      { ...viewport }
      mapboxApiAccessToken={ process.env.REACT_APP_MAPBOX_TOKEN }
      mapStyle="mapbox://styles/kmacancela/ck3ekctb04yyt1cqpip9ucax2"
      onViewportChange={viewport => {
        setViewport(viewport)
      }} >
      markers here
    </ReactMapGL>
  )
}
