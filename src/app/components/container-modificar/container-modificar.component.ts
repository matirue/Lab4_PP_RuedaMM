import { Component, Input, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/servicios/container.service';
import { take } from 'rxjs/operators';
import { Container } from 'src/app/clases/container';

@Component({
  selector: 'app-container-modificar',
  templateUrl: './container-modificar.component.html',
  styleUrls: ['./container-modificar.component.css']
})
export class ContainerModificarComponent implements OnInit {

  codigo!: number;
  marca!: string;
  capacidad!: number;


  @Input() containerModif: Container = new Container; 

 
  constructor(private containerSvc : ContainerService) 
  { 

  }


  modificarContainer()
  {
    console.log(this.containerModif);

    this.containerSvc.traerContainers().snapshotChanges().pipe(take(1)).subscribe(list=>{
      list.forEach((response):any =>{
        let container = response.payload.doc.data();
          let id = response.payload.doc.id;

          if(container.codigo == this.containerModif.codigo)
          {
            this.containerSvc.actualizarContainer(id,JSON.parse(JSON.stringify(this.containerModif)));
          }

      })
    })
  }

  ngOnInit(): void {
  }

}
