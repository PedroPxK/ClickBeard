const especialidade = document.querySelector('[data-especialidade-inserir]');
const botao = document.querySelector('[data-especialidade-botao]');
const lista = document.querySelector('[data-especialidade-lista]');

const listaCompleta = [
    'Cabelo',
    'Tesoura'
]

//checando se o local storage está vazio, se ele estiver eu salvo a lista de especialidades
if (!JSON.parse(localStorage.getItem('listaCompleta'))) {
    localStorage.setItem('listaCompleta', JSON.stringify(listaCompleta))
}

let listaInicial = JSON.parse(localStorage.getItem('listaCompleta'))

listaInicial.forEach(element => {
    const novaEspecialiade = document.createElement('li');
    const conteudo = element;
    novaEspecialiade.innerHTML = conteudo;
    novaEspecialiade.classList.add('lista-especialidade--item')
    lista.appendChild(novaEspecialiade);
    localStorage.setItem('listaCompleta', JSON.stringify(listaInicial))
});

botao.addEventListener('click', (event) => {
    event.preventDefault();
    let listaAtual = JSON.parse(localStorage.getItem('listaCompleta'))
    let verificaRepetido = listaAtual.findIndex((item) => item == especialidade.value)
    if (verificaRepetido !== -1) {
        alert('Especialidade já cadastrada')
    } else {
        const novaEspecialiade = document.createElement('li')
        const conteudo = especialidade.value;
        novaEspecialiade.innerHTML = conteudo;
        novaEspecialiade.classList.add('lista-especialidade--item')
        lista.appendChild(novaEspecialiade);
        listaAtual.push(especialidade.value);
        listaCompleta.push(especialidade.value);
        localStorage.setItem('listaCompleta', JSON.stringify(listaAtual))
    }
})

