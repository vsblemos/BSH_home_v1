import { catalogo } from "../scripts/data.js";
import { carregarProdutos, abrirProduto } from "../scripts/funcoes.js";
import { carrinhoQuantidade } from "../scripts/funcoes.js";


carrinhoQuantidade()
carregarProdutos(catalogo);
abrirProduto();
