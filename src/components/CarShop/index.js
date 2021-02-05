import React from 'react'
import { connect } from 'react-redux'

 const CarShop = ({rosa}) =>{
     return(
         <div>

            <h1>Carrinho de Compras</h1>
            <strong>{rosa.color} | {rosa.preco}</strong>
         </div>
     )
 }
 export default connect((state)=>({
     rosa: state.rosas.rosa
 })) (CarShop)