import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { TRenderProps } from '@typings/commonPropTypes'

import codeTheme from './codeTheme'

const CodeBlock = ({ children }: TRenderProps) => {
  return (
    <SyntaxHighlighter
      language="jsx"
      style={codeTheme}
      showLineNumbers
      lineNumberStyle={{ color: '#495162', paddingRight: '16px' }}
    >
      {children}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
