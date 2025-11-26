import { use } from "react"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import {Link,NavLink, useParams} from "react-router-dom"


const NavBar = () => {
 
  return (
    <header>
      <NavLink to="/">
        <h1 >Amuleto Web</h1>
      </NavLink>
        
            <nav>
                <ul>
                    <li>
                      <NavLink to="/categorias/armado">Armado</NavLink>
                      </li>
                    <li>
                      <NavLink to="/categorias/merceria">Merceria</NavLink>
                    </li>
                    <li>
                      <NavLink to="/categorias/libreria">Libreria</NavLink>
                    </li>
                    <li>
                      <NavLink to="/categorias/hilado">Hilado</NavLink>
                    </li>
                </ul>
            </nav>

  
        <CartWidget />
    </header>
  )
}

export default NavBar