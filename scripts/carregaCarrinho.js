let cartData = JSON.parse(localStorage.getItem("cartList"));
import { somaValorQuantidade, carrinhoQuantidade } from "../scripts/funcoes.js";

function carregarCarrinho(){
  let list = document.querySelector("ul.cart_list")
  console.log(list)
  for (const item of cartData) {
    const c = ` 
    <li class="cart_item" id="${item.id}">
            <div class="cart_img_desc">
                <img src="${item.imagem}" alt="">
                <p>${item.titulo}</p>
            </div>
            <div class="cart_item_container">
                <input type="number" value="${item.quantidade}">
                <span>R$ ${item.preco}</span>
                <i class="bi bi-trash3 del-btn"></i>

            </div>
        </li>
    `
    list.innerHTML += c
  }
}
carregarCarrinho()

// export function somaValorQuantidade (c) {
//   let soma = 0
//   let qtd = 0
//   for(const s of c) {
//     soma += s.preco
//     qtd +=s.quantidade
//   }
//   document.querySelector(".qtd_price_area span:first-child").innerHTML = qtd
//   document.querySelector(".qtd_price_area span:nth-child(2)").innerHTML = soma
//   localStorage.setItem("ind",qtd)
//   carrinhoQuantidade(c)
// }

somaValorQuantidade(cartData)
carrinhoQuantidade()


// export function carrinhoQuantidade (c){
//   let q = localStorage.getItem("ind")
//   let i = document.querySelector(".cart_item_indicator")
//   if (c != null) {
//     i.innerHTML = q
//     i.classList.add("show")
//   }

//     let a = i.classList
//     console.log (i.classList)

//   }

function deletarItem(){
  let listaCarrinho = document.querySelector("ul.cart_list")
  let itemTobeDel = document.querySelectorAll("i.del-btn")
  console.log(listaCarrinho.children)
  for (const item of itemTobeDel){
    item.addEventListener('click', (e) => {
    let idItem = e.target.parentNode.parentNode
    console.log(idItem)
    listaCarrinho.removeChild(idItem)

    
  })}
}

deletarItem()

