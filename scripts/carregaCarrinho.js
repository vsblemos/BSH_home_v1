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
  for (const item of itemTobeDel){
    item.addEventListener('click', (e) => {
    let idItem = e.target.parentNode.parentNode
    let itemIndex = cartData.findIndex(i => i.id == idItem.id)
    // console.log(idItem.id)
    listaCarrinho.removeChild(idItem)
    // console.log(itemIndex, cartData)
    cartData.splice(itemIndex,1)
    // console.log(cartData)
    localStorage.setItem('cartList',JSON.stringify(cartData))
    somaValorQuantidade(cartData)
    carrinhoQuantidade()


    
  })}
}

deletarItem()




const finalizar = document.querySelectorAll("button.finalizar")
  for ( const f of finalizar) {
    f.addEventListener("click", () => gerarPedido())
  }


function gerarPedido (){

  
  let cartData = JSON.parse(localStorage.getItem("cartList"));
  let nome = document.querySelector("input#nome")
  let logradouro = document.querySelector("input#logradouro")
  let cidade = document.querySelector("input#cidade")
  let bairro = document.querySelector("input#bairro")
  let estado = document.querySelector("input#estado")
  let telefone = document.querySelector("input#telefone")
  let email = document.querySelector("input#email")
  let listaCarrinho = document.querySelector("ul.cart_list")
  let pedidos = JSON.parse(localStorage.getItem("pedidos"));
  
  if (pedidos == null || pedidos == 0) {
    pedidos = []
  }


  let endereco ={ 
    nome: nome.value,
    logradouro: logradouro.value,
    cidade: cidade.value,
    bairro: bairro.value,
    estado: estado.value,
    telefone: telefone.value,
    email: email.value,
    cep: document.querySelector("input#CEP")
  }

  let pedido = { 
    id: pedidos.length + 1,
    itens : cartData,
    endereco: endereco
  
  }

  pedidos.push(pedido)
  localStorage.setItem('pedidos',JSON.stringify(pedidos))
  alert("Compra concluida com sucesso!")
  listaCarrinho.remove()
  localStorage.removeItem("cartList")
  localStorage.removeItem("prodID")
  carrinhoQuantidade()
  console.log(pedidos)
  
  

  
  

}
