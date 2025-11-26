import { useState, useEffect } from "react" 
import { getproductos } from "../../asyncmock"
import  ItemList from "../ItemList/ItemList"



const ItemListCointainer = () => {

const [productos, setProductos] = useState([])  
    useEffect(() => {
        getproductos()
        .then (respuesta => setProductos (respuesta))
        .catch (error => console.log (error))
    }, [])

return (
    <>
    <h2>Mis productos</h2>
    <ItemList.ItemList productos={productos}/>
    </>
    )
}

export default ItemListCointainer