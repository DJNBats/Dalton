// script3.js

// Obtém a modal
var modal = document.getElementById("myModal");

// Obtém o elemento <span> que fecha a modal
var span = document.getElementsByClassName("close")[0];

// Obtém os elementos de categoria
var categorias = document.querySelectorAll(".categoria123");

// Adiciona um evento de clique a cada categoria
categorias.forEach(function(categoria) {
  categoria.addEventListener("click", function() {
    // Obtém o título, a imagem e a descrição da categoria clicada
    var title = categoria.querySelector("h3").innerText;
    var imgSrc = categoria.querySelector("img").src;
    var description = categoria.querySelector(".descricao").innerText;

    // Atualiza o conteúdo da modal
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-image").src = imgSrc;
    document.getElementById("modal-description").innerText = description;

    // Exibe a modal
    modal.style.display = "block";
  });
});

// Quando o usuário clicar no <span> (x), fecha a modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora da modal, fecha a modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}