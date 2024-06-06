const formLogin = document.getElementById('form-login');

// Adiciona um event listener para o evento submit do formulário de login
formLogin.addEventListener('submit', function(event) {
  // Previne o comportamento padrão do formulário (enviar os dados e recarregar a página)
  event.preventDefault();

  // Aqui você pode adicionar a lógica para validar o login

  // Exibe um alerta de sucesso
  alert('Login realizado com sucesso!');

  // Redireciona para a página inicial (index.html)
  window.location.href = '/index.html';
});