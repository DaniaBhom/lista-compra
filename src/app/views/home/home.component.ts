import { Component, OnInit } from '@angular/core';
import { LISTAMERCADORIAS } from 'src/app/base-mercadoria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Mercadorias em Estoque";
  mercadorias = LISTAMERCADORIAS

novaMercadoria = {
  id: 4,
  descricao: "Sal",
  quantidadeEstoque: 2,
  quantidadeMinima: 1,
}

adicionarMercadoria(){
    this.mercadorias.push({
      id:this.novaMercadoria.id,
      descricao:this.novaMercadoria.descricao,
      quantidadeEstoque:this.novaMercadoria.quantidadeEstoque,
      quantidadeMinima:this.novaMercadoria.quantidadeMinima
    })
}
  constructor() { }

  ngOnInit(): void {
  }

}
