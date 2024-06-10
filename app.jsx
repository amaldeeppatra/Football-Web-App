import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="bg-gray-950 absolute inset-0">
  <div className="mt-32 w-full h-20 flex justify-start">
    <svg viewBox="0 0 400 50" className="w-full h-full">
      <text x="0" y="50" textAnchor="start" className="font-bold text-[50px] fill-none stroke-[#4559A4] stroke-[2.5px] stroke-linejoin-round">
        PREDICT YOUR
      </text>
    </svg>
  </div>
  <div className="mt-4 w-full h-20 flex justify-end"> {/* Adjust margin-top to control spacing */}
    <svg viewBox="0 0 400 50" className="w-full h-full">
      <text x="100%" y="50" textAnchor="end" className="font-bold text-[50px] fill-none stroke-[#551608] stroke-[2.5px] stroke-linejoin-round">
        TEAM POINTS
      </text>
    </svg>
  </div>
</div>

   </>
  )
}

export default App
