import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import NotFound from './components/NotFound'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='px-10 py-10'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<Users />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App