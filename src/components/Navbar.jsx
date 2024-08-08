// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <nav className='bg-gradient-to-b from-[#2E2E2E] to-[#2A2A2A] flex justify-between p-6 text-white font-poppins text-xl'>
//         <div><Link to="/">FieldFuse</Link></div>
//         <div className='flex gap-16'>
//             <div className='z-10'><Link to="/news">News</Link></div>
//             <div className='z-10'><Link to="/competitions">Competitions</Link></div>
//             <div className='z-10'><Link to="/about">About Us</Link></div>
//             {/* <div className='z-10'><Link to="/signin">SignIn</Link></div> */}
//         </div>
//     </nav>
//   )
// }

// export default Navbar



import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-b from-[#2E2E2E] to-[#2A2A2A] flex justify-between p-6 text-white font-poppins text-xl'>
        <div><Link to="/" className='nav-link fieldfuse-link'>FieldFuse</Link></div>
        <div className='flex gap-16'>
            <div className='z-10'><Link to="/news" className='nav-link other-link'>News</Link></div>
            <div className='z-10'><Link to="/competitions" className='nav-link other-link'>Competitions</Link></div>
            <div className='z-10'><Link to="/about" className='nav-link other-link'>About Us</Link></div>
        </div>
    </nav>
  )
}

export default Navbar