import { ExternalLinkIcon } from '@components/SVG'

import ExtLink from './ExtLink'

type Props = {
  href: string
  label: string
}

const OtherLink = ({ href, label }: Props) => {
  return (
    <ExtLink
      className="bg-blue-700"
      href={href}
      icon={<ExternalLinkIcon />}
      label={label}
    />
  )
}

export default OtherLink
