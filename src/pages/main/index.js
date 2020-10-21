import React, { Component } from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom'

import "./style.css"


export default class Main extends Component {
    state = {
        classes: [],
        productInfo: {},
    }


    componentDidMount() {
        this.loadProducts();
    }

     loadProducts = async () => {

        const response = await api.get('/classes');
        console.log(response.data[0].id)

        this.setState({ classes: response.data})

    };


    render() {
        const { classes } = this.state;

       return (
           <div className="product-list">
               {classes.map(classe => (
                   <article key={classe.id}>
                        <strong>{classe.descricao}</strong>
                        <p>GRUPO: {classe.grupo.id}</p>
                        <span>{classe.grupo.descricao}</span>
                        <Link to={`/classes/${classe.id}`}>Acessar</Link>
                   </article>
               ))}

               <p>Contagem de Classes de CNAE: {this.state.classes.length}</p>
           </div>
       );
    }
}