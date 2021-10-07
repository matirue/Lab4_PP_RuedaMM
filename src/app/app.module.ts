import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { ListaPaisesComponent } from './components/lista-paises/lista-paises.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { ProductoListadoComponent } from './components/producto-listado/producto-listado.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { PaisProductoComponent } from './components/pais-producto/pais-producto.component';
import { CargarContainerComponent } from './components/cargar-container/cargar-container.component';
import { AbmContainerComponent } from './components/abm-container/abm-container.component';
import { ContainerAltaComponent } from './components/container-alta/container-alta.component';
import { ContainerModificarComponent } from './components/container-modificar/container-modificar.component';
import { ContainerBajaComponent } from './components/container-baja/container-baja.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    NavBarComponent,
    LoginComponent,
    AltaProductoComponent,
    ListaPaisesComponent,
    ProductoDetalleComponent,
    ProductoListadoComponent,
    DetalleProductoComponent,
    PaisProductoComponent,
    CargarContainerComponent,
    AbmContainerComponent,
    ContainerAltaComponent,
    ContainerModificarComponent,
    ContainerBajaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
