function dev(){
  return "Guilherme Ribeiro";
}
console.log(dev());

const devArrow = () => {
  return "Guilherme Ribeiro";
}
console.log(devArrow());

const devArrowReturn = () => "Guilherme Ribeiro";
console.log(devArrowReturn());


const devArrowHoisting = () => {
  return "Guilherme Ribeiro";
}
console.log(devArrowHoisting());

function devArguments (){
  return arguments;
}

console.log(devArguments("Guilherme Ribeiro"));

class newdev {
  constructor(nome) {
    this.nome = nome;
  }
}

const a = new newdev("Guilherme Ribeiro");
console.log(a.nome);


const lanches = {

  cardapio: [ 
    {nome: "x-salada", preco: "R$25" },
    {nome: "x-tudo", preco: "R$20"},
  ],
  meuPedidoFunc: function(select){
    console.log(this.cardapio[select]);
  },

  meuPedidoFuncOutTime:  function () {
    setTimeout(function () {
      console.log(this.cardapio);
      console.log(this);
    }.bind(this), 1000);
  },


  meuPedidoArrowFunc: (select) => {
    this.cardapio = [
    { nome: "x-salada", preco: "R$25" },
    { nome: "x-tudo", preco: "R$20" },
    ];

    return console.log(this.cardapio[select])
  },
};

lanches.meuPedidoFunc(1)
lanches.meuPedidoArrowFunc(1)
lanches.meuPedidoFuncOutTime(1)