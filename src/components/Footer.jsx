import React from 'react'
import instagram from '../resources/instagram.svg'
import twitter from '../resources/twitter.svg'
import email from '../resources/email.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-white flex flex-col bg-[#2B2B2B]'>
        <div className='flex justify-evenly'>
            <div className='w-[40vw] py-10'>
                <h1 className='text-[2.5rem] mb-5'>Get in Touch</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eos ut dignissimos quisquam libero beatae voluptate facilis sint! Neque, ratione maxime. Possimus, enim assumenda ipsam at esse illum quos consequuntur?</p>
            </div>
            <div className='flex gap-14'>
                <Link to="https://www.instagram.com/fieldfuse.inc?igsh=MWZib2twZTRrNjhhaA==" target='_blank' className='mt-14 mb-16'><img src={instagram} alt="" className=''/></Link>
                <Link onClick={(e) => {window.location.href = "mailto:fieldfuse.inc@gmail.com";e.preventDefault();}} target='_blank' className='mt-16 mb-16'><img src={email} alt="" className=''/></Link>
            </div>
        </div>

        <div className='text-center mb-3'>
            <h1>Copyright © 2024 - FieldFuse | All Rights Reserved</h1>
        </div>
        
    </footer>
  )
}

export default Footer