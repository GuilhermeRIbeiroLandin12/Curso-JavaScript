// Falsy = False, 0, "", NaN, undefined e null
// Truthy = Qualquer valor que não seja Falsy

if(null) {
  console.log("Bom dia");
} else{
  console.log("Boa noite");
}


if(!null) {
  console.log("falsy or false");
}

if(1 + 1) {
  console.log("true");
}