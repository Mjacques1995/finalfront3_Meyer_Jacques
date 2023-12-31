
import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import { ApiContextProvider } from './context/ApiContextProvider'
import { ThemeContextProvider } from './context/ThemeContextProvider'
import { FavsLogicContextProvider } from './context/FavsLogicContextProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <ThemeContextProvider>
                <Navbar />
                <ApiContextProvider>
                  <FavsLogicContextProvider>
                    <Outlet />
                  </FavsLogicContextProvider>
                </ApiContextProvider>
                <Footer />
              </ThemeContextProvider>
            </>
          }
        >
          <Route path='/' element={<Home />} />
          <Route path='/dentist/:id' element={<Detail />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/favs' element={<Favs />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
