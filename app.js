function alterarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}

alterarTexto('title', 'Exercícios');
alterarTexto('h1', 'Bora Praticar?');


function digaMeuNome() {
    let nome = document.querySelector('#digaMeuNome').value;
    console.log(`Olá, ${nome}!`);
}

function dobrarNumero() {
    let numero = document.querySelector('#numero').value;
    numero = numero*2;
    console.log(numero);
}

function numeroAoQuadrado() {
    let numero = document.querySelector('#numero').value;
    numero = numero*numero;
    console.log(numero);
}

function mostraMediaTresNumeros() {
    let num1 = parseInt(document.querySelector('#num1Media').value);
    let num2 = parseInt(document.querySelector('#num2Media').value);
    let num3 = parseInt(document.querySelector('#num3Media').value);
    let media = (num1+num2+num3)/3;
    console.log(media);
}

function comparaDoisNumerosCosoleMaior() {

    let num1 = parseInt(document.querySelector('#num1Media').value);
    let num2 = parseInt(document.querySelector('#num2Media').value);
    let num3 = parseInt(document.querySelector('#num3Media').value);
    if (num1>=num2 && num1>num3) {
        console.log(num1);
    } else if (num2>num1 && num2>num3){
        console.log(num2);
    } else {
        console.log(num3);
    }
}

function calcularIMC() {
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let imc = peso/(altura*altura);

    if (imc > 24.9) {
        alert('Você está acima do peso');
    } else {
        alert('Seu peso está dentro do parâmetro normal');
    }

    alterarTexto('#respostaIMC', 'Seu imc é '+ imc);
}

function fatorial() {
    let numeroFatorado = document.getElementById('numeroFatorado').value;
    let resultado = numeroFatorado;
    while (numeroFatorado > 1) {
        resultado = resultado * (numeroFatorado-1);
        numeroFatorado--;
    }
    console.log(resultado);
    alterarTexto('#respostaFatorial', resultado);
    
}

function tabuada() {
    let numeroTabuada = document.getElementById('numeroTabuada').value;
    for (let i = 1; i <= 10; i++){
        let resultado = numeroTabuada * i;
        alterarTexto(`#tabuada${i}`, resultado);
    }
}

