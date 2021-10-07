import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-pais-producto',
  templateUrl: './pais-producto.component.html',
  styleUrls: ['./pais-producto.component.css']
})
export class PaisProductoComponent implements OnInit {

  @Input() detalleProd: Producto;

  constructor() { 
    this.detalleProd = new Producto();
  }

  ngOnInit(): void {
  }

}
