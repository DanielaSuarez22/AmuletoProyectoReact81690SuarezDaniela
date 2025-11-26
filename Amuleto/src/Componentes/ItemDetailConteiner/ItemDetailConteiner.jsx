import React, { use, useEffect, useState } from 'react'
import { getUnProducto } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'

const ItemDetailConteiner = () => {

    const [producto, setProducto] = useState (null)
    const Params = useParams ()

    useEffect (() => {
        getUnProducto (Params.id)
        .then (respuesta => setProducto (respuesta))    
        .catch (error => console.log (error))
    }, [])


    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailConteiner