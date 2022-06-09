import { Component, OnInit } from '@angular/core';
import { MercadoriaService } from '../mercadoria.service';
import { Mercadoria } from '../mercadoria';

@Component({
  selector: 'app-editmercadoria',
  templateUrl: './editmercadoria.component.html',
  styleUrls: ['./editmercadoria.component.css']
})
export class EditmercadoriaComponent implements OnInit {
  mercadoria!:Mercadoria[];

  Mercadoria = {
    id: 4,
    descricao: "Sal",
    quantidadeEstoque: 2,
    quantidadeMinima: 1,
  }



   constructor(private mercadoriaService: MercadoriaService) { }

  ngOnInit(): void {
    this.getMercadoria();
  }

  getMercadoria():void {
    this.mercadoria = this.mercadoriaService.getMercadorias();
  }

}
