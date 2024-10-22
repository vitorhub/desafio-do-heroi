let nivel;
let nome = "";
let xp = "";

while(nome === "" || xp === ""){
nome = prompt("informe seu nome");
xp = prompt("Informe quantidade de xp");
}

if (xp < 1000){
    nivel = "Ferro";
}else if(xp < 2000){
    nivel = "Bronze";
}else if(xp < 5000){
    nivel = "Prata";
}else if(xp < 7000){
    nivel = "Ouro";
}else if(xp < 8000){
    nivel = "Platina";
}else if(xp < 9000){
    nivel = "Ascendente";
}else if(xp < 10000){
    nivel = "Imortal";
}else if(xp > 10000){
    nivel = "Radiante";
}
console.log(`O heroi de nome ${nome} está no nível de ${nivel}`)