const Tenis = {
  tamanho: 45,
  estoque: true,
  marcas: [{nome: "Nike"}, {nome: "Adidas"}],
  secret: 123456,
  n: 5,
  link: { a: "a", b: { c: "Guilherme Ribeiro"} },
};

const { tamanho, estoque, marcas } = Tenis;

console.log(tamanho, estoque, marcas);

const { secret: randomNumber, n: avaliacoes } = Tenis;
console.log(randomNumber);
console.log(avaliacoes);

const {link} = Tenis;
console.log(link);

const {
  link: { b: { c }, }, } = Tenis;
console.log(c);