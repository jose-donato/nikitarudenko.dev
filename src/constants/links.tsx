import house from '@iconify/icons-noto/house'
import microscope from '@iconify/icons-noto/microscope'
import notebook from '@iconify/icons-noto/notebook-with-decorative-cover'
import wavingHand from '@iconify/icons-noto/waving-hand'
import writingHand from '@iconify/icons-noto/writing-hand'

import { IconifyEmoji } from '@components/SVG'

const LINKS = [
  {
    label: 'Home',
    emoji: <IconifyEmoji icon={house} height={20} />,
    href: '/',
  },
  {
    label: 'Blog',
    emoji: <IconifyEmoji icon={writingHand} height={20} />,
    href: '/blog',
  },
  {
    label: 'Labs',
    emoji: <IconifyEmoji icon={microscope} height={20} />,
    href: '/labs',
  },
  {
    label: 'Notepad',
    emoji: <IconifyEmoji icon={notebook} height={20} />,
    href: '/notepad',
  },
  {
    label: 'About',
    emoji: <IconifyEmoji icon={wavingHand} height={20} />,
    href: '/about',
  },
]

export default LINKS
