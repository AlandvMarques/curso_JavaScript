// milímetro (mm) : 0,001
// centímetro (cm): 100
// decímetro (dm): 0,1
// decâmetro (dam): 10
// hectômetro (hm): 100
// quilômetro (km): 1000

const medida = parseFloat(prompt("Insira uma medida em metros: "))


const resultado = prompt("Escolha a medida de converção:\na) milímetro\nb) centímetro\nc) decímetro\nd) decâmetro\ne) hectômetron\nf) quilômetro");



switch (resultado){
    case "a": 
        alert("Resultado: " +medida+ "m = "+ medida * 1000 + "mm")
        break
    case "b": 
        alert("Resultado: " +medida+ "m = "+ medida * 100 + "cm")
        break
    case "c": 
        alert("Resultado: " +medida+ "m = "+ medida * 10 + "dm")
        break
    case "d": 
        alert("Resultado: " +medida+ "m = "+ medida / 10 + "dam")
        break
    case "e": 
        alert("Resultado: " +medida+ "m = "+ medida / 100 + "hm")
        break
    case "f": 
        alert("Resultado: " +medida+ "m = "+ medida / 1000 + "Km")
        break

    default:
        alert("Opção invalida")
        break

}