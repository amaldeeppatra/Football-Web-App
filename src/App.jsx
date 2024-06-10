import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Card2 from './components/Card2'
import Card3 from './components/Card3'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <h2 className='text-white mt-5 px-20 py-10 text-[2.3rem] font-poppins font-semibold'>Top News</h2>
      <div className='flex justify-between px-16 gap-10'>
        <Card/>
        <Card2/>
        <Card3/>
      </div>
    </>
  )
}

export default App
