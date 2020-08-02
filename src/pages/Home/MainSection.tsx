import Link from 'next/link'

import Card from '@components/Card'

import blogPosts from './data/blogPosts'
import projects from './data/projects'
import snippets from './data/snippets'

const MainSection = (): JSX.Element => (
  <section
    className="min-h-screen px-4 py-8 md:py-16 bg-mononchrome-400"
    style={{
      backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
    }}
  >
    <div className="grid max-w-screen-md grid-cols-1 gap-5 mx-auto sm:grid-cols-2">
      <BlogCard />
      <ProjectsCard />
      <SnippetsCard />
    </div>
  </section>
)

const BlogCard = () => {
  return (
    <Card className="sm:col-span-2" title="Blog">
      <ul className="mt-4">
        {blogPosts.map(({ title, date, slug, description }) => {
          return (
            <li
              className="p-3 rounded-md font-body hover:bg-yellow-400 hover:bg-opacity-50"
              key={slug}
            >
              <Link href={`/${slug}`}>
                <a>
                  <div className="flex items-baseline">
                    <div className="text-base font-bold md:text-lg text-mononchrome-900">
                      {title}
                    </div>
                    <div className="hidden ml-auto text-sm font-bold md:block font-body text-mononchrome-400">
                      {date}
                    </div>
                  </div>
                  <div className="mt-1 text-sm font-bold md:mt-2 md:text-base text-mononchrome-400">
                    {description}
                  </div>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

const ProjectsCard = () => {
  return (
    <Card title="Projects">
      <ul className="mt-4">
        {projects.map(({ emoji, projectName, description, href }) => {
          return (
            <li
              className="rounded-md font-body hover:bg-yellow-400 hover:bg-opacity-50"
              key={projectName}
            >
              <Link href={href}>
                <a className="block p-3">
                  <div className="flex items-center">
                    <div className="mr-2">{emoji}</div>
                    <div className="text-base font-bold md:text-lg text-mononchrome-900">
                      {projectName}
                    </div>
                  </div>
                  <div className="text-sm font-bold md:text-base text-mononchrome-400">
                    {description}
                  </div>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

const SnippetsCard = () => {
  return (
    <Card title="Snippets">
      <ul className="mt-4">
        {snippets.map(({ name, description, href }) => {
          return (
            <li
              className="rounded-md font-body hover:bg-yellow-400 hover:bg-opacity-50"
              key={name}
            >
              <Link href={href}>
                <a className="block p-3">
                  <div className="flex items-center">
                    <div className="text-base font-bold md:text-lg text-mononchrome-900">
                      {name}
                    </div>
                  </div>
                  <div className="text-sm font-bold md:text-base text-mononchrome-400">
                    {description}
                  </div>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default MainSection
