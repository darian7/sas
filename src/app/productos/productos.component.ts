import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private productosService: AuthService) { }

  productos = [];
  productosTotal = [];
  porNombre = {
    valor1: "",
    valor2: ""
  };
  Mostrar = true;
  Mostrar2 = false;
  i = 1;


  ngOnInit() {

    if (this.porNombre.valor1 == "" && this.porNombre.valor2 == "") {
      this.Mostrar = true;
      this.Mostrar2 = false;
      this.MostrarProductos();

    } else {
     
      this.Mostrar = false;
      this.Mostrar2 = true
      this.MostrarTotalProductos();
    }

  }

  MostrarTotalProductos() {
    
    
      this.productosService.ListarProductosTotal(this.porNombre.valor1).then(response => response.json())
      .then(json => this.productosTotal = json) 
      

  }

  MostrarProductos() {
    this.productosService.ListarProductos().then(response => response.json())
      .then(json => this.productos = json)
  }

}
