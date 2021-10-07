import { Container } from 'src/app/clases/container';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-container-alta',
  templateUrl: './container-alta.component.html',
  styleUrls: ['./container-alta.component.css']
})
export class ContainerAltaComponent implements OnInit {

  
  codigo!: number;
  marca!: string;
  capacidad!: number;

  @Output() nuevoContainer = new EventEmitter<Container>();

  constructor() { }

  cargarAltaContainer() {
    let cont: Container = new Container();

    cont.codigo = this.codigo;
    cont.marca = this.marca;
    cont.capacidad = this.capacidad;
    
    this.nuevoContainer.emit(cont);

  
  }

  ngOnInit(): void {
  }

}
