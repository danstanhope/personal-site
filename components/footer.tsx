import { HeartIcon } from '@heroicons/react/solid';
import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'

const Footer: NextPage = () => {

    return (
        <footer className="bg-white text-center p-6 border-slate-200 border-t" aria-labelledby="footer-heading">
            Made with
            <HeartIcon className="h-5 w-5 inline-block mx-1 relative -top-1 text-red-500" />
            in Toronto by <a href="https://twitter.com/danstanhope" className="text-pink-500 underline hover:text-pink-700">@danstanhope</a>
        </footer>
    )
}

export default Footer