import { Icon } from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire-alert'
import stormIcon from '@iconify/icons-mdi/weather-hurricane'
import volcanoIcon from '@iconify-icons/noto-v1/volcano'
import icebergIcon from '@iconify-icons/openmoji/iceberg'

const LocationMarker = ({ lat, lng, onClick, eventType }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      {eventType === 'fire' && <Icon icon={fireIcon} className="location-icon" />}
      {eventType === 'storm' && <Icon icon={stormIcon} className="location-icon storm" />}
      {eventType === 'volcano' && <Icon icon={volcanoIcon} className="location-icon" />}
      {eventType === 'iceberg' && <Icon icon={icebergIcon} className="location-icon" />}
    </div>
  )
}

export default LocationMarker
