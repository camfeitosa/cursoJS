let num =[5,8,2,9,3]
// num[5] = 6
num.push(10) //coloca no ultimo elemento no array
num.sort() //ordem crescente = ordenados
num.length //saber o tamanho

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)

let pos = num.indexOf(15)
if(pos == -1){ //colocar o número direto do resultado negativo
    console.log('Valor não encontrado')
} else{
console.log(`O valor está na posição ${pos}`)
}