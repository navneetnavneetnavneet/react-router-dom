import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex gap-x-10 justify-center mt-10'>
        <Link className='text-xl font-semibold hover:text-red-600' to="/">Home</Link>
        <Link className='text-xl font-semibold hover:text-red-600' to="/about">About</Link>
        <Link className='text-xl font-semibold hover:text-red-600' to="/users">Users</Link>
    </nav>
  )
}

export default Nav