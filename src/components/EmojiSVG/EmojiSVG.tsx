type Props = {
  src: string
}

const EmojiSVG = ({ src }: Props) => {
  return <span dangerouslySetInnerHTML={{ __html: src }}></span>
}

export default EmojiSVG
