import clsx from 'clsx'

import s from './MobileNavIcon.module.css'

const MobileNavIcon = ({ isOpen, setIsOpen }: any) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={clsx(s.navIcon, isOpen && s.open)}
    >
      <span className="bg-yellow-400"></span>
      <span className="bg-yellow-400"></span>
      <span className="bg-yellow-400"></span>
      <span className="bg-yellow-400"></span>
    </div>
  )
}

export default MobileNavIcon
