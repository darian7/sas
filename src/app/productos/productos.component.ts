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


  factura: { tipo: String, val_recibido: Number, descuento: Number, fk_usuario: Number } = {
    tipo: "CONTADO",
    val_recibido: 0,
    descuento: 0,
    fk_usuario: 0
  }

  pedido: { fkFactura: Number, fkCliente: Number } = { fkFactura: null, fkCliente: null }

  HayCliente =false;

  //Array de productos que se estan agregando al pedido actual

  ProductosPedido: Array<{ idProducto: Number, nombre: String, cantidad: String }> = [];

  //Id el pedido que se encuentra en marcha

  idPedido: Number = null;

  ngOnInit() {
    var local = localStorage.getItem('id_usuario')
    if (local != null) {
      this.factura.fk_usuario = parseInt(local);
    }
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

  ExisteCliente(fkcliente){
    console.log(fkcliente);
    if (fkcliente!="") {
      this.HayCliente=true;
    } else {
      this.HayCliente=false;
    }
  }

  MostrarTotalProductosConcidencia() {
    this.productosService.ListarProductosTotal(this.porNombre.valor1).then(response => response.json())
      .then(json => this.productosTotal = json[0])
  }

  MostrarProductosCache() {
    this.productosService.ListarProductos().then(response => response.json())
      .then(json => this.productos = json).catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
        return confirm('No Hay Conexion a Internet');
      });
  }

  Pedido(idproducto) {
    this.productosService.ListarProducto(idproducto).then(response => response.json()).
      then(json => this.producto = json[0])
  }


  Validarpedido(Cantidad) {
    //console.log("pedido solicitado con " + Cantidad + " de producto: " + this.producto.nombre + " id " + this.producto.idProducto)
    var Pod: { idProducto: Number, nombre: String, cantidad: String } = {
      idProducto: this.producto.idProducto, nombre: this.producto.nombre, cantidad: Cantidad
    }
    this.ProductosPedido.push(Pod);
    // puede aver errores
    this.productosService.AñadirProductos({ fkProducto: Pod.idProducto, fkPedido: this.idPedido, cantidad: Pod.cantidad }).
      then(response => response.json()).
      then(json => {
        console.log(json)
      });
    //
  }

  CerrarPedido(activado, identificacion) {
    if (activado) {
      this.pedidoactivo = true;
      console.log("se abrio el pedido")
      this.productosService.ClienteIdentificacion(identificacion).then(response => response.json()).
        then(json => {
          this.pedido.fkCliente = json[0].idCliente;
          this.crearFactura();
        });

    } else {
      this.pedidoactivo = false;
      console.log("se cerro el pedido")
      this.productosService.CambiarEstae(this.idPedido).then(response => response.json()).
        then(json => {
          console.log(json)
          this.ProductosPedido = [];
        })
    }
  }

  crearFactura() {
    this.productosService.CrearFactura(this.factura).then(response => response.json()).
      then(json => {
        //console.log(json)
        this.pedido.fkFactura = json[0].idFactura;
        this.crearPedido();
      })
  }

  crearPedido() {
    this.productosService.CrearPedido(this.pedido).then(response => response.json()).
      then(json => {
        console.log(json[0].idPedido + " este es el id del pedido creado");
        this.idPedido = json[0].idPedido;
      });
  }

  EliminarProductoPedido(index) {
    console.log("se elminara el producto")
    // puede aver errores
    this.productosService.ElimarProductosPedido({ fkProducto: this.ProductosPedido[index].idProducto, fkPedido: this.idPedido }).
      then(response => response.json()).
      then(json => {
        console.log(json);
        this.ProductosPedido.splice(index, 1);
      });
    //
  }


}
