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
    valor1: ""
  };
  
  Mostrar = true;
  Mostrar2 = false;

  producto = [];
  productoreal = {};

  pedidoactivo = false;


  ngOnInit() {

    if (this.porNombre.valor1 == "" ) {
     
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

  Pedido(idproducto) {

    console.log("activado"+idproducto)

    var cars= <HTMLInputElement>document.getElementById('myonoffswitch');
    this.pedidoactivo=cars.checked;

    this.productosService.ListarProducto(idproducto).then(response => response.json()).
      then(json => this.producto = json)

    for (let index = 0; index < this.producto.length; index++) {
      this.productoreal = this.producto[index];
    }


  }


  Validarpedido() {
    console.log("pedido activo")
  }
}
