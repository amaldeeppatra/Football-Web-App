import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <h2 className='text-white p-10 text-[2.3rem] font-poppins font-semibold'>Top News</h2>
      <div className='flex '>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className='h-10 bg-black'>

      </div>
    </>
  )
}

export default App
