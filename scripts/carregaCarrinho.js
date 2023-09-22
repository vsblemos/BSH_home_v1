let cartData = JSON.parse(localStorage.getItem("cartList"));
console.log(cartData)
function carregarCarrinho(){
  let list = document.querySelector("ul.cart_list")
  console.log(list)
  for (const item of cartData) {
    const c = ` 
    <li class="cart_item">
            <div class="cart_img_desc">
                <img src="${item.imagem}" alt="">
                <p>${item.titulo}</p>
            </div>
            <div class="cart_item_container" id="${item.id}">
                <input type="number" name="" id="" value="${item.quantidade}">
                <span>R$ ${item.preco}</span>
                <i><svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 4H18V3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.316071 15.7956 0 15 0H9C8.20435 0 7.44129 0.316071 6.87868 0.87868C6.31607 1.44129 6 2.20435 6 3V4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6H2V24C2 24.5304 2.21071 25.0391 2.58579 25.4142C2.96086 25.7893 3.46957 26 4 26H20C20.5304 26 21.0391 25.7893 21.4142 25.4142C21.7893 25.0391 22 24.5304 22 24V6H23C23.2652 6 23.5196 5.89464 23.7071 5.70711C23.8946 5.51957 24 5.26522 24 5C24 4.73478 23.8946 4.48043 23.7071 4.29289C23.5196 4.10536 23.2652 4 23 4ZM8 3C8 2.73478 8.10536 2.48043 8.29289 2.29289C8.48043 2.10536 8.73478 2 9 2H15C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3V4H8V3ZM20 24H4V6H20V24ZM10 11V19C10 19.2652 9.89464 19.5196 9.70711 19.7071C9.51957 19.8946 9.26522 20 9 20C8.73478 20 8.48043 19.8946 8.29289 19.7071C8.10536 19.5196 8 19.2652 8 19V11C8 10.7348 8.10536 10.4804 8.29289 10.2929C8.48043 10.1054 8.73478 10 9 10C9.26522 10 9.51957 10.1054 9.70711 10.2929C9.89464 10.4804 10 10.7348 10 11ZM16 11V19C16 19.2652 15.8946 19.5196 15.7071 19.7071C15.5196 19.8946 15.2652 20 15 20C14.7348 20 14.4804 19.8946 14.2929 19.7071C14.1054 19.5196 14 19.2652 14 19V11C14 10.7348 14.1054 10.4804 14.2929 10.2929C14.4804 10.1054 14.7348 10 15 10C15.2652 10 15.5196 10.1054 15.7071 10.2929C15.8946 10.4804 16 10.7348 16 11Z" fill="black"/>
                </svg></i>
            </div>
        </li>
    `
    list.innerHTML += c
  }
}
carregarCarrinho()

function somaValorQuantidade () {
  let soma = 0
  let qtd = 0
  for(const s of cartData) {
    soma += s.preco
    qtd +=s.quantidade
  }
  document.querySelector(".qtd_price_area span:first-child").innerHTML = qtd
  document.querySelector(".qtd_price_area span:nth-child(2)").innerHTML = soma
  console.log(`Valor: ${soma} Quantidade: ${qtd}`)
  console.log(qtd1)
}

somaValorQuantidade()