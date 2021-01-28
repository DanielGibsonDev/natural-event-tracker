import { Icon } from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire-alert'
import stormIcon from '@iconify/icons-mdi/weather-hurricane'
import volcanoIcon from '@iconify-icons/noto-v1/volcano'
import icebergIcon from '@iconify-icons/openmoji/iceberg'

const LocationInfoBox = ({ info }) => {
  const renderedDate = date => {
    return new Date(date).toString().substring(0, 21)
  }

  return (
    <div className="location-info">
      <h2>
        {info.icon === 'fire' && <Icon icon={fireIcon} className="location-icon" />}
        {info.icon === 'storm' && <Icon icon={stormIcon} className="location-icon storm" />}
        {info.icon === 'volcano' && <Icon icon={volcanoIcon} className="location-icon" />}
        {info.icon === 'iceberg' && <Icon icon={icebergIcon} className="location-icon" />}
        {info.type}
      </h2>
      <ul>
        <li>{info.title}</li>
        <li>{info.description}</li>
        <li className='date'>{renderedDate(info.date)}</li>
      </ul>
    </div>
  )
}

export default LocationInfoBox
