document.addEventListener('DOMContentLoaded', () => {
  // Captura o formulário de cadastro
  const formCadastro = document.getElementById('form-cadastro');

  // Adiciona um event listener para o evento submit do formulário de cadastro
  formCadastro.addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário (enviar os dados e recarregar a página)
    event.preventDefault();

    // Obtém os valores dos campos de cadastro
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Aqui você pode adicionar a lógica para armazenar os dados localmente

    // Limpa os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';

    // Exibe um alerta de sucesso
    alert('Cadastro realizado com sucesso!');

    // Redireciona para a página de login
    window.location.href = '/paginas/login.html';
  });

  // Captura o formulário de login

});
