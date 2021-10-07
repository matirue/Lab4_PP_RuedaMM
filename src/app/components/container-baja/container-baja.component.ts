import { Component, Input, OnInit } from '@angular/core';
import { Container } from 'src/app/clases/container';
import { ContainerService } from 'src/app/servicios/container.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-container-baja',
  templateUrl: './container-baja.component.html',
  styleUrls: ['./container-baja.component.css']
})
export class ContainerBajaComponent implements OnInit {

  codigo! : number;
  marca!: string;
  capacidad!: number;

  @Input() containerBorrar:  Container = new Container; 

  constructor(private containerSvc : ContainerService) { }


  borrarContainer()
  {
    
    this.containerSvc.traerContainers().snapshotChanges().pipe(take(1)).subscribe(list=>{
      list.forEach((response):any =>{
        let container = response.payload.doc.data();
          let id = response.payload.doc.id;

          if(container.codigo == this.containerBorrar.codigo)
          {
            this.containerSvc.eliminarContainer(id);
            
            
          }

      })
    })
  }

  ngOnInit(): void {
  }

}
