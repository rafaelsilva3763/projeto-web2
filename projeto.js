
// Adiciona o evento de clique aos botões de reserva quando a página for carregada, selecionando os elementos da página.

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.butaoreserv').forEach(button => {
      button.addEventListener('click', redirecionarParaLogin);
  });
});

// Função para o botão RESERVE AGORA da pagorcamento.html

function redirecionarParaLogin() {
  window.location.href = 'paglogin.html';
}

// BOTÃO CADASTRE-SE, aguarda o carregamento e seleciona o elemento com ID.

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('signupBtn').addEventListener('click', redirecionarParaLogin);
});

// Função para redirecionar para a página de reserva - BOTÃO LOGIN 

function redirecionarParaReserva() {
  window.location.href = 'pagreserva.html';
}

// Adiciona o evento de clique ao botão de login quando a página for carregada, junto com o ID e adiciona o evento de clique chamando a função.

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loginBtn').addEventListener('click', redirecionarParaReserva);
});

// Função para redirecionar para a página de check-in, utilizando o botão CONFIRMAR RESERVA

function redirecionarParaCheckin() {
  window.location.href = 'checkin.html';
}

// Adiciona o evento de clique ao botão de CONFIRMAR RESERVA quando a página for carregada, selecionando junto com o ID.

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('confirmarReservaBtn').addEventListener('click', redirecionarParaCheckin);
});

// Função para armazenar o valor total no localStorage e redirecionar para a página de check-in

function reservar(valor) {
  localStorage.setItem('valorTotal', valor);
  window.location.href = 'checkin.html';
}
// Armazena o valor formatado no localstorage com a chave "valorTotal"
function setValorTotal(valor) {
  localStorage.setItem('valorTotal', 'R$ ' + valor + ',00');
  window.location.href = 'checkin.html';
}

        // Função para EXIBIR o valor total armazenado no localStorage. Aguarda o carregamento do DOM, recupera o valor armazenado com a chave "valorTotal"

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
