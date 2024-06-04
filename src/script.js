let nome = "DIO"
let Xp = 5002
let nivel = ""

if(Xp <=1000){
    nivel = "Ferro"
}else if(Xp <=2000){
    nivel = "Bronze"
}else if(Xp <=5000){
    nivel = "Prata"
}else if(Xp <=7000){
    nivel = "Ouro"
}else if(Xp <=8000){
    nivel = "Platina"
}else if(Xp <=9000){
    nivel = "Ascendente"
}else if(Xp <=10000){
    nivel = "Imortal"
}else if(Xp >=10001){
    nivel = "Radiante"
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel)