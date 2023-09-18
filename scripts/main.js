import { catalogo } from "../scripts/data.js";



function carregarProdutos (){
  
  for (const produto of catalogo) {
    const card = `<div class="product_card" id="card-${produto.id}">
    <a href="produto2.html" id="produto-${produto.id}">
        <img class="product_image" src="${produto.imagem}">
    </a>
    `
    document.querySelector("#home_product_grid").innerHTML += card
  }
}

carregarProdutos()