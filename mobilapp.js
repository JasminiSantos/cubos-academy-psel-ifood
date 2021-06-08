function solucao(tempo, distancia) {
    //seu codigo aqui
  var valor = 0;
  if(tempo < 5){
    valor = 6;
  }
  else if(tempo >= 5 && tempo <= 60){
    valor = 1*tempo + distancia*0.5;
  }
  else if(tempo > 60){
    if(distancia < 100){
      valor = distancia*2;
    }
    else{
      valor = distancia*1.5;
    }
  }
  console.log(valor*100);
}