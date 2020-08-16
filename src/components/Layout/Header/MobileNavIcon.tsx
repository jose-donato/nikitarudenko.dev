import clsx from 'clsx'

import s from './MobileNavIcon.module.css'

const MobileNavIcon = ({ isOpen, setIsOpen }: any) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={clsx(s.navIcon, isOpen && s.open)}
    >
      <span className="bg-gray-200"></span>
      <span className="bg-gray-200"></span>
      <span className="bg-gray-200"></span>
      <span className="bg-gray-200"></span>
    </div>
  )
}

export default MobileNavIcon
