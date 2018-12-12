import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-insertarproductos',
  templateUrl: './insertarproductos.component.html',
  styleUrls: ['./insertarproductos.component.css']
})
export class InsertarproductosComponent implements OnInit {

  producto :{
    nombre:String,
    referencia:String,
    comentario:String,
    precio:Number,
    existencia:Number,
    iva:Number,
    descuento:Number,
    detalle:String,
    imagen:String
  } = {
    nombre :null,
    referencia: "",
    comentario:"",
    precio:null,
    existencia:null,
    iva: null,
    descuento:null,
    detalle:"",
    imagen:"",
  }

  constructor(private CrearproductoService: AuthService ) { }

  ngOnInit() {
  }

  CrearProductos() {
    if (this.producto.imagen=="") {
      this.producto.imagen="http://www.cristaldelponiente.com/administrador/vistas/img/productos/default/anonymous.png";
    }if (this.producto.comentario=="") {
      this.producto.comentario="nulo";
    }if (this.producto.descuento==null) {
      this.producto.descuento=0;
    }if (this.producto.detalle=="") {
      this.producto.detalle="nulo";
    }if (this.producto.existencia==null) {
      this.producto.existencia=0;
    }if (this.producto.iva==null) {
      this.producto.iva=0;
    }

    this.CrearproductoService.CrearProductos(this.producto).catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
      return confirm('No Hay Conexion a Internet');
    });

  }

}
