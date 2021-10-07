import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pais } from 'src/app/clases/pais';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  @Output() altaProducto: EventEmitter<any>= new EventEmitter<any>();

  producto!: Producto;
  bandera?: boolean;
  nombre: any;
  token: any;
  pais?: Pais;

  public formProducto!: FormGroup;

  public constructor(
    private productoSvc: ProductoService, 
    private router: Router,
    private fb:FormBuilder
    ) 
  { 
    this.producto = new Producto(); 
  }

  cambiarPais(p : any) {

  this.pais = p;
  this.nombre = p.name;
  this.formProducto.get('paisOrigen')?.setValue(p.name);
   
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');

    if(this.token == null)
    {
      this.router.navigateByUrl("/bienvenida");

    }

    this.formProducto = this.fb.group(
      {
      'codigo': ['',  Validators.required],
      'descripcion': ['', Validators.required],
      'precio': ['',  Validators.required],
      'stock': ['', Validators.required],
      'paisOrigen': ['', Validators.required],
      'comestible': ['', Validators.required],
   

      }
    )    
  }

  crearProducto() {

    this.producto.codigo = this.formProducto.get('codigo')?.value;
    this.producto.descripcion = this.formProducto.get('descripcion')?.value;
    this.producto.precio = this.formProducto.get('precio')?.value;
    this.producto.stock = this.formProducto.get('stock')?.value;
    this.producto.paisOrigen = this.formProducto.get('paisOrigen')?.value;
    this.producto.comestible = this.formProducto.get('comestible')?.value;

    console.log(this.producto);

     this.productoSvc.Crear(this.producto).then(() => {

       console.log("producto creado");
       location.assign('producto-detalle');
    
     })

  
  }

}
