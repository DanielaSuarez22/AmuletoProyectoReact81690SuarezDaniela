import { useState, useEffect } from "react" 
import { getproductos } from "../../asyncmock"
import  ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";


const ItemListConteiner = () => {

const [productos, setProductos] = useState([])  
    useEffect(() => {
        getproductos()
        .then (respuesta => setProductos (respuesta))
        .catch (error => console.log (error))
    }, [])

const { categoriasId } = useParams(); 

const productosFiltrados = categoriasId
    ? productos.filter((p) => p.categorias === categoriasId)
    : productos;


return (
    <>
    <h2>Mis productos</h2>
    <ItemList productos={productos}/>
    <h1>{categoriasId ? `Categoría: ${categoriasId}` : "Todos los productos"}</h1>

        {productosFiltrados.map((p) => (
            <div key={p.id}>{p.name}</div>
        ))}


    
    </>
    )
}


export default ItemListConteiner