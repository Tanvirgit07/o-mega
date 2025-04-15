import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function FooterPage() {
  return (
    <div className='bg-gray-200 py-10 lg:py-20'>
      <div className='max-w-[1140px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

      <div>
        <Link href='/'>
        <Image src="/images/logo.webp" alt='logo' width={150} height={100}/> 
        </Link>
        <p>We are a team of designer and developers that create high quelity Wordpress.</p>
        
        {/* add icon in footer */}

      </div>

      {/* add 2nd div My account title in footer */}

      {/* add 3rd div Information in footer*/}

      {/* add 4th div tailk to us in footer */}
      </div>
    </div>
  )
}

export default FooterPage




