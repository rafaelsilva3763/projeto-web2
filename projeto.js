/* Botão de reserva */
// Função para redirecionar para a página de login
function redirecionarParaLogin() {
  window.location.href = "paglogin.html";
}

// Adiciona o evento de clique aos botões de reserva quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.butaoreserv').forEach(button => {
      button.addEventListener('click', redirecionarParaLogin);
  });
});


// Função para redirecionar para a página de login
function redirecionarParaLogin() {
  window.location.href = 'paglogin.html';
}

// Adiciona o evento de clique ao botão de cadastro quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('signupBtn').addEventListener('click', redirecionarParaLogin);
});

// Função para redirecionar para a página de reserva
function redirecionarParaReserva() {
  window.location.href = 'pagreserva.html';
}

// Adiciona o evento de clique ao botão de login quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loginBtn').addEventListener('click', redirecionarParaReserva);
});

// Função para redirecionar para a página de check-in
function redirecionarParaCheckin() {
  window.location.href = 'checkin.html';
}

// Adiciona o evento de clique ao botão de confirmar reserva quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('confirmarReservaBtn').addEventListener('click', redirecionarParaCheckin);
});
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
// Função para armazenar o valor total no localStorage e redirecionar para a página de check-in
function reservar(valor) {
  localStorage.setItem('valorTotal', valor);
  window.location.href = 'checkin.html';
}
function setValorTotal(valor) {
  localStorage.setItem('valorTotal', 'R$ ' + valor + ',00');
  window.location.href = 'checkin.html';
}

        // Função para exibir o valor total armazenado no localStorage
        document.addEventListener('DOMContentLoaded', function() {
            const valorTotal = localStorage.getItem('valorTotal');
            if (valorTotal) {
                document.getElementById('valor-total').innerText = 'VALOR TOTAL = ' + valorTotal;
            }
        });

        // Função para redirecionar ao submeter o formulário
        function handleFormSubmit(event) {
            event.preventDefault(); // Evita o envio padrão do formulário
            window.location.href = 'final.html'; // Redireciona para final.html
        }
