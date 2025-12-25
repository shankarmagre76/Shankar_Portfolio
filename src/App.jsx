
import { createBrowserRouter, HashRouter, Route, RouterProvider, Routes } from 'react-router-dom'
// import './App.css'
import About from './components/About'
import NavBar from './components/NavBar'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<ContactMe />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App;
