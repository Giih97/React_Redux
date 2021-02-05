const ESTADO_INICIAL = {
    rosa:[{}],
    feed:[
        {
            id:1,
            color:"vermelho",
            preco:"150,00"
        },
        {
            id:2,
            color:"branca",
            preco:"180,00"
        },
        {
            id:3,
            color:"bege",
            preco:"160,00"
        },
    ]
}

export default function rosas(state=ESTADO_INICIAL,action){
   // console.log(action)
    if(action.type==="ADICIONAR_CARRINHO"){
        return{...state,
        rosa:action.rosas,

        }
        
    }
    return state
}