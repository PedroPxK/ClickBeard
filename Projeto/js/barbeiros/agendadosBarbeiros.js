const clienteLogado = JSON.parse(localStorage.getItem('clienteLogado'));
const agendados = JSON.parse(localStorage.getItem('agendados'));
const div = document.querySelector('[data-agendados-caixa]')

agendados.forEach(element => {
    if (!element.cliente) {
    } else {
        const dataAgendada = document.createElement('p')
        const barbeiroAgendado = document.createElement('p')
        const especialidadeAgendada = document.createElement('p')
        const emailCliente = document.createElement('p')
        dataAgendada.classList.add('agendados__paragrafo')
        barbeiroAgendado.classList.add('agendados__paragrafo')
        especialidadeAgendada.classList.add('agendados__paragrafo')
        emailCliente.classList.add('agendados__paragrafo')
        barbeiroAgendado.innerHTML = element.barbeiro;
        especialidadeAgendada.innerHTML = element.especialidade;
        emailCliente.innerHTML = element.cliente;
        let string = `${new Date(element.dia).getDay()}/${new Date(element.dia).getMonth() + 1}/${new Date(element.dia).getFullYear()}`
        dataAgendada.innerHTML = string
        div.appendChild(emailCliente);
        div.appendChild(dataAgendada);
        div.appendChild(barbeiroAgendado);
        div.appendChild(especialidadeAgendada);
    }
});