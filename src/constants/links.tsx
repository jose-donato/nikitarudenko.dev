import houseEmoji from '@iconify/icons-noto/house'
import microscopeEmoji from '@iconify/icons-noto/microscope'
import notebookEmoji from '@iconify/icons-noto/notebook-with-decorative-cover'
import wavingHandEmoji from '@iconify/icons-noto/waving-hand'
import writingHandEmoji from '@iconify/icons-noto/writing-hand'
import { InlineIcon } from '@iconify/react'

const LINKS = [
  {
    label: 'Home',
    emoji: <InlineIcon icon={houseEmoji} />,
    href: '/',
  },
  {
    label: 'Blog',
    emoji: <InlineIcon icon={writingHandEmoji} />,
    href: '/blog',
  },
  {
    label: 'Labs',
    emoji: <InlineIcon icon={microscopeEmoji} />,
    href: '/labs',
  },
  {
    label: 'Notepad',
    emoji: <InlineIcon icon={notebookEmoji} />,
    href: '/notepad',
  },
  {
    label: 'About',
    emoji: <InlineIcon icon={wavingHandEmoji} />,
    href: '/about',
  },
]

export default LINKS
