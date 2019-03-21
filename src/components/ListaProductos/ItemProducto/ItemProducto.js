import React, { Component } from 'react';
import './ItemProducto.css';

class ItemProducto extends Component {

    constructor(props){
        super(props);
    }
        
    render (){

        return (

            <div className="ItemProducto">
                <img width="50" src={this.props.url_imagen} onClick={this.props.clicked} />
                {this.props.nombre}                
            </div>

        );

    }

}

export default ItemProducto;