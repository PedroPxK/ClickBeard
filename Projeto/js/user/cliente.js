botao = document.querySelector('.cadastro__botao');
nomeCliente = document.querySelector('[data-nome-cliente]');
emailCliente = document.querySelector('[data-email-cliente]');
senhaCliente = document.querySelector('[data-senha-cliente]');

const clientes = [{}]

if (!JSON.parse(localStorage.getItem('clientes'))) {
    localStorage.setItem('clientes', JSON.stringify(clientes))
}

botao.addEventListener('click', (event) => {
    event.preventDefault();
    const clienteAtual = {
        nome: nomeCliente.value,
        email: emailCliente.value,
        senha: senhaCliente.value
    }

    let listaAtual = JSON.parse(localStorage.getItem('clientes'))
    let verificaRepetido = listaAtual.findIndex((item) => item.email == emailCliente.value)
    if (verificaRepetido !== -1) {
        alert('Esse email já está sendo utilizado')
    } else {
        clientes.push(clienteAtual)
        listaAtual.push(clienteAtual)
        localStorage.setItem('clientes', JSON.stringify(listaAtual))
        alert('Cadastro Realizado com sucesso')
    }
})