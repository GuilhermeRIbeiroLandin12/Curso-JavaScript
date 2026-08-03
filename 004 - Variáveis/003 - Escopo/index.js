let nome = "Guilherme";
{
console.log(nome);   // Acessando a variável nome dentro do escopo do bloco
}

{
  let nomeSobrenome = "Guilherme Ribeiro";
}
console.log(nomeSobrenome); // Acessando a variável nomeSobrenome fora do escopo do bloco, o que resultará em um erro, pois a variável não está definida nesse contexto.


