import * as React from 'react'

import { TSpreadProps } from '@typings/commonPropTypes'

function EmailIcon(props: TSpreadProps) {
  return (
    <svg height="1em" width="1em" viewBox="0 0 465.882 465.882" {...props}>
      <path d="M232.941 0C104.499 0 0 104.499 0 232.941s104.499 232.941 232.941 232.941c40.961 0 81.239-10.777 116.499-31.179l-29.146-50.416c-26.416 15.284-56.629 23.36-87.353 23.36-96.338 0-174.706-78.368-174.706-174.706S136.603 58.235 232.941 58.235s174.706 78.368 174.706 174.706v25.364c0 19.052-12.241 32.871-29.118 32.871-16.052 0-29.118-13.066-29.118-29.118v-116.47H309.16c-20.484-17.895-46.948-29.118-76.219-29.118-64.221 0-116.471 52.25-116.471 116.471s52.25 116.471 116.471 116.471c30.582 0 58.232-12.094 79.036-31.442 16.036 19.057 39.754 31.442 66.552 31.442 48.98 0 87.353-40.022 87.353-91.107v-25.364C465.882 104.499 361.383 0 232.941 0zm0 291.176c-32.118 0-58.235-26.118-58.235-58.235 0-32.118 26.118-58.235 58.235-58.235 32.118 0 58.235 26.118 58.235 58.235 0 32.118-26.117 58.235-58.235 58.235z" />
    </svg>
  )
}

export default EmailIcon
