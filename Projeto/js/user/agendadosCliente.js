const clienteLogado = JSON.parse(localStorage.getItem('clienteLogado'));
const agendados = JSON.parse(localStorage.getItem('agendados'));
const div = document.querySelector('[data-agendados-caixa]')

agendados.forEach(element => {
    if (clienteLogado.email === element.cliente) {
        const dataAgendada = document.createElement('p')
        const barbeiroAgendado = document.createElement('p')
        const especialidadeAgendada = document.createElement('p')
        dataAgendada.classList.add('agendados__paragrafo')
        barbeiroAgendado.classList.add('agendados__paragrafo')
        especialidadeAgendada.classList.add('agendados__paragrafo')
        barbeiroAgendado.innerHTML = element.barbeiro;
        especialidadeAgendada.innerHTML = element.especialidade;
        let string = `${new Date(element.dia).getDate()+1}/${new Date(element.dia).getMonth() + 1}/${new Date(element.dia).getFullYear()}`
        dataAgendada.innerHTML = string
        div.appendChild(dataAgendada);
        div.appendChild(barbeiroAgendado);
        div.appendChild(especialidadeAgendada);
    }
});