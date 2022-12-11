import React from 'react'

const Nav = () => {
  return (
    <nav>
      <ul className='flex justify-around bg-black opacity-80 text-gray-400  py-3 text-xl font-semibold '>
          <a href="#" className='cursor-pointer uppercase hover:text-white'>ibrahim</a>
          <li className='capitalize'>full-stack-web-developer</li>
          <a href="mailto:ibrahimadel2220@gmail.com" className='hover:text-white cursor-pointer first-letter:uppercase'>send me</a>
      </ul>
   </nav>
  )
}

export default Nav