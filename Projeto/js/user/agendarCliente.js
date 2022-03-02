const clienteLogado = JSON.parse(localStorage.getItem('clienteLogado'));
const cliente = JSON.parse(localStorage.getItem('listaCompleta'));
const selecaoEsp = document.querySelector('[data-agendar-esp]');
const selBarbeiro = document.querySelector('[data-agendar-barbeiro]');
const botaAgendar = document.querySelector('[data-agendar-hora]');
const horario = document.querySelector('[data-agendar-dia]');

const agendados = [{}];

const barbeiros = [{
    nome: 'Jorge',
    idade: 29,
    especialidade: ['Cabelo', 'Tesoura']
}]

const listaCompleta = [
    'Cabelo',
    'Tesoura'
]

if (!JSON.parse(localStorage.getItem('barbeiros'))) {
    localStorage.setItem('barbeiros', JSON.stringify(barbeiros))
}

if (!JSON.parse(localStorage.getItem('listaCompleta'))) {
    localStorage.setItem('listaCompleta', JSON.stringify(listaCompleta))
}

if (!JSON.parse(localStorage.getItem('agendados'))) {
    localStorage.setItem('agendados', JSON.stringify(agendados))
}

const listaBarbeiros = JSON.parse(localStorage.getItem('barbeiros'));
const listaEspecialidades = JSON.parse(localStorage.getItem('listaCompleta'));

listaEspecialidades.forEach(element => {
    const especialidade = document.createElement('option')
    especialidade.classList.add('esp__selecionada')
    especialidade.innerHTML = element;
    selecaoEsp.appendChild(especialidade);
});

selecaoEsp.addEventListener('change', (event) => {
    event.preventDefault();
    const espSelecionada = selecaoEsp.value;
    let listaFiltrada = [];

    while (selBarbeiro.hasChildNodes()) {
        selBarbeiro.removeChild(selBarbeiro.firstChild);
    }
    listaBarbeiros.forEach((barbeiro) => {
        let index = barbeiro.especialidade.findIndex((elemento) => {
            return elemento == espSelecionada
        })
        if (index !== -1) {
            listaFiltrada.push(barbeiro);
        }
    })

    listaFiltrada.forEach(barbeiro => {
        const barbeiroAtual = document.createElement('option')
        barbeiroAtual.classList.add('esp__selecionada')
        barbeiroAtual.innerHTML = barbeiro.nome;
        selBarbeiro.appendChild(barbeiroAtual);
    });
})

botaAgendar.addEventListener('click', (evento) => {
    evento.preventDefault()
    const agendadosAtual = {
        dia: horario.value,
        especialidade: selecaoEsp.value,
        barbeiro: selBarbeiro.value,
        cliente: clienteLogado.email
    }
    const listaAgendadosAtual = JSON.parse(localStorage.getItem('agendados'));
    listaAgendadosAtual.push(agendadosAtual);
    localStorage.setItem('agendados', JSON.stringify(listaAgendadosAtual));
    alert('Horário Agendado com Sucesso')
})