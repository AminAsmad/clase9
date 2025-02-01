import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Recetas from './pages/Recetas'
import Productos from './pages/Productos'
import Usuarios from './pages/Usuarios'
import { useEffect, useState } from "react";
import DetallesRecetas from './pages/DetallesRecetas'
import DetallesProductos from './pages/DetallesProductos'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>

    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/recetas' element={<Recetas/>}/>
        <Route path='/usuarios' element={<Usuarios/>}/>
        <Route path='/detalles/:id' element={<DetallesRecetas/>}/>
        <Route path='/detallesp/:id' element={<DetallesProductos/>}/>
        <Route path='*' element={<Inicio/>}/>
    </Routes>

    <Footer/>
    </BrowserRouter>
  )
}

export default App
