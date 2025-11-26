import React, { use, useEffect, useState } from 'react'
import { getUnProducto } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'

const ItemDetailConteiner = () => {

    const [producto, setProducto] = useState (null)

    useEffect (() => {
        getUnProducto ()
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