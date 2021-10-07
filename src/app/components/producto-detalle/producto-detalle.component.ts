import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  token: any;
  prodParaMostrar: Producto = new Producto;

  constructor() { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');

    console.log(this.token);

    if(this.token == null)
    {
      location.assign('/bienvenida');
    }
  }

  tomarProductoParaDetalles(producto: Producto)
  {
    console.log(producto)
    this.prodParaMostrar=producto;   
  }

}
