const botao = document.querySelector('[data-botao-login]')

const clienteLogado = {};

if (!JSON.parse(localStorage.getItem('clienteLogado'))) {
    localStorage.setItem('clienteLogado', JSON.stringify(clienteLogado))
}

botao.addEventListener('click', (event) => {
    event.preventDefault();

    const listaClientes = JSON.parse(localStorage.getItem('clientes'))

    const emailAtual = document.querySelector('[data-email-login]').value;
    const senhaAtual = document.querySelector('[data-senha-login]').value;
    let soma = 0;

    listaClientes.some(cliente => {
        const verificaEmail = cliente.email === emailAtual;
        const verificaSenha = cliente.senha === senhaAtual;

        if (verificaEmail && verificaSenha) {
            window.location.href = '../Projeto/agendar.html'
            return true
        } else {
            soma += 1;
        }

    });

    if (soma === listaClientes.length) {
        alert('Usuário ou senha inválido')
    } else {
        alert('Você logou com sucesso')
        clienteLogado.email = emailAtual;
        localStorage.setItem('clienteLogado', JSON.stringify(clienteLogado))
    }
})