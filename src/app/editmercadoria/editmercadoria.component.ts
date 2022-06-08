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

  constructor() { }

  ngOnInit(): void {
  }

}
