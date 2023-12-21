// const mes= prompt ("Digite o número de acordo do mês que vc quer:" +
// "\n1- Mês" + "\n2- Mês" + "\n3- Mês" + "\n4- Mês" + "\n5- Mês" + "\n6- Mês" + "\n7- Mês" + "\n8- Mês" + "\n9- Mês" + "\n10- Mês" + "\n11- Mês" + "\n12- Mês" + "\n13- Sair")



// do{

//     const mes= prompt ("Digite o número de acordo do mês que vc quer:" +
//     "\n1- Mês" + "\n2- Mês" + "\n3- Mês" + "\n4- Mês" + "\n5- Mês" + "\n6- Mês" + "\n7- Mês" + "\n8- Mês" + "\n9- Mês" + "\n10- Mês" + "\n11- Mês" + "\n12- Mês" + "\n13- Sair")


// switch (mes) {
//     case "1":
//         alert("Janeiro");
//         break;
//     case "2":
//         alert("Fevereiro");
//         break;
//     case "3":
//         alert("Março");
//         break;
//     case "4":
//         alert("Abril");
//         break;
//     case "5":
//         alert("Maio");
//         break;
//     case "6":
//         alert("Junho");
//         break;
//     case "7":
//         alert("Julho");
//         break;
//     case "8":
//         alert("Agosto");
//         break;
//     case "9":
//         alert("Setembro");
//         break;
//     case "10":
//         alert("Outubro");
//         break;
//     case "11":
//         alert("Novembro");
//         break;
//     case "12":
//         alert("Dezembro");
//         break;
//     case "13":
//         alert("Sair");
//         break;
//     default:
//         alert("Mês inexistente");
// }
// }while (mes !== "13") 





var carro = {modelo: 'A3 Sedan', marca: 'Audi', ano: 2020}
for (let caracteristica in carro){
    //exibe as propriedades do objeto carro
    alert(caracteristica + ": " + carro[caracteristica]);
}