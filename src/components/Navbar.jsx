import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-b from-[#2E2E2E] to-[#2A2A2A] flex justify-between p-6 text-white font-poppins text-xl'>
        <div>FieldFuse</div>
        <div className='flex gap-20'>
            <div>News</div>
            <div>Competitions</div>
            <div>Login</div>
        </div>
    </nav>
  )
}

export default Navbar