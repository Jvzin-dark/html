document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simulação de verificação de login
    if (username === 'admin' && password === 'senha123') {
        errorMessage.textContent = '';
        // Redireciona para a página da loja
        window.location.href = 'loja.html';
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos.';
    }
});
