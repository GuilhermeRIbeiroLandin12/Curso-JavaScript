let Tenis = {
  tamanho: 39,
  estoque: true,
};

let link = { link: {a: "a", b: {c: "C"} } };

/*let clone1 = Tenis;
console.log(clone1);

let mesclar1 = Object.assign(Tenis, link);
console.log(mesclar1);

let mesclar2 = { ...Tenis, ...link};
console.log(mesclar2);

let mesclar3 = { Tenis, link};
console.log(mesclar3); 
*/

// Problema que pode causar

let clone1 = Tenis;
let mesclar1 = Object.assign(Tenis, link);
let mesclar2 = { ...Tenis, ...link};
let mesclar3 = { Tenis, link};

console.log(clone1);

clone1.estoque = false;
mesclar1.link.a = "ABC";

console.log(mesclar1);
console.log(mesclar2);
console.log(mesclar3);
