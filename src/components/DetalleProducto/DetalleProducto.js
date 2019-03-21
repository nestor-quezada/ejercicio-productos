import React, { Component } from 'react';
import axios from '../../axios';
import './DetalleProducto.css';

class DetalleProducto extends Component {

    constructor(props){
        super(props);
    }
    
    state = {
        loadedProduct : null
    }

    // Aqui se deben realizar las peticiones AJAX, preguntar si no es mejor usar propswillchange
    componentDidUpdate(){
        if (this.props.selectedItemId) {
            if (!this.state.loadedProduct || this.state.loadedProduct.idb !== this.props.selectedItemId) {
                axios.get('/productos.json?orderBy="$key"&equalTo="' + this.props.selectedItemId + '"'). 
                    then(response => {
                        // Split de los datos recibidos y actualizacion del estado
                        let productos = [];
                        
                        for (let key in response.data) {
                            productos.push({
                                ...response.data[key],
                                idb: key
                            });
                        }


                        this.setState({loadedProduct : productos[0]});
                        
                        
                        });
            }
        }
    }
        
    render (){
        let detalleProducto = <p style={{ textAlign: 'center' }}>Selecciona un producto!</p>;
        if (this.props.id) {
            detalleProducto = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedProduct) {
            
            detalleProducto = (

                <div className="DetalleProducto">
                    <img width="100" src={this.state.loadedProduct.url_imagen} />
                    
                    <label>Nombre</label>
                    <input type="text" value={this.state.loadedProduct.nombre} />
                   
                    <label>Descripción</label>
                    <textarea rows="4" value={this.state.loadedProduct.descripcion}  />
                 
                    <label>Precio</label>
                    <input type="text" value={this.state.loadedProduct.precio} />         
                </div>

            );
        }
        return detalleProducto;
    }

}

export default DetalleProducto;