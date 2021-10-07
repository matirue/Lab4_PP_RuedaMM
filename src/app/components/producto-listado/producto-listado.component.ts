import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-producto-listado',
  templateUrl: './producto-listado.component.html',
  styleUrls: ['./producto-listado.component.css']
})
export class ProductoListadoComponent implements OnInit {

  @Input()
  listadoProductos: Producto[] = [];

  @Output() productoSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 

  listaProductos: any;

  tamanioLista!:Number;

  auxPais!:string;

  constructor(private prodSVC: ProductoService) {     
    this.prodSVC.getAll().subscribe(productos =>{  
    this.listadoProductos=productos;
   
    this.tamanioLista =  this.listadoProductos.length

  

  })
 }
  ngOnInit(): void {
  }


  mostrarDetalles(parametroProducto: Producto)
  {
  	console.log(parametroProducto);
    this.productoSeleccionado.emit(parametroProducto);
  }

}
