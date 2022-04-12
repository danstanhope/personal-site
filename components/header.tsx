import { HeartIcon } from '@heroicons/react/solid'
import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import { Switch } from '@headlessui/react'

const Header: NextPage = () => {
  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [enabled, setEnabled] = useState(false)

  return (
    <header className='bg-white flex p-6 mb-4 mt-2' aria-labelledby='header-nav'>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-gray-600' : 'bg-gray-200',
          'ml-auto relative inline-flex flex-shrink-0 h-8 w-16 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
        )}
      >
        <span className='sr-only'>Use setting</span>
        <span
          className={classNames(
            enabled ? 'translate-x-8' : 'translate-x-0',
            'pointer-events-none relative inline-block h-7 w-7 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        >
          <span
            className={classNames(
              enabled
                ? 'opacity-0 ease-out duration-100'
                : 'opacity-100 ease-in duration-200',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden='true'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
              />
            </svg>
          </span>
          <span
            className={classNames(
              enabled
                ? 'opacity-100 ease-in duration-200'
                : 'opacity-0 ease-out duration-100',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden='true'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              />
            </svg>
          </span>
        </span>
      </Switch>
    </header>
  )
}

export default Header