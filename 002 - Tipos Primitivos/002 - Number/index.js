console.log(123);
console.log(Number(123) + 1);

console.log(typeof Number("152"));
console.log(typeof ("152"));

/*
Como pode escrever um número
Number 123
Number 123 + 123 = 246
Number("123") - 1 = 122

Cuidado que assim pode gerar bugs
Number("123") + 1 = 1231
Number("123") * 2 = 246

*/