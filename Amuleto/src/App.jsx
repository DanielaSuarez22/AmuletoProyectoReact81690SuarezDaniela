import React from 'react'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Componentes/NavBar/NavBar'
import ItemListConteiner from './Componentes/ItemListConteiner/ItemListConteiner.jsx'
import './App.css'
import ItemDetailConteiner from './Componentes/ItemDetailConteiner/ItemDetailConteiner.jsx'

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListConteiner />
      <ItemDetailConteiner />
    </>
  )
}

export default App