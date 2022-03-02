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

    let verificaEmail = clientes.some(cliente => cliente['email'] === clienteAtual.email)

    if (verificaEmail) {
        console.log('Email repetido')
    } else {
        clientes.push(clienteAtual)
        armazedaDados()
        alert('Cadastro Realizado com sucesso')
    }
})

const armazedaDados = () => {
    localStorage.setItem('clientes', JSON.stringify(clientes))
}