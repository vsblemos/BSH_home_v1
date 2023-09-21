import { catalogo } from "../scripts/data.js";

let array = "";

function carregarProdutos() {
  for (const produto of catalogo) {
    const card = `<div class="product_card" id="card-${produto.id}">
    <a href="produto1.html" alt="" id="${produto.id}">
        <img class="product_image" src="${produto.imagem}" id="${produto.id}">
    </a>
        
    
    `;
    document.querySelector("#home_product_grid").innerHTML += card;
  }
}
carregarProdutos();

function carregaProduto(array) {
  let productsCard = document.querySelectorAll(".product_card");
  for (const productCard of productsCard) {
    productCard.addEventListener("click", (e) => {
      let produto = e.target.id;
      localStorage.setItem("prodID",produto)
      array = produto;
      console.log(array);
    });
  }
}
carregaProduto(array);
