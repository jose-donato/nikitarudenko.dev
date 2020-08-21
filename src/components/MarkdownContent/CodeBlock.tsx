import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { TRenderProps } from '@typings/commonPropTypes'

import codeTheme from './codeTheme'

const CodeBlock = ({ children }: TRenderProps) => {
  return (
    <SyntaxHighlighter language="jsx" style={codeTheme}>
      {children}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
