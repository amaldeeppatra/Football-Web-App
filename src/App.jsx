import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import News from './pages/News'
import Competitions from './pages/Competitions'
import Epl from './competitions/Epl'
import Laliga from './competitions/Laliga'
import Signup from './authentication/Signup'
import NewsPage from './pages/NewsPage'
import PredictNow from './pages/PredictNow'


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
                element:[<Navbar/>,<News/>,<Footer/>]
              },
              {
                path: "/news/:title",
                element: [<Navbar/>,<NewsPage/>,<Footer/>], // Route to NewsPage with dynamic URL
              },
              {
                path:"/competitions",
                element:[<Navbar/>,<Competitions/>,<Footer/>]
              },
              {
                path:"/about",
                element:[<Navbar/>]
              },
              {
                path:"/signin",
                element:[<Signup/>]
              },
              {
                path:"/competitions/epl",
                element:[<Navbar/>,<Epl/>,<Footer/>]
              },
              {
                path:"/competitions/Laliga",
                element:[<Navbar/>,<Laliga/>,<Footer/>]
              },
              {
                path:"/predict-now",
                element:[<Navbar/>,<PredictNow/>,<Footer/>]
              }
          ]
      }
  ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);