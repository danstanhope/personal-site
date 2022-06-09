import { NextPage } from 'next'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import DevTo from '../components/devto'
import Github from '../components/github'
import Footer from '../components/footer'
import Header from '../components/header'
import { getPosts } from '../lib/request'

const Home: NextPage = ({ posts }) => {
  return (
    <ThemeProvider attribute="class">
      <div className=''>
        <div className='bg-white dark:bg-gray-800'>
          <Head>
            <title>Dan Stanhope | Programming, Cloud & Start-ups</title>
            <meta name='description' content="I've been working in software for 15+ years now and loving it. Most recently as head of development at ExpertFile. Spending a lot of time in cloud these days." />
          </Head>

          <main className='text-lg max-w-3xl mx-auto px-8 lg:px-0'>
            <Header />

            <About />

            <div className='pt-16'>
              <div className='divide-y-2 divide-gray-200'>
                <div>
                  <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100'>
                    Recent Posts
                  </h2>
                  <p className='mt-2 text-lg text-gray-500 sm:mt-2 sm:flex justify-center items-center dark:text-gray-400'>
                    <span>
                      Here are some posts I've written in the past. Hope you like
                      'em!
                    </span>
                    <a
                      href='https://dev.to/danstanhope'
                      target='_blank'
                      className='text-pink-500 ml-auto text-sm underline hover:text-pink-700 block mt-2 sm:mt-0 sm:inline-block'
                    >
                      See All
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 inline pl-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M13 5l7 7-7 7M5 5l7 7-7 7'
                        />
                      </svg>
                    </a>
                  </p>
                </div>
                <div className='mt-6'>
                  <DevTo posts={posts} />
                </div>
              </div>
            </div>

            <div className='pt-12 pb-4'>
              <div className='mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl'>
                <div>
                  <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-gray-100'>
                    Featured Repos
                  </h2>
                  <p className='mt-2 text-lg text-gray-500 sm:mt-2 sm:flex justify-center items-center dark:text-gray-400'>
                    <span>
                      Code I've written as part of my
                      tutorials.
                    </span>
                    <a
                      href='https://github.com/danstanhope'
                      target='_blank'
                      className='text-pink-500 ml-auto text-sm underline hover:text-pink-700 block mt-2 sm:mt-0 sm:inline-block'
                    >
                      See All
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 inline pl-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M13 5l7 7-7 7M5 5l7 7-7 7'
                        />
                      </svg>
                    </a>
                  </p>
                </div>
                <div className='mt-6'>
                  <Github />
                </div>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Home

export async function getStaticProps () {
  const posts = await getPosts()

  return {
    props: {
      posts: posts
    },
    revalidate: 60
  }
}
