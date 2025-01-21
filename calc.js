let tela = document.getElementById('tela')
let resultado = document.getElementById('resultado')

function addNum(num){
    tela.value += num
}

function addSinal(sinal){
    tela.value += sinal
}

function igual(res){
    res = eval(tela.value)
    resultado.value = res
    tela.value = ''
}

function apagar(){
    tela.value = ''
    resultado.value = ''
}