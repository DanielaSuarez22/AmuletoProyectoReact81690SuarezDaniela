import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
const NavBar = () => {
  return (
    <header>
        <h1 >Amuleto Web</h1>
            <nav>
                <ul>
                    <li>Armado</li>
                    <li>Merceria</li>
                    <li>Libreria</li>
                    <li>Hilado</li>
                </ul>
            </nav>
        <CartWidget />
    </header>
  )
}

export default NavBar