export function toggleLesson(module, lesson) {
    return {
      type: "TOGGLE_LESSON",
      module,
      lesson,
    };
  }

  export function adicionarCarrinho(rosas){
    return{
      type:"ADICIONAR_CARRINHO",
      rosas,
      
    }
  }