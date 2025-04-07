console.log("Vamos jogar palitinhos?")

let nomeJogador = "Bia" //prompt("Qual seu nome?")
let qtdePalitosJogador = 3
let qtdeEscolhaJogador = 0
let qtdeChuteJogador = 0

let nomeComp = "Computador"
let qtdePalitosComp = 3
let qtdeEscolhaComp = 0
let qtdeChuteComp = 0

function calculaPalpiteDoComputador() {
    let qtdeSorteada = (parseInt(Math.random()*10) % (qtdePalitosJogador+1))
    let palpite = qtdeEscolhaComp + qtdeSorteada
    return palpite
}

let teste = calculaPalpiteDoComputador()
console.log(teste);

while(qtdePalitosJogador > 0 && qtdePalitosComp > 0) {
    qtdeEscolhaJogador = prompt("Quantos palitos você quer separar?")
    qtdeEscolhaJogador = parseInt(qtdeEscolhaJogador)

    qtdeEscolhaComp = (parseInt(Math.random()*10) % qtdePalitosComp)+1

    qtdeChuteJogador = prompt("Qual seu palpite")
    qtdeChuteComp = calculaPalpiteDoComputador()

    let soma = qtdeEscolhaJogador + qtdeEscolhaComp
    if(qtdeChuteJogador == soma) {
        alert("Ganhou o "+nomeJogador)
        qtdePalitosJogador--
    } else {
        if(qtdeChuteComp == soma) {
            alert("Ganhou o "+nomeComp)
            qtdePalitosComp--
        } else {
            alert("Ninguém ganhou!")
        }
    }

    let status = nomeJogador+ " chutou "+qtdeChuteJogador+"\n"
    status = status + nomeComp+" chutou "+qtdeChuteComp+"\n"
    status = status + nomeJogador+" separou "+qtdeEscolhaJogador+"\n"
    status = status + nomeComp+" separou "+qtdeEscolhaComp+"\n"
    alert(status)
}