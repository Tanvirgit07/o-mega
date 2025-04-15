import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
const linkData = [
    {icon: <FaGithub />, href: "https://github.com/"},
    {icon: <FaFacebook />, href: "https://github.com/"},
    {icon: <FaYoutube />, href: "https://github.com/"},
    {icon: <FaLinkedin />, href: "https://github.com/"},
    {icon: <FaEnvelope />, href: "https://github.com/"},
]

function SocilLink() {
  return (
    <div>
        {
            linkData.map((item,index) => (
                <Link className='border border-white/20 inline-flex p-2 rounded-full hover:text-blue-500 hover:border-blue-500 duration-300 cursor-pointer mr-4' target='_blank' key={index} href={item.href}>{item.icon}</Link>
            ))
        }
    </div>
  )
}

export default SocilLink