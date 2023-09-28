import { catalogo } from "../scripts/data.js";
import { carrinhoQuantidade } from "../scripts/funcoes.js";
let produtoID = localStorage.getItem("prodID")
let produto = catalogo.find((cat) => cat.id == produtoID)
// let cart = JSON.parse(localStorage.getItem("cartList"));
let cartList = []
console.log(produto)
let cart = JSON.parse(localStorage.getItem("cartList"));
    
if (cart == null || cart.length == 0) {
    cart = []
}


carrinhoQuantidade()

const loadProduct = 
`<div class="product_info_image">
<img src="${produto.imagem}" alt="">
</div>
<div class="product_info">
<h2>${produto.titulo}</h2>
<span>R$ ${produto.preco}</span>
<input type="number" name="" id="" value="1">
<button>Comprar</button>
<p>${produto.descricao}</p>
</div>`

document.querySelector("#product_container").innerHTML = loadProduct
const btn = document.querySelector("button")
btn.addEventListener("click",() => addToCart())

function addToCart() {
   

    if (cart.find((cat) => cat.id == produtoID)) {
    alert("produto já adicionado ao carrinho, será incluido mais uma unidade")
    let itemIndex = cart.findIndex(i => i.id == produto.id)
    console.log(cart[itemIndex].quantidade += 1)
    console.log(cart)
    localStorage.setItem('cartList',JSON.stringify(cart))
    carrinhoQuantidade()
    
}   
    else {
        
        let quantidade = parseInt(document.querySelector("input[type='number']").value)
        let newCartProd = {...produto,quantidade}
        cart.push(newCartProd);
        localStorage.setItem('cartList',JSON.stringify(cart))
        alert("produto adicionado com sucesso")
        carrinhoQuantidade()
    }

}



