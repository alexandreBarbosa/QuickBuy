"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lojaCarrinhoCompras = /** @class */ (function () {
    function lojaCarrinhoCompras() {
        this.produtos = [];
    }
    lojaCarrinhoCompras.prototype.adicionar = function (produto) {
        var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
        if (!produtoLocaStorage) {
            // se não existir nada dentro do localStorage
            this.produtos.push(produto);
        }
        else {
            // se já existir itens armazenados na sessao(localStorage)
            this.produtos = JSON.parse(produtoLocaStorage);
            this.produtos.push(produto);
        }
        localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
    };
    lojaCarrinhoCompras.prototype.obterProdutos = function () {
        var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
        if (produtoLocaStorage) {
            return JSON.parse(produtoLocaStorage);
        }
    };
    lojaCarrinhoCompras.prototype.removerProduto = function (produto) {
        var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
        if (produtoLocaStorage) {
            this.produtos = JSON.parse(produtoLocaStorage);
            this.produtos = this.produtos.filter(function (p) { return p.id != produto.id; });
            localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
        }
    };
    lojaCarrinhoCompras.prototype.atualizar = function (produtos) {
        localStorage.setItem("produtoLocaStorage", JSON.stringify(produtos));
    };
    return lojaCarrinhoCompras;
}());
exports.lojaCarrinhoCompras = lojaCarrinhoCompras;
//# sourceMappingURL=loja.carrinho.compras.js.map