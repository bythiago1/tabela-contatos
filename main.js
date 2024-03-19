const form = document.getElementById('form-ctt')
const nome = [];
const tel = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    criarLinha();
    atualizaTabela();
})



function criarLinha() {
    const inputNomeCliente = document.getElementById('input-name')
    const inputTelCliente = document.getElementById('input-tel')

    let linha ='<tr>';
    linha += `<td>${inputNomeCliente.value}</td>`
    linha += `<td>${inputTelCliente.value}</td>`
    linha += '</tr>'

    nome.push(inputNomeCliente.value);
    tel.push(inputTelCliente.value);


    linhas += linha;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

