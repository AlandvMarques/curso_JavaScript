const palavra = prompt ("Imforme uma palavra: ")
let palavraIvertida =""

for (let i = palavra.length - 1; i >=0; i--){
    palavraIvertida += palavra[i]
}
if (palavra === palavraIvertida){
    alert(palavra + "É um palídromo!")
}else{
    alert(palavra + "não é um palídromo! \n\n" + palavra + " diferente " + palavraIvertida )
}

