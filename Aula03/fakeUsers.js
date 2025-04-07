import nomes from "./names.js"

//console.log("Nomes contém: ",nomes)

function fakeName() {
    let pos = parseInt(Math.random()*nomes.length)
return nomes[pos]
}

function fakeSobrenome() {
    let pos = parseInt(Math.random()*sobrenomes.length)
return sobrenomes[pos]
}

export function createFakeUser(){
    let user = {
        name: fakeName(),
        lastname: "",
        login: "",
        idade: 0,
        rg: 0,
        email: ""
    }
    return user
}