import React, { Component } from 'react';
import axios from '../../axios';
import './NuevoProducto.css';

class NuevoProducto extends Component {

    state = {
        nombre : "",
        descripcion :"",
        precio: 0,
        url_imagen:""
    }
    
    postDataHandler = () => {
        const data = {
            nombre: this.state.nombre,
            descripcion: this.state.descripcion,
            precio: this.state.precio,
            url_imagen: this.state.url_imagen
        };
        axios.post('/productos.json', data)
            .then(response => {
                alert('Saved order');
                console.log(response);
            }).catch(error => {
                 console.log(error);
                // this.setState({error: true});
                alert('Error order');
            });
    }

    render (){

        
        return (

            <div >
                
                <h1>Añade un nuevo producto</h1>
                <div className="NuevoProducto">
                  
                    <label>Nombre</label>
                    <input type="text" value={this.state.nombre} onChange={(event) => this.setState({nombre: event.target.value})} />
                    
                    <label>Descripción</label>
                    <textarea rows="4" value={this.state.descripcion} onChange={(event) => this.setState({descripcion: event.target.value})} />
                    
                    <label>Precio</label>
                    <input type="text" value={this.state.precio} onChange={(event) => this.setState({precio: event.target.value})} />
                    
                    <label>URL Imagen</label>
                    <input type="text" value={this.state.url_imagen} onChange={(event) => this.setState({url_imagen: event.target.value})} />
                    
                    <button onClick={this.postDataHandler}>Añadir producto</button>
                </div>

            </div>



        );

    }

}

export default NuevoProducto;