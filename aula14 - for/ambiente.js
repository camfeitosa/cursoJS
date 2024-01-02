// 


function a(valor) {
  console.log(2 * valor);

  if (valor > 0) {
    a(valor - 1);
  }
}

console.log(a(10))