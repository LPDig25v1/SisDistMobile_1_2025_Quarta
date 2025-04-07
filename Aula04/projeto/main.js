import { encrypt } from "./criptografia.js";
import readlineSync from "readline-sync";
import chalk from "chalk"

//let ret = encrypt("Oi gente tudo bem?")

function bomdia(nome) {
    console.log("Oi " + chalk.red(nome) + "! tudo bem com você?")
}
console.log(bomdia);
let contagem = 0
function contador() {
    contagem++
    console.log(contagem)
}

//setInterval()

//bomdia("Beatriz")

//console.log("saída: ",ret);

/*let nome = readlineSync.question("Digite seu Nome: ");
bomdia(nome)*/

//console.log(chalk.red("Hello World!"));

//console.log("Oi gente")

/*for(let i=0; i<10;i++) {
    console.log("Oi gente")
}*/