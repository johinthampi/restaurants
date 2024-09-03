import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import RestView from './page/RestView'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resturant_view/:id' element={ <RestView />} />
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App