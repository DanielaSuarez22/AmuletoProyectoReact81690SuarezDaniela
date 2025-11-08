import React from 'react'
import './CartWidget.css'
const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/1170/1170678.png"


  return (
    <div>
        <img className="imgCarrito" src={imgCarrito} alt="Imagen de un carrito de compras" />
    </div>
  )
}

export default CartWidget