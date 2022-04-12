import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'

const Repos: NextPage = () => {
  const tagColors = {
    JavaScript: { text: '#a08f09', background: '#f4f1d5' },
    TypeScript: { text: '#2B7489', background: '#d0ecf4' }
  }
  const featuredRepos = [
    {
      title: 'react-compound-interest-calculator',
      description:
        'Building a Compound Interest Calculator using Chart.js + Next.js',
      languages: ['TypeScript'],
      updated: 'Mar 4 2022',
      url: 'https://github.com/danstanhope/react-compound-interest-calculator'
    },
    {
      title: 'supabase-twitter-authentication',
      description:
        'Tutorial on Twitter Authentication using Supabase + React + Redux + TypeScript',
      languages: ['TypeScript'],
      updated: 'Feb 3 2022',
      url: 'https://github.com/danstanhope/supabase-twitter-authentication'
    },
    {
      title: 'react-upload-pre-signed-s3-urls',
      description:
        'Tutorial project on how to generate pre-signed s3 upload urls using cloudformation, lambda and react.',
      languages: ['JavaScript'],
      updated: 'Jun 10 2021',
      url: 'https://github.com/danstanhope/react-upload-pre-signed-s3-urls'
    },
    {
      title: 'migrate-data-dynamodb-streams-lambda',
      description:
        'Use DynamoDB to modify pre-existing records so they can be written to the event stream and consumed by Lambda functions.',
      languages: ['JavaScript'],
      updated: 'Mar 19 2021',
      url: 'https://github.com/danstanhope/migrate-data-dynamodb-streams-lambda'
    },
  ]
  const Repo = ({ repo, idx }) => (
    <div
      key={repo.id}
      className='sm:flex overflow-hidden mb-10 pb-10 border-b border-gray-200'
    >
      <div className='flex-1 flex flex-col justify-between'>
        <div className='flex-1'>
          <a href={repo.url} className='block mt-2'>
            <p className='text-xl font-semibold text-gray-900 line-clamp-2 hover:text-pink-700'>
              {repo.title}
            </p>
          </a>
          <p className='mt-3 text-base text-gray-500 line-clamp-3'>
            {repo.description}
          </p>

          <div className='flex flex-shrink-0 -space-x-1 mt-2'>
            {repo?.languages.map((language, idx) => (
              <div
                key={idx}
                className='mr-3 mt-2 px-4 py-1.5 rounded-full text-base'
                style={{
                  color: tagColors[language].text,
                  backgroundColor: tagColors[language].background
                }}
              >
                {language}
              </div>
            ))}
          </div>
        </div>
        <div className='mt-6 flex items-center'>
          <div>
            <div className='flex space-x-1 text-sm text-gray-500'>
              <time dateTime={repo.updated}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 inline-block relative -top-0.5 mr-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
                Updated on {repo.updated}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className='list-items relative max-w-7xl mx-auto mt-8'>
      {featuredRepos.map((repo, idx) => (
        <>
          <Repo repo={repo} idx={idx} />
        </>
      ))}
    </div>
  )
}

export default Repos
