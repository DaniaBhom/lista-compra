import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editmercadoria',
  templateUrl: './editmercadoria.component.html',
  styleUrls: ['./editmercadoria.component.css']
})
export class EditmercadoriaComponent implements OnInit {

  mercadoria = {
    id: 4,
    descricao: "Sal",
    quantidadeEstoque: 2,
    quantidadeMinima: 1,
  }
  salvarMercadoria(){
    this.mercadoria.push({
      id:this.mercadoria.id,
      descricao:this.mercadoria.descricao,
      quantidadeEstoque:this.mercadoria.quantidadeEstoque,
      quantidadeMinima:this.mercadoria.quantidadeMinima
    })
}

  constructor() { }

  ngOnInit(): void {
  }

}
