function solucao(letra, palavras) {
    //seu codigo aqui
  let perderam = 0;
  for(let i = 0; i <palavras.length; i++){
    if(letra != palavras[i][0]){
      perderam++;
    }
  }
  console.log(perderam);
}