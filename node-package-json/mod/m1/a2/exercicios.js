// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
const sumErr = (a, b) => {
    try {
        a === typeof Number && b === typeof Number ? (console.log(a + b)) : (err)
    } catch (err) {
        let objErr = ("\n VALOR DO ERRO" + JSON.stringify(err) + "é ERROR \n")
        console.log(objErr)
    }
}

const tag1 = "ERIKA-BOTECHIA"
const tag2 = 28
const tag3 = "botechiaeri@gmail.com"
// EXERCÍCIO 0A
function soma(num1, num2) {
    // implemente sua lógica aqui
    return (sumErr(num1 + num2)
    }


console.log(soma(num1, num2))
// EXERCÍCIO 0B
function imprimeMensagem() {
    // implemente sua lógica aqui
    const mensagem = prompt('Digite uma mensagem!')

    console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    // implemente sua lógica aqui

}

// EXERCÍCIO 02
function imprimeIdade() {
    // implemente sua lógica aqui

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 04

const imprimeInformacaoUsuario = () => {
    // implemente sua lógica aqui
    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    // Exercício 1
    let nome;
    let idade;

    console.log(typeof nome);
    console.log(typeof idade);

    // // Como não atribuímos nenhum valor à variável, o código não sabe qual tipo ela tem, e portanto considera como indefinido (undefined)

    nome = prompt("Digite seu nome");
    idade = prompt("Digite seu idade");

    console.log(nome, idade);
    console.log(typeof nome);
    console.log(typeof idade);

    // // Tudo que vem do prompt é uma string
    console.log("Olá", nome, "você tem", idade, "anos")
}
console.log(imprimeInformacaoUsuario())
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
    // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
    // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
    // implemente sua lógica aqui

}