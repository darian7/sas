import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-insertarproductos',
  templateUrl: './insertarproductos.component.html',
  styleUrls: ['./insertarproductos.component.css']
})
export class InsertarproductosComponent implements OnInit {

  producto = {
    nombre :"",
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

    

    this.CrearproductoService.CrearProductos(this.producto)

  }

}
