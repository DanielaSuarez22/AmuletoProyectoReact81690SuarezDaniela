import React from 'react'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Componentes/NavBar/NavBar'
import ItemListCointainer from './Componentes/ItemListCointainer/ItemListCointainer'
import './App.css'

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListCointainer presentacion="Destinados a ser tu lugar favorito"/>
      
    </>
  )
}

export default App