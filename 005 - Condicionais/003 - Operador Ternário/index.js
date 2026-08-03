const velocidade = 60;
const limiteVelocidade = 70;

const alerta = velocidade >= limiteVelocidade
? console.log("Recebeu uma Multa!")
: console.log("Continue andando")

if(velocidade >= limiteVelocidade){
  console.log("Recebeu uma Multa!");
} else {
  console.log("Continue andando");
}