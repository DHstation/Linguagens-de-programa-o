function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  
  // Obtém o valor digitado pelo usuário no campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Verifica se o campo de pesquisa está vazio ou contém apenas um espaço em branco
  if(campoPesquisa.trim() === ""){
    // Se o campo estiver vazio, exibe uma mensagem informando que nada foi encontrado
    section.innerHTML = "<p>Nothing found, please enter the name of a programming language</p>";
    return; // Interrompe a execução da função se o campo estiver vazio
  }

  // Converte o texto da pesquisa para minúsculas para garantir que a busca não seja sensível a maiúsculas e minúsculas
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = "";

  // Itera sobre cada item na lista de dados (presumivelmente um array de objetos com informações sobre linguagens de programação)
  for (let dado of dados) {
    // Converte o título, a descrição e as tags do dado para minúsculas para comparação case-insensitive
    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    let tags = dado.tags.toLowerCase();
    
    // Verifica se o texto de pesquisa está incluído no título, descrição ou tags do dado
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      // Se houver correspondência, adiciona um bloco de HTML com as informações do dado aos resultados
      resultados += `
      <div class="item-resultado">
        <img src="${dado.img}" alt="Imagem" class="IMG">
        <h2 class="name-languagens">${dado.titulo}</h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Clique aqui para mais informações</a>
      </div>
      `;
    }
  }
  
  // Se nenhum resultado for encontrado, exibe uma mensagem informando que nada foi encontrado
  if(resultados === ""){
    resultados = "<p>Nothing found, please enter the name of a programming language</p>";
  }

  // Atualiza o conteúdo HTML da seção de resultados com os resultados da pesquisa
  section.innerHTML = resultados;
}