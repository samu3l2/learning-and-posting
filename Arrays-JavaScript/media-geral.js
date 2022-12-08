//REDUCE
//ACUMULADOR OU ACC 

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
 const somdaDasNotas = notasDaSala.reduce((acc, nota) =>  acc + nota, 0);
    const media = somdaDasNotas / notasDaSala.length;
    
    return media
}

console.log(`A media da salaJS é: ${calculaMedia(salaJS)}`)
console.log(`A media da salaJava é: ${calculaMedia(salaJava)}`)
console.log(`A media da salaPhyton é: ${calculaMedia(salaPython)}`)




