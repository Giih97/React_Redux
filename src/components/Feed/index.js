import React from "react";
import { connect} from "react-redux"
import {bindActionCreators} from "redux";
import rosas from "../../store/reducers/reducerCarShop";

import * as CarrinhoAction from "../../store/actions/actions"

 const Feed = ({rosas, adicionarCarrinho}) =>{

    return(
    <section>
        <h3> Flores</h3>
        <ul>{rosas.map((item)=>(
            <li key={item.id}> 
            {item.color} | {item.preco} 
            <button onClick={()=>adicionarCarrinho(item)}>Comprar</button></li> ))}
            </ul>
    </section>
    )

}
const mapStateToProps = (state) =>({
    rosas: state.rosas.feed
})
const mapDispatchToProps = (dispatch) => bindActionCreators(CarrinhoAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
