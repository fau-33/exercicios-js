// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

function cumprimentar(nome){
  const saudacao = "Olá"
  return [saudacao, nome].join(', ').concat("!")
}

console.log(cumprimentar("Flávio"))

function cumprimentar(nome){
  return "Olá " + nome + "!"
}
console.log(cumprimentar("Maria"))

function cumprimentar(nome){
  return `Olá, ${nome} !`
}
console.log(cumprimentar("Gustavo"))

