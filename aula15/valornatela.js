let valores = [8, 1, 7, 4, 2, 9]
valores.sort() //ordenados

//console.log(valores) = sem formatação

for(let pos=0; pos < valores.length; pos++){ //começa com zero e vai até o final do vetor
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //personalizar a saída


for(let pos in valores){ //simplificado
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}
