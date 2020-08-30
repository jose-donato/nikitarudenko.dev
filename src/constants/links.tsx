import house from '@iconify/icons-noto/house'
import microscope from '@iconify/icons-noto/microscope'
import notebook from '@iconify/icons-noto/notebook-with-decorative-cover'
import wavingHand from '@iconify/icons-noto/waving-hand'
import writingHand from '@iconify/icons-noto/writing-hand'

import {
  IconifyEmoji,
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@components/SVG'

const INTERNAL_LINKS = [
  {
    label: 'Home',
    emoji: <IconifyEmoji icon={house} />,
    href: '/',
  },
  {
    label: 'Blog',
    emoji: <IconifyEmoji icon={writingHand} />,
    href: '/blog',
  },
  {
    label: 'Labs',
    emoji: <IconifyEmoji icon={microscope} />,
    href: '/labs',
  },
  {
    label: 'Notepad',
    emoji: <IconifyEmoji icon={notebook} />,
    href: '/notepad',
  },
  {
    label: 'About',
    emoji: <IconifyEmoji icon={wavingHand} />,
    href: '/about',
  },
]

const SOCIAL_LINKS = [
  {
    label: 'Twitter',
    emoji: <TwitterIcon />,
    href: '/',
  },
  {
    label: 'Github',
    emoji: <GithubIcon />,
    href: '/',
  },
  {
    label: 'LinkedIn',
    emoji: <LinkedInIcon />,
    href: '/',
  },
  {
    label: 'Email',
    emoji: <EmailIcon />,
    href: '/',
  },
]

export { SOCIAL_LINKS, INTERNAL_LINKS }
