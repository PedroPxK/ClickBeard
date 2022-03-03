const listaEspecialidades = JSON.parse(localStorage.getItem('listaCompleta'));
const selecao = document.querySelector('[data-barbeiro-selecao]');
const novaEspecialiade = document.querySelector('[data-barbeiro-novaesp]')
const nomeBarbeiro = document.querySelector('[data-barbeiro-nome]');
const idadeBarbeiro = document.querySelector('[data-barbeiro-idade]');
const botao = document.querySelector('[data-barbeiro-cadastrar]');
const listaSalva = document.querySelector('[data-barbeiro-lista]');

const listaEspecialidadesAtual = [];

const barbeiros = [{
    nome: 'Jorge',
    idade: 29,
    especialidade: ['Cabelo', 'Tesoura']
}]

if (!JSON.parse(localStorage.getItem('barbeiros'))) {
    localStorage.setItem('barbeiros', JSON.stringify(barbeiros))
}


listaEspecialidades.forEach(element => {
    const especialidade = document.createElement('option')
    especialidade.innerHTML = element;
    selecao.appendChild(especialidade);
});

novaEspecialiade.addEventListener('click', (event) => {
    event.preventDefault();
    let verificaRepetido = listaEspecialidadesAtual.findIndex((item) => item == selecao.value)
    if (verificaRepetido !== -1) {
        alert('Esse barbeiro já possui essa especialidade')
    } else{
        const novaSelecao = document.createElement('li');
        novaSelecao.classList.add('barbeiro__novasel');
        novaSelecao.innerHTML = selecao.value
        listaSalva.appendChild(novaSelecao);
        listaEspecialidadesAtual.push(selecao.value)
    }

})

botao.addEventListener('click', (event) => {
    event.preventDefault();
    const barbeiroAtual = {
        nome: nomeBarbeiro.value,
        idade: idadeBarbeiro.value,
        especialidade: listaEspecialidadesAtual
    }
    listaAtual = JSON.parse(localStorage.getItem('barbeiros'));
    listaAtual.push(barbeiroAtual)
    localStorage.setItem('barbeiros', JSON.stringify(listaAtual))
    alert('Barbeiro Cadastrado com Sucesso')
})