import { PI, calculaAreaCirculo, calculaCircunferenciaCirculo } from "./circulos.js"
import { createFakeUser } from "./fakeUsers.js"
import { newUser } from "./user.js"

console.log("Alô mundo!")

console.log("O valor de Pi é: "+PI)

let area = calculaAreaCirculo(5)
console.log("A área é: "+area)

let comp = calculaCircunferenciaCirculo(5)
console.log("A circunferência é: "+comp)

let fuser = createFakeUser()
let user = newUser()
let user2 = newUser()
user2.name = "Bia"
user2.lastname = "Beterraba"

console.log("A variável user contém: ",user)
console.log("A variável user2 contém: ",user2)
console.log("A variável fuser contém: ",fuser)