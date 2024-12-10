import React from 'react'
import Home from './pages/home'
import Trending from './pages/trending'
import Food from './pages/food'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Trending' element={<Trending/>} />
          <Route path='/Food' element={<Food/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
