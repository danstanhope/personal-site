import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'

const DevTo: NextPage = ({ posts }) => {
  const tagColors = {
    react: '#61DAFB',
    javascript: '#F7DF1E',
    typescript: '#2B7489',
    tutorial: '#663399',
    nextjs: '#E10098',
    node: '#E10098',
    aws: '#F7DF1E',
    elasticsearch: '#2B7489',
    devops: '#663399',
    dynamodb: '#E10098',
    serverless: '#F7DF1E'
  }
  const Post = ({ post, idx }) => (
    <div
      key={post.id}
      className='sm:flex overflow-hidden mb-10 pb-10 border-b border-gray-200'
    >
      <div className='sm:mr-8'>
        <img
          className='h-full w-full sm:w-60 object-cover rounded-lg'
          src={post.cover_image}
          alt=''
        />
      </div>
      <div className='flex-1 p-2 flex flex-col justify-between'>
        <div className='flex-1'>
          <a href={post.url} className='block mt-2'>
            <p className='text-xl font-semibold text-gray-900 line-clamp-2 hover:text-pink-700 dark:text-gray-100'>
              {post.title}
            </p>
          </a>
          <p className='mt-3 text-base text-gray-500 dark:text-gray-400 line-clamp-3'>
            {post.description}
          </p>

          <div className='flex flex-shrink-0 -space-x-1 mt-2'>
            {post?.tag_list.map((tag, idx) => (
              <div key={idx} className='pr-3'>
                <span style={{ color: tagColors[tag] }}>#</span>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className='mt-6 flex items-center'>
          <div>
            <div className='flex space-x-1 text-sm text-gray-500 dark:text-gray-400'>
              <time dateTime={post.readable_publish_date}>
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
                {post.readable_publish_date}
              </time>
              <span aria-hidden='true' className='text-gray-900 dark:text-gray-400'>
                &middot;
              </span>
              <span>{post.reading_time_minutes} min. read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className='list-items relative max-w-7xl mx-auto mt-12'>
      {posts.map((post, idx) => (
        <>
          <Post post={post} idx={idx} />
        </>
      ))}
    </div>
  )
}

export default DevTo
