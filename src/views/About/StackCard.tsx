import Card from '@components/Card'
import Tag from '@components/Tag'
import { TAboutPageData } from '@typings/contentTypes'

type Props = Pick<TAboutPageData, 'stack'>

function StackCard({ stack }: Props) {
  return (
    <Card className="p-4 md:p-6" title="Core stack">
      <div className="flex flex-row flex-wrap p-3 mt-4">
        {stack.map((technology) => (
          <Tag key={technology} label={technology} />
        ))}
      </div>
    </Card>
  )
}

export default StackCard
