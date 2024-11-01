document.addEventListener('DOMContentLoaded', function() {
    // Ensure the element with ID 'tema' exists
    if (!document.getElementById('tema')) {
        console.error('Element with ID "tema" not found.');
        return;
    }
    // Função para salvar as configurações
    function salvarConfiguracoes() {
        const configuracoes = {
            tema: document.getElementById('tema').value,
            notificacoes: document.getElementById('notificacoes').checked,
            linguagem: document.getElementById('linguagem').value
        };
        
        localStorage.setItem('configuracoes', JSON.stringify(configuracoes));
        alert('Configurações salvas com sucesso!');
    }

    // Função para carregar as configurações
    function carregarConfiguracoes() {
        const configuracoes = JSON.parse(localStorage.getItem('configuracoes'));
        
        if (configuracoes) {
            document.getElementById('tema').value = configuracoes.tema;
            document.getElementById('notificacoes').checked = configuracoes.notificacoes;
            document.getElementById('linguagem').value = configuracoes.linguagem;
        }
    }

    // Adiciona evento ao botão de salvar
    document.getElementById('salvar').addEventListener('click', salvarConfiguracoes);

    // Carrega as configurações ao carregar a página
    carregarConfiguracoes();
});