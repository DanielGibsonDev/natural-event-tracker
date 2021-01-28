import { useState } from 'react'

import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map(ev => {
    const whatEventType = (id) => {
      if (id === 8) return 'fire'
      if (id === 10) return 'storm'
      if (id === 12) return 'volcano'
      if (id === 15) return 'iceberg'
    }

    if (ev.geometries[0].type === 'Polygon') return null

    return <LocationMarker
      key={ev.id}
      lat={ev.geometries[0].coordinates[1]}
      lng={ev.geometries[0].coordinates[0]}
      eventType={whatEventType(ev.categories[0].id)}
      onClick={() => setLocationInfo({
        id: ev.id,
        title: ev.title,
        description: ev.description,
        type: ev.categories[0].title,
        date: ev.geometries[0].date,
        icon: whatEventType(ev.categories[0].id)
      })}
    />
  })

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: -20.5505,
    lng: 156.7132
  },
  zoom: 4
}

export default Map
