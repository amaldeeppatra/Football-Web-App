import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-b from-[#2E2E2E] to-[#2A2A2A] flex justify-between p-6 text-white font-poppins text-xl'>
        <div><Link to="/">FieldFuse</Link></div>
        <div className='flex gap-16'>
            <div className='z-10'><Link to="/news">News</Link></div>
            <div className='z-10'><Link to="/competitions">Competitions</Link></div>
            <div className='z-10'><Link to="/about">About Us</Link></div>
            <div className='z-10'><Link to="/login">Login</Link></div>
        </div>
    </nav>
  )
}

export default Navbar