import { catalogo } from "../scripts/data.js";



const loadProduct = `
<div class="product_info_image">
                <img src="${catalogo[0].imagem}" alt="">
            </div>
            <div class="product_info">
                <h2>${catalogo[0].titulo}</h2>
                <span>R$ ${catalogo[0].preco}</span>
                <input type="number" name="" id="" value="1">
                <button>Comprar</button>
                <p>${catalogo[0].descricao}</p>
            </div>
// `
console.log(catalogo[0])

document.querySelector("#product_container").innerHTML = loadProduct