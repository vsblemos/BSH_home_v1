let pedidos = JSON.parse(localStorage.getItem("pedidos"));
let listaPedidos = pedidos.map( (p) => {return p})
const ({itens}) = listaPedidos
console.log( itens )


function carregaPedidos(){
  const order = document.getElementById("orders")
  console.log(listaPedidos)
  for (const l of listaPedidos){
    let it = (l.itens)
    
  
   
    let p = `<div>
    <p>Pedido: ${l.id}</p>
    <p>Cliente:${l.endereco.nome} Telefone: ${l.endereco.telefone}</p>
    <p>E-Mail: ${l.endereco.email}</p>
    <p>Endereço:${l.endereco.logradouro} Bairro: ${l.endereco.cidade}</p>
    <p>Cidade : ${l.endereco.cidade} Estado: ${l.endereco.estado} CEP: ${l.endereco.CEP}</p>
  </div>
  <h3>Itens</h3>
  <div class="teste"></div>
  </div>`
  order.innerHTML += p
  
    }
  }
  
  

      




carregaPedidos()