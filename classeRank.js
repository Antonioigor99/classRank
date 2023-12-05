function resultDuels(victories, defeats) {
    let result = victories - defeats
    let rank
    if (result <= 10) {
        rank = 'Ferro'
    } else if (result <= 20) {
        rank = 'Bronze'
    } else if (result <= 50) {
        rank = 'Prata'
    } else if (result <= 80) {
        rank = 'Ouro'
    } else if (result <= 90) {
        rank = 'Diamante'
    } else if (result <= 100) {
        rank = 'Lendário'
    } else {
        rank = "Imortal"
    }
    console.log(`O Herói tem de saldo de ${result} vitorias e está no nível de ${rank}`)
    return result
}
let value = resultDuels(10, 0)
/*let rank
if(value <= 10){
    rank = 'Ferro'
}else if( value <= 20){
    rank = 'Bronze'
}else if( value <= 50){
    rank = 'Prata'
}else if( value <= 80){
    rank = 'Ouro'
}else if( value <= 90){
    rank = 'Diamante'
}else if( value <= 100){
    rank = 'Lendário'
}else{
    rank = "Imortal"
}
console.log(`O Herói tem de saldo de ${value} vitorias e está no nível de ${rank}`)*/