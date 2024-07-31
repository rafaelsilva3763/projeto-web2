// Função para validar o formulário de cadastro
function validateSignupForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Verificar se todos os campos foram preenchidos
    if (username === "" || email === "" || password === "") {
        alert("Todos os campos devem ser preenchidos.");
        return false;
    }

    // Verificar a validade do e-mail
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Digite um e-mail válido.");
        return false;
    }

    // Verificar a força da senha (opcional)
    if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return false;
    }

    // Se todas as validações passarem
    return true;
}

// Adicionar o evento de clique no botão de cadastro
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signupBtn').addEventListener('click', function() {
        if (validateSignupForm()) {
            window.location.href = 'paglogin.html'; // Redirecionar se a validação passar
        }
    });
});