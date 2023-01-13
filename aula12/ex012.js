var idade = 55
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log('Não vota') //menor q 16 resultado  
} else if (idade < 18 || idade > 65){ //menor que 18 ou maior que 25 resultado
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório') //senão for menor q 18 ou maior que 25 retorna o resultado
}
