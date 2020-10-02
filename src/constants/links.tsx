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

export const INTERNAL_LINKS = {
  home: {
    label: 'Home',
    emoji: <IconifyEmoji icon={house} />,
    href: '/',
  },
  blog: {
    label: 'Blog',
    emoji: <IconifyEmoji icon={writingHand} />,
    href: '/blog',
  },
  labs: {
    label: 'Labs',
    emoji: <IconifyEmoji icon={microscope} />,
    href: '/labs',
  },
  notepad: {
    label: 'Notepad',
    emoji: <IconifyEmoji icon={notebook} />,
    href: '/notepad',
  },
  about: {
    label: 'About',
    emoji: <IconifyEmoji icon={wavingHand} />,
    href: '/about',
  },
}

export const SOCIAL_LINKS = {
  twitter: {
    label: 'Twitter',
    emoji: <TwitterIcon />,
    href: 'https://twitter.com/rdnkta',
  },
  github: {
    label: 'Github',
    emoji: <GithubIcon />,
    href: 'https://github.com/nikita-rudenko',
  },
  linkedin: {
    label: 'LinkedIn',
    emoji: <LinkedInIcon />,
    href: 'https://www.linkedin.com/in/nikita-rudenko-291356183/',
  },
  email: {
    label: 'Email',
    emoji: <EmailIcon />,
    href: 'mailto:n.rud3nko@gmail.com',
  },
}

export const INTERNAL_LINKS_LIST = [...Object.values(INTERNAL_LINKS)]
export const SOCIAL_LINKS_LIST = [...Object.values(SOCIAL_LINKS)]
