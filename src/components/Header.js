import { Icon } from '@iconify/react'
import worldIcon from '@iconify-icons/subway/world-1'
import alertIcon from '@iconify/icons-mdi/flash-alert'

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={worldIcon} />
        Natural Event Tracker (Powered By NASA)
        <Icon icon={alertIcon} />
      </h1>
    </header>
  )
}

export default Header
