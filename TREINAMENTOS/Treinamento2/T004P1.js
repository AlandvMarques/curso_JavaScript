let = ""

do{
    opcao = prompt("Olá! Tudo bem ?" +
    "\n1- Sim" +
    "\n2- Não" +
    "\n3- mais ou menos"+
    "\n4- por aí"+
    "\n5- não quero falar!"
    )

    switch (opcao){
        case "1":
            alert("Que bom, fico feliz por você!")
            break
        case "2":
            prompt("Por que você não está bem ?")
            break
        case "3":
            prompt("Você quer conversar?")
            break
        case "4":
            alert("Me liga para a gente conversar!") 
            break
        case "5":
            alert("Tudo bem, lembre-se que você é muito especial")
            break
        default :
            alert("Não exite essa opção, sinto muito!")
    }

}while (opcao !== 5)