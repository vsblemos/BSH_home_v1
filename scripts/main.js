import { catalogo } from "../scripts/data.js";

let array = ""

function carregarProdutos (){
  
  for (const produto of catalogo) {
    const card = `<div class="product_card" id="card-${produto.id}">
    <a href="" id=${produto.id}>
        <img class="product_image" src="${produto.imagem}">
    </a>
    <button id="${produto.id}">clique</button>
    `
    document.querySelector("#home_product_grid").innerHTML += card
  }
}
carregarProdutos()

function carregaProduto(array){
  let productsCard = document.querySelectorAll(".product_card")
  for (const productCard of productsCard) {
    productCard.addEventListener("click" , (e) => 
    {let produto = e.target.id 
    array = produto
  console.log(array)}
    )
  } 

}
carregaProduto(array)


