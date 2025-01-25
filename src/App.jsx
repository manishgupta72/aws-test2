import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import About from './pages/About'

function App() {


  return (
    <>
       <BrowserRouter>
      <h1>Welcome to the aws testing 2</h1>
      <h1>Deployement is successfully</h1>
        <nav>
          <Link to='/login' >Login</Link><br></br>
          <Link to='/about'>About</Link>
        </nav>
        <Routes>
          {/* Route for the Home component can be added here */}
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
