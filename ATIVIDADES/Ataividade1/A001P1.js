const nome_carro = prompt("Digite o nome do primeiro carrro:")
const velocida_carro1 =parseFloat(prompt("Digite a velocidade do primeiro carrro:")) 

const nome_carro2 = prompt("Digite o nome do segundo carrro:")
const velocida_carro2= parseFloat( prompt("Digite a velocidade do segundo carrro:"))


if (velocida_carro1 > velocida_carro2) {
    alert(nome_carro + " é mais rápido do que " + nome_carro2)
  } else if (velocida_carro2 > velocida_carro1) {
    alert(nome_carro2 + " é mais rápido do que " + nome_carro)
  } else {
    alert(nome_carro + " e " + nome_carro2 + " possuem velocidades iguais.")
  }