
//Função Declaration
function isValidDeclaration() {
  const soma = 1 + 2;

  if (soma === 3 ) {
  return true;
  }

  return false;
}
//console.log(isValidDeclaration());

//Função Expression
const isValidExpression = function () {
  return false;
};
//console.log(isValidExpression());

//Arrow Functions
const isValidFunctions = () => 2 * 2;
console.log(isValidFunctions());


