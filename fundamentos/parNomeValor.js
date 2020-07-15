// Par nome/valor

const saudacao = 'opa'// Contexto Lexico 1

function exec(){
  const saudacao = 'falaaa'// Contexto Lexico 2
  return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 19,
  peso: 90,
  endereco:{
    logradouro: 'Rua muito legal',
    numero: 223
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)