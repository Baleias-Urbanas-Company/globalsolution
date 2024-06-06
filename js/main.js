let listaUsuario = [
    {
      nomeCompleto: "Jose da Silva",
      emailUsuario: "jo@email.com",
      senhaUsuario: "123456",
    },
    {
      nomeCompleto: "Joao Antonio",
      emailUsuario: "an@email.com",
      senhaUsuario: "123456",
    },
    {
      nomeCompleto: "Marco Antonio",
      emailUsuario: "ma@email.com",
      senhaUsuario: "123456",
    },
    {
      nomeCompleto: "Carlos Silva",
      emailUsuario: "ca@email.com",
      senhaUsuario: "123456",
    },
    {
      nomeCompleto: "Luis Claudio",
      emailUsuario: "lc@email.com",
      senhaUsuario: "123456",
    },
  ];
  
  function validar(inputEmail, inputSenha) {
  
  //Recuperar elemento de msgStatus
  let msgStatus = document.querySelector(".valida");
  
  for (let x = 0; x < listaUsuario.length; x++) {
      
      if ((inputEmail.value == listaUsuario[x].emailUsuario) && (inputSenha.value == listaUsuario[x].senhaUsuario)) {
        //Redirect
          msgStatus.setAttribute("class","sucesso");
          msgStatus.innerText = "Login realizado com sucesso!";
  
          //Guardando o objeto validado no localStorage:
          localStorage.setItem("usuario-logado", JSON.stringify(listaUsuario[x]));
          
          setTimeout(function(){
              msgStatus.setAttribute("class","valida");
              msgStatus.innerText = "";
              window.location.href = "../sucesso.html";
          }, 3000);
          return false;
      }
  }
      msgStatus.setAttribute("class","erro");
      msgStatus.innerText = "Login ou senha invalidos!";
      setTimeout(function(){
          msgStatus.setAttribute("class","valida");
          msgStatus.innerText = "";
          window.location.href = "../erro.html";
      }, 3000);
      return false;
  }
  
  let inputCpf = document.querySelector("#idCpf");
  inputCpf.addEventListener("input", ()=>{
      let cpf = inputCpf.value;
  
      //Removendo os caractéres indesejados com regex:
      cpf = cpf.replace(/\D/g, "");
      //Aplicando a mascara ao CPF e adicionando pontos e traço nos lugares corretos.
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  
      inputCpf.value = cpf;
  });
  
  //EXERCÍCIOS
  
  // Exercício 1 - Variáveis e Hoisting:
  // Qual será o valor de nome após a execução do código abaixo?
  // "use strict";
  // var nome = "Joaquim";
  // if (true) {
  //     let nome = "João";
  // }
  // console.log(nome);
  
  // Exercício 2 - Declaração de Variáveis:
  // Declare uma variável estrito utilizando let sem atribuir um valor. Imprima o valor de estrito no console.
  
  // Exercício 3 - Tipos de Dados:
  // Qual é o tipo de dado da variável str?
  // let str = "Olá, mundo!";
  
  // Exercício 4 - Mesclar Arrays:
  // Crie um novo array chamado arrConcatenado que seja a concatenação dos arrays arr1 e arr2 dos exemplos passados. Imprima arrConcatenado no console.
  
  // Exercício 5 - Acesso a Propriedades de Objetos:
  // Acesse a propriedade idade do objeto obj e imprima seu valor no console.
  // let obj = { nome: "João", idade: 25, devedor: true };
  
  // Exercício 6 - Atributo Variável de Objetos:
  // Atribua a string "São Paulo" à propriedade cidade do objeto obj da questão 5. Imprima o obj no console.
  
  // Exercício 7 - Conversão de String para Número:
  // Converta a string "10" em um número e imprima o resultado no console.
  
  // Exercício 8 - Estrutura Condicional com Operadores:
  // Qual será a saída do código abaixo?
  // let idade = 20;
  // let result = (idade >= 18) ? "Maior de idade" : "Menor de idade";
  // console.log(result);
  
  // Exercício 9 - Estrutura Condicional Tradicional:
  // Qual será a saída do código abaixo?
  // let age = 20;
  // if (age >= 18) {
  //     console.log("Maior de idade");
  // } else {
  //     console.log("Menor de idade");
  // }
  
  // Exercício 10 - Mesclar Arrays com Spread:
  // Crie um novo array chamado arr4 que seja a concatenação dos arrays arr1 e arr2 dos exemplospassados e utilizando o operador spread. Imprima arr4 no console.
  
  //Recuperando o botao login:
  const botaoLogin = document.querySelector("#btnLogin");
  //Recuperando o elemento dialog:
  const modal = document.querySelector("dialog");
  //Atrelando um evento de click ao botao login:
  botaoLogin.addEventListener("click", (e)=>{
    //Abrindo o dialog:
    // modal.showModal();
    modal.showModal();
  })
  
  //Recuperando o botao close:
  const botaoClose = document.querySelector("#btnClose");
  //Atrelando um evento de click ao botao login:
  botaoClose.addEventListener("click", (e)=>{
    //Fechando o dialog:
    modal.close();
  })
  
  function tempo() {
    let relogio = document.querySelector("#relogio");
    relogio.style.margin = "50px";
    let hora = new Date();
    relogio.innerHTML = (hora.toLocaleString()).slice(-8);
  }
  
  let ponto;
  const botaoLiga = document.querySelector("#btnLiga");
  const botaoDesliga = document.querySelector("#btnDesliga");
  
  botaoLiga.addEventListener("click", (e)=>{
     ponto = setInterval(tempo,1000);  
  });
  
  botaoDesliga.addEventListener("click", (e)=>{
    clearInterval(ponto);
  });