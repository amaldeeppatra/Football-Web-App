import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <h2 className='text-white px-20 py-10 text-[2.3rem] font-poppins font-semibold'>Top News</h2>
      <div className='flex justify-between px-10'>
      </div>
      <p className='text-white'>snjdfnjolsdngjol</p>
    </>
  )
}

export default App
