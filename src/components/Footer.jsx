// import React from 'react'
// import instagram from '../resources/instagram.svg'
// import twitter from '../resources/twitter.svg'
// import email from '../resources/email.svg'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <footer className='text-white flex flex-col bg-[#2B2B2B]'>
//         <div className='flex justify-evenly'>
//             <div className='w-[40vw] py-10'>
//                 <h1 className='text-[2.5rem] mb-5'>Get in Touch</h1>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eos ut dignissimos quisquam libero beatae voluptate facilis sint! Neque, ratione maxime. Possimus, enim assumenda ipsam at esse illum quos consequuntur?</p>
//             </div>
//             <div className='flex gap-14'>
//                 <Link to="https://www.instagram.com/fieldfuse.inc?igsh=MWZib2twZTRrNjhhaA==" target='_blank' className='mt-14 mb-16'><img src={instagram} alt="" className=''/></Link>
//                 <Link onClick={(e) => {window.location.href = "mailto:fieldfuse.inc@gmail.com";e.preventDefault();}} target='_blank' className='mt-16 mb-16'><img src={email} alt="" className=''/></Link>
//             </div>
//         </div>

//         <div className='text-center mb-3'>
//             <h1>Copyright © 2024 - FieldFuse | All Rights Reserved</h1>
//         </div>
        
//     </footer>
//   )
// }

// export default Footer




import React from 'react';
import instagram from '../resources/instagram.svg';
import twitter from '../resources/twitter.svg';
import email from '../resources/email.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='text-white flex flex-col bg-[#2B2B2B]'>
        <div className='flex flex-col md:flex-row justify-evenly px-5 md:px-16 py-10'>
            <div className='w-full md:w-[40vw] text-center md:text-left'>
                <h1 className='text-[2.5rem] mb-5'>Get in Touch</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eos ut dignissimos quisquam libero beatae voluptate facilis sint! Neque, ratione maxime. Possimus, enim assumenda ipsam at esse illum quos consequuntur?</p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start gap-8 md:gap-14 h-full'>
                <Link to="https://www.instagram.com/fieldfuse.inc?igsh=MWZib2twZTRrNjhhaA==" target='_blank' className='flex items-center'>
                    <img src={instagram} alt="Instagram" />
                </Link>
                <Link onClick={(e) => {window.location.href = "mailto:fieldfuse.inc@gmail.com";e.preventDefault();}} target='_blank' className='flex items-center'>
                    <img src={email} alt="Email" />
                </Link>
            </div>
        </div>

        <div className='text-center mb-3 mt-6'>
            <h1>Copyright © 2024 - FieldFuse | All Rights Reserved</h1>
        </div>
    </footer>
  );
}

export default Footer;
