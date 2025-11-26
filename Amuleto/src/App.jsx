import React from 'react'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Componentes/NavBar/NavBar'
import ItemListConteiner from './Componentes/ItemListConteiner/ItemListConteiner.jsx'
import './App.css'
import ItemDetailConteiner from './Componentes/ItemDetailConteiner/ItemDetailConteiner.jsx'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListConteiner/>} />  
        <Route path='/categorias/:categoriasId' element={<ItemListConteiner/>} />
        <Route path='/detalle/:id' element={<ItemDetailConteiner/>} />

      </Routes>

    </>
  )
}

export default App