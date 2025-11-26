import React from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'
const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/1170/1170678.png"


  return (
    <Link to="/cart">
        <img className="imgCarrito" src={imgCarrito} alt="Imagen de un carrito de compras" />
    </Link>
  )
}

export default CartWidget