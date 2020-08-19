import { GithubIcon } from '@components/SVG'

import ExtLink from './ExtLink'

type Props = {
  href: string
}

const GithubLink = ({ href }: Props) => {
  return (
    <ExtLink
      className="bg-mononchrome-700"
      href={href}
      icon={<GithubIcon />}
      label="Github"
    />
  )
}

export default GithubLink
