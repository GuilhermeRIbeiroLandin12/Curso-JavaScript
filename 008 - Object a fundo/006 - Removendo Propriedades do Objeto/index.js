let Tenis = {
  tamanho: 42,
  estoque: true,
};

Tenis.tamanho = 39,
Tenis.estoque = false,
Tenis.preco = "500",


delete Tenis.tamanho;

console.log(Tenis);