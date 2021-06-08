function solucao(ano) {
    //seu codigo aqui
  if(ano % 2 != 0){
    console.log("MEH");
  }
  else if((ano - 2018)%4 == 0){
    console.log("COPA");
  }
  else{
    console.log("JOGOS");
  }
}