var agora = new Date()
var hora = agora.getHours() //selecionar a hora atual (pode ser dia, minuto, mes... )
console.log(`Agora são exatamente ${hora} horas.`) //node js = console

if (hora < 12 && hora > 6) {
    console.log('Bom dia')
} else if (hora <= 18 && hora >= 12){
    console.log('Boa Tarde')
}  else if (hora <= 6){
    console.log('Boa madrugada')
 } else {
    console.log('Boa noite')
}