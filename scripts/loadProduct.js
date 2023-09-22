import { catalogo, cartList} from "../scripts/data.js";
let produtoID = localStorage.getItem("prodID")
let produto = catalogo.find((cat) => cat.id == produtoID)



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
    let quantidade = parseInt(document.querySelector("input[type='number']").value)
    let newCartProd = {...produto,teste:{quantidade}}
   cartList.push(newCartProd);
   console.log(cartList)
}
