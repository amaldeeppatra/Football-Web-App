// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <nav className='bg-gradient-to-b from-[#2E2E2E] to-[#2A2A2A] flex justify-between p-6 text-white font-poppins text-xl'>
//         <div><Link to="/" className='nav-link fieldfuse-link'>FieldFuse</Link></div>
//         <div className='flex gap-16'>
//             <div className='z-10'><Link to="/news" className='nav-link other-link'>News</Link></div>
//             <div className='z-10'><Link to="/competitions" className='nav-link other-link'>Competitions</Link></div>
//             <div className='z-10'><Link to="/about" className='nav-link other-link'>About Us</Link></div>
//         </div>
//     </nav>
//   )
// }

// export default Navbar





import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-[#2E2E2E] to-[#2A2A2A] p-6 text-white font-poppins text-xl">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/" className="nav-link fieldfuse-link">FieldFuse</Link>
        </div>
        <div className="hidden md:flex gap-16 z-10">
          <Link to="/news" className="nav-link other-link">News</Link>
          <Link to="/competitions" className="nav-link other-link">Competitions</Link>
          <Link to="/about" className="nav-link other-link">About Us</Link>
        </div>
        <div className="md:hidden z-10">
          <button onClick={toggleMobileMenu} aria-label="Open mobile menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 space-x-8">
          <Link to="/news" className="block nav-link other-link z-10" onClick={toggleMobileMenu}>News</Link>
          <Link to="/competitions" className="block nav-link other-link z-10" onClick={toggleMobileMenu}>Competitions</Link>
          <Link to="/about" className="block nav-link other-link z-10" onClick={toggleMobileMenu}>About Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;