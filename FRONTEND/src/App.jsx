import React from 'react'
<<<<<<< HEAD
import Home from './pages/Home'
=======
import Home from './pages/home'
>>>>>>> 62a42647232249849df32daa590cc2148c4c324f
import Trending from './pages/trending'
import Food from './pages/food'
import Profile from './pages/profile'
import Detailfilm from './pages/detail-film'
import PilihBioskop from './pages/pilih-bioskop'
import PilihKursi from './pages/Pilih-kursi'
import Pembayaran from './pages/Pembayaran'
import Login from './pages/login'
<<<<<<< HEAD

import { BookingProvider } from './contexts/BookingContext'
=======
>>>>>>> 62a42647232249849df32daa590cc2148c4c324f
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavigationProvider } from './contexts/NavigationContext'

function App() {
  return (
    <div>
      <NavigationProvider>
<<<<<<< HEAD
        <BookingProvider>
=======
>>>>>>> 62a42647232249849df32daa590cc2148c4c324f
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/trending' element={<Trending/>} />
            <Route path='/food' element={<Food/>} />
            <Route path='/profile' element={<Profile/>} />
<<<<<<< HEAD
            <Route path='/detail-film/:id' element={<Detailfilm/>} />
=======
            <Route path='/detail-film' element={<Detailfilm/>} />
>>>>>>> 62a42647232249849df32daa590cc2148c4c324f
            <Route path='/pilih-bioskop' element={<PilihBioskop/>} />
            <Route path='/pilih-kursi' element={<PilihKursi/>} />
            <Route path='/Pembayaran' element={<Pembayaran/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </BrowserRouter>
<<<<<<< HEAD
        </BookingProvider>
=======
>>>>>>> 62a42647232249849df32daa590cc2148c4c324f
      </NavigationProvider>
    </div>
  )
}

export default App
