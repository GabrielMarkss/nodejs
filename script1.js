console.log("Hello Node!")

function pares20() {

    let num = 1;
    console.log("1) Os números pares de 1 a 20 são: ");

    while (num <= 20) {
        if (num % 2 == 0) {
            console.log(num);
        }
        num++;
    }
}
pares20();

function multiplos5() {

    let num = 1
    console.log()
    console.log("2) Os multiplos de 5 que estão entre 1 é 20 são: ")

    while (num <= 20) {
        if (num % 5 == 0) {
            console.log(num)
        }
        num++
    }
}
multiplos5()

function soma20() {
    let num = 1
    let soma = 0
    console.log()

    console.log("3) Soma dos números de 1 a 20: ")
    while (num <= 20) {
        console.log(num)
        soma = soma + num
        num++
    }
    console.log()
    console.log("A soma dos números é:\n" + soma)
}
soma20()

function somaImps20() {

    let num = 1
    let soma = 0
    console.log()

    console.log("4) A soma dos números impares de 1 a 20 é: ")
    while (num <= 20) {
        if (num % 2 == 1) {
            soma += num
            console.log(num)
        }
        num++
    }
    console.log()
    console.log("A soma dos números impares é:\n" + soma)
}
somaImps20()
