import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ErrorComponent } from './error/error.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { CrearusuariosComponent } from './crearusuarios/crearusuarios.component';
import { InsertarproductosComponent } from './insertarproductos/insertarproductos.component';
import { FormsModule } from '@angular/forms';
import { MostrarusuariosComponent } from './mostrarusuarios/mostrarusuarios.component';
import { SearchPipe } from './search.pipe';
import { ProductosenpedidoComponent } from './productosenpedido/productosenpedido.component';

const routes: Routes = [
  { path: 'mostrarusuarios', component: MostrarusuariosComponent },
  { path: 'crearusuarios', component: CrearusuariosComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'facturas', component: FacturasComponent },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'insertarproductos', component: InsertarproductosComponent },
  { path: 'app', component: AppComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent,
    CabeceraComponent,
    NavegacionComponent,
    PedidosComponent,
    ErrorComponent,
    FacturasComponent,
    ProductosComponent,
    HomeComponent,
    CrearusuariosComponent,
    InsertarproductosComponent,
    MostrarusuariosComponent,
    SearchPipe,
    ProductosenpedidoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
