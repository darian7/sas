import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private productosService: AuthService) { }

  productos: Array<{
    idProducto: Number,
    nombre: String,
    valor: Number,
    descuento: Number,
    referencia: String,
    iva: Number,
    existencia: Number,
    comentario: String,
    imagen: String
  }> = [];

  productosTotal: Array<{
    idProducto: Number,
    nombre: String,
    valor: Number,
    descuento: Number,
    referencia: String,
    iva: Number,
    existencia: Number,
    comentario: String,
    imagen: String
  }> = [];

  porNombre = {
    valor1: ""
  };

  Mostrar = true;
  Mostrar2 = false;
  
  producto: {
    idProducto: Number,
    nombre: String,
    referencia: String,
    iva: Number,
    existencia: Number,
    comentario: String,
    estado: Number,
    fkMarca: Number,
    fkLote: Number,
    imagen: String,
    rotacion: Number,
    minimo: Number,
    maximo: Number
  } = {
      idProducto: 0,
      nombre: "",
      referencia: "",
      iva: 0,
      existencia: 0,
      comentario: "",
      estado: 0,
      fkMarca: 0,
      fkLote: 0,
      imagen: "",
      rotacion: 0,
      minimo: 0,
      maximo: 0
    };
    
  pedidoactivo = false;


  ngOnInit() {

    if (this.porNombre.valor1 == "") {
      this.Mostrar = true;
      this.Mostrar2 = false;
      this.MostrarProductosCache();
    } else {
      this.Mostrar = false;
      this.Mostrar2 = true
      this.MostrarTotalProductosConcidencia();
    }

  }

  MostrarTotalProductosConcidencia() {
    this.productosService.ListarProductosTotal(this.porNombre.valor1).then(response => response.json())
      .then(json => this.productosTotal = json[0])
  }

  MostrarProductosCache() {
    this.productosService.ListarProductos().then(response => response.json())
      .then(json => this.productos = json)
  }

  Pedido(idproducto) {
    var cars = <HTMLInputElement>document.getElementById('myonoffswitch');
    this.pedidoactivo = cars.checked;

    this.productosService.ListarProducto(idproducto).then(response => response.json()).
      then(json => this.producto = json[0])
  }


  Validarpedido() {
    console.log("pedido activo")
  }
}
