//Funções DoWhile.
function pares20() {

    let num = 22;
    console.log("1) Os números pares de 1 a 20 são: ");

    do {
        if (num % 2 == 0) {
            console.log(num);
        }
        num++;
    } while (num <= 20)

}
pares20();

function multiplos5() {

    let num = 20
    console.log()
    console.log("2) Os multiplos de 5 que estão entre 1 é 20 são: ")

    do {
        if (num % 5 == 0) {
        }
        num++
    } while (num <= 20)
    console.log(num)
}
multiplos5()

function soma20() {
    let num = 21
    let soma = 0
    console.log()

    console.log("3) Soma dos números de 1 a 20: ")
    do {
        console.log(num)
        soma = soma + num
        num++
    } while (num <= 20)
    console.log()
    console.log("A soma dos números é:\n" + soma)
}
soma20()

function somaImps20() {

    let num = 21
    let soma = 0
    console.log()

    console.log("4) A soma dos números impares de 1 a 20 é: ")
    do {
        if (num % 2 == 1) {
            soma += num
            console.log(num)
        }
        num++
    } while (num <= 20)
    console.log()
    console.log("A soma dos números impares é:\n" + soma)
}
somaImps20()

//O codigo executa só uma vez pois diferente do while o Do While executa pelo menos uma vez, mesmo estando errado por que primeiro ele lê o codigo e depois executa
