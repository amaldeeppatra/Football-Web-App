import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Footer from './components/Footer'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import News from './pages/News'
import Competitions from './pages/Competitions'
import Epl from './competitions/Epl'


const App=()=>{
  return(
      <>
      <Outlet />
      </>
     
  )
}


const appRouter=createBrowserRouter(
  [
      {
          path:"/",
          element:<App />,
          children:[
              {
                path:"/",
                element:[<Navbar/>,<Hero/>,<Card/>,<Footer/>]
                  
              },
              {
                path:"/news",
                element:[<Navbar/>,<News/>]
              },
              {
                path:"/competitions",
                element:[<Navbar/>,<Competitions/>,<Footer/>]
              },
              {
                path:"/competitions/epl",
                element:[<Navbar/>,<Epl/>,<Footer/>]
              },
              {
                path:"/about",
                element:[<Navbar/>]
              },
              {
                path:"/login",
                element:[<Navbar/>]
              }
          ]
      }
  ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


// function App() {

//   return (
//     <>
//       <Navbar/>
//       <Hero/>
//       <h2 className='text-white mt-5 px-20 py-10 text-[2.3rem] font-poppins font-semibold'>Top News</h2>
//       {/* <div className='flex justify-between px-16 gap-10'> */}
//         <Card/>
//         {/* <Card2/> */}
//         {/* <Card3/> */}
//       {/* </div> */}
//       <Footer/>
//     </>
//   )
// }

// export default App
