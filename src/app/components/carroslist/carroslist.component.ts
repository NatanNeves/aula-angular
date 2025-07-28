import { Component } from '@angular/core';
import { Carro } from '../../models/carro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss'
})
export class CarroslistComponent {

  lista: Carro[] = [];

  constructor() {
    
    let carro = new Carro();
    carro.id = 1;
    carro.nome = 'Fusca'; 
    carro.marca = 'Volkswagen'; 

    let carro2 = new Carro();
    carro2.id = 2;
    carro2.nome = 'Focus'; 
    carro2.marca = 'Ford';

    let carro3 = new Carro();
    carro3.id = 3;
    carro3.nome = 'Ferrari black'; 
    carro3.marca = 'Ferrari';

    this.lista.push(carro);
    this.lista.push(carro2);
    this.lista.push(carro3);

  }
}
