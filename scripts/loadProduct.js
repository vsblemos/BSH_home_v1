import { catalogo } from "../scripts/data.js";
let produtoID = localStorage.getItem("prodID")
let produto = catalogo.find((cat) => cat.id == produtoID)
console.log(produto)


const loadProduct = `
<div class="product_info_image">
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