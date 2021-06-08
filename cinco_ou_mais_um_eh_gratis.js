function solucao(precos) {
    //seu codigo aqui
  var valor = 0;
  var menor = precos[0];
  if(precos.length < 5){
    for(let i = 0; i < precos.length; i++){
      valor = valor + precos[i];
    }
  }
  else{
    for(let i = 0; i < precos.length; i++){
      valor = valor + precos[i];
      if(precos[i] < menor){
        menor = precos[i];
      }
    }
    valor = valor - menor;
  }
  console.log(valor);   
}