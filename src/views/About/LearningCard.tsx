import Card from '@components/Card'
import MarkdownContent from '@components/MarkdownContent'
import { TAboutPageData } from '@typings/contentTypes'

type Props = Pick<TAboutPageData, 'learning'>

function LearningCard({ learning }: Props) {
  return (
    <Card className="p-4 md:p-6" title="Learning">
      <div className="p-3 mt-4 font-body">
        <MarkdownContent content={learning} />
      </div>
    </Card>
  )
}

export default LearningCard
