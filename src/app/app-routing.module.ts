import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmContainerComponent } from './components/abm-container/abm-container.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: BienvenidoComponent, pathMatch: 'full'},
  { path: 'bienvenida', component: BienvenidoComponent},
  { path: 'login', component: LoginComponent },
  
  { path: 'alta-producto', component: AltaProductoComponent, canActivate: [AuthGuard] },
  { path: 'producto-detalle', component: ProductoDetalleComponent, canActivate: [AuthGuard] },
  { path: 'abm-container', component: AbmContainerComponent, canActivate: [AuthGuard] },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
