import React, { Component } from 'react';
import ItemProducto from './ItemProducto/ItemProducto';

const ListaProductos = ( props ) => props.productos.map ((producto, index) => {
   
    return <ItemProducto 
        clicked = {() => props.clicked(producto.idb)} 
        nombre = {producto.nombre} 
        url_imagen = {producto.url_imagen}
        key = {index} />
});

export default ListaProductos;