function solucao(produtos) {
    //seu codigo aqui
  let total = 0;
  obj = { 
    totalTop: 0,
    percentual: 0
  }
  for(let i = 0; i < produtos.length; i++){
    if(produtos[i].preco > 10000){
      obj.totalTop = obj.totalTop + produtos[i].preco;
    }
    total = total + produtos[i].preco;
    obj.percentual = obj.totalTop/total;
  }
  console.log(obj);
}