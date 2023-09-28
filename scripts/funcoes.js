

export function carregarProdutos(c) {
  for (const produto of c) {
    const card = `<div class="product_card" id="card-${produto.id}">
    <a href="produto1.html" alt="" id="${produto.id}">
        <img class="product_image" src="${produto.imagem}" id="${produto.id}">
    </a>
    `;
    document.querySelector("#home_product_grid").innerHTML += card;
  }
}

export function abrirProduto() {
  let productsCard = document.querySelectorAll(".product_card");
  for (const productCard of productsCard) {
    productCard.addEventListener("click", (e) => {
      let produto = e.target.id;
      localStorage.setItem("prodID",produto)
    });
  }
}

export function somaValorQuantidade (c) {
  let soma = 0
  let qtd = 0
  for(const s of c) {
    soma += s.preco
    qtd +=s.quantidade
  }
  document.querySelector(".qtd_price_area span:first-child").innerHTML = qtd
  document.querySelector(".qtd_price_area span:nth-child(2)").innerHTML = soma
}


export function carrinhoQuantidade (){
  let cart = JSON.parse(localStorage.getItem("cartList"));
  let indicator = document.querySelector(".cart_item_indicator");

  if (cart == null || cart.length == 0){
    indicator.classList.remove("show")
  
    } 
  else { indicator.classList.add("show")
  let qtd = 0
  for(const s of cart) {
  qtd +=s.quantidade
  } 
  indicator.innerHTML = qtd}
}


  
  


