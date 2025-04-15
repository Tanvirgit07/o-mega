import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NotFoundPage() {
  return (
    <div className='max-w-[1140px] mx-auto px-4 flex flex-col gap-2 items-center py-10'>
        <Image src="/images/notFound.webp" alt='images' width={300} height={200} className='max-w-60'/>
        <p className='text-xl font-semibold '>Oops! page not found</p>
        <p className='text-sm text-gray-500 max-w-80 text-center'>Whoops, this is embarranssing. Looks like the page you were looking for wasnt found.</p>
        <Link href="/" className='px-10 py-2 bg-sky-600 text-white cursor-pointer'>
        <button>Back to Home</button>
        </Link>
    </div>
  )
}

export default NotFoundPage