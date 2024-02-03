console.log('Olá, JavaScript!')

var userName = 'Fernando Papito'

document.getElementById('userName').innerHTML = userName 

// Variáveis //
 var nome = 'Mestre Yoda'
 var idade = 100
 var jedi = true

console.log(nome)
 console.log(idade)
 console.log(jedi)

// Operadores matemáticos //

 var n1 = 7
 var n2 = '5'

 var total = n1 + parseInt(n2) //função que converte para inteiro
 console.log(total)

// Operadores de comparação //

 var v1 = 5
 var v2 = 5

 var resultado = v1 >= v2 
 console.log(resultado)

// == é utilizado para comparar ignorando o tipo de dado e === leva em consideração o tipo de dado
// != não leva em consideração o tipo de dado e !== leva em consideração o tipo de dados

// Funções //

 function soma (n1, n2){
     console.log(n1 + n2)

 }
 soma(5,3)

 function boasVindas(nome){
     alert(nome+ ', seja bem vindo(a)')
 }
boasVindas('Usuário')

 function soma(n1, n2){
     return n1 + n2 //retorna o resultado

 }

 var resultado = soma (5,5) //armazena o resultado
 console.log(resultado) //imprime o resultado

// Controle de fluxos //

// Sendo um cliente correntista do banco (ator)
// Posso sacar dinheiro em caixas eletrônicos (o que deve ser desenvolvido)
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito (valor agregado)

//Cenário 1: Saque com scuesso
//Dado que meu saldo é de 1000 reais
//Quando faço um saque de 500 reais
//Então o valor do saque deve ser deduzido do meu saldo

// var saldo = 1000

// function saque(valor){
//     saldo = saldo - valor
// }

// saque(1001)
// console.log(saldo)


//Cenário 2: Saque com valor superior ao saldo
//Dado que meu saldo é de 1000 reais
//Quando faço um saque de 1001 reais
//Então não deve deduzir do meu saldo
//E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

//  var saldo = 1000

//  function saque(valor){
//      if(valor > saldo){
//          console.log('Valor do saque superior ao saldo')
//      } else if (valor > 700){
//         console.log('Valor é superior ao máximo permitido por operação')
//      }
//         else{
//          saldo = saldo - valor
//      }

//  }


//  saque(1001)
//  console.log(saldo)


//Cenário 3: Saque com valor máximo
//Dado que meu saldo é de 1000 reais
//E o valor máximo por operação é de 700 reais
//Quando faço um saque no valor de 701 reais
//Então não deve deduzir do meu saldo
//E dece mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação

// var saldo = 1000

// function saque(valor){
//     if(valor > 700){
//         console.log('Valor é superior ao máximo permitido por operação')
//     }else{
//         saldo = saldo - valor
//     }
// }

// saque(701)

// Arrays //
// var personagens = ['Mestre Yoda','Luke Skywalker', 'Princesa Leia', 'Han Solo', 'Darth Vader', 'Chewbacca', 'R2D2']

// personagens.push('C3pO') //adiciona item no array
// personagens.pop() //remove o último item do array

// personagens = personagens.filter(function(p){  // function(p) -> função p percorre todos os itens da lista
//     return p !== 'Princesa Leia' // atualiza a lista com todos os itens, exceto com que está na condição
    

// } )

// console.log(personagens)

// Controles de repetição (loops) //

// var personagens = ['Mestre Yoda','Luke Skywalker', 'Princesa Leia', 'Han Solo', 'Darth Vader', 'Chewbacca', 'R2D2', 'C3pO']


//  //personagens.forEach(function(p){ // percorre a lista e imprimi um item por vez
//     // for(var i in personagens){
//     //     console.log(personagens[i]) //personagem por posição 
//     // }

//     for(var i=0; i <=10; i++){
//         console.log(i) //código vau ser executado até a condição retornar false
//     }
  
 
// Objetos //

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi:true,
//     mostra_idade: function(){
//         console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
//     }
// }

// // yoda.nome = 'Mestre Yoda' //criando novas informações dentro do objeto
// // yoda.idade = 100
// // yoda.jedi = true

// console.log(yoda)
// yoda.mostra_idade()

// Constantes //

const nome = 'Darth Vader'
console.log(nome)

nome = 'Mestre Yoda'
console.log(nome)