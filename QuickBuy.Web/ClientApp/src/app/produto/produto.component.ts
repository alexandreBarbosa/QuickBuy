import {Component } from "@angular/core"


@Component({
  selector: "app-produto",
  template:"<html><body>{{ obterNome() }}</body></html>"
})
export class ProdutoComponent {

  //public preco: number;
  //public id: number;

  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome(): string {
    return "sansung";
  }
}
