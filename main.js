$(document).ready(function () {
  /*quando o  documento estiver pronto, quando tiver carregado o jQuery*/
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#botao-cancelar").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    e.preventDefault(); /*previne o comportamento padrão do formulário de atualizar a página quando é submetido*/
    const enderecoNovaImagem = $("#endereco-imagem-nova").val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${enderecoNovaImagem}" />`).appendTo(
      novoItem
    ); /*cria um elemento img e coloca dentro do li*/
    $(
      `<div class="overlay-imagem-link"><a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a></div>`
    ).appendTo(novoItem);
    $("ul").append(novoItem);
    $(novoItem).fadeIn(1000);
    $("endereco-imagem-nova").val("");
  });
});
