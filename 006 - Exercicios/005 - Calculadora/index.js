function calculadora (num1, num2, operacao) {
  switch (operacao){

    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0){
        console.log("Divisão por zero impossivel");
      }
      return num1 / num2
  }
}
console.log(calculadora ( 20, 10, "/"));
