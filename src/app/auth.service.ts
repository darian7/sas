import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlBase } from './activos/confi';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public http: HttpClient, public urlbase: urlBase) {
  }

  ValidarUsuario(user) {

    return fetch(this.urlbase.geturl() + "users/signin", {
      method: 'POST',
      body: 'correo=' + user.correo + '&&contrasena=' + user.contrasena,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
  }

  CrearUsuarios(userdatos) {

    fetch(this.urlbase.geturl() + "persons/create", {
      method: 'POST',
      body: 'nombre=' + userdatos.nombre + '&&apellido=' + userdatos.apellido + '&&genero=' + userdatos.genero + '&&fe_naci=' + userdatos.nacimiento + '&&identifi=' +
        userdatos.identificacion + '&&estado=1',
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })

    fetch(this.urlbase.geturl() + "users/create", {
      method: 'POST',
      body: 'nombre=' + userdatos.nombre + ' ' + userdatos.apellido + '&&contrasena=' + userdatos.contrasena + '&&correo=' + userdatos.correo + '&&comentario=' +
        userdatos.comentario + '&&experiencia=' + userdatos.experiencia + '&&estado=1&&fkPersona=1',
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
  }

  MostrarUsuarios() {
    return fetch(this.urlbase.geturl() + "users/All")
  }

  CrearProductos(producto) {
    fetch(this.urlbase.geturl() + "products/create", {
      method: 'POST',
      body: 'nombre=' + producto.nombre + '&&referencia=' + producto.referencia + '&&iva=' + producto.iva +
        '&&existencia=' + producto.existencia +
        '&&comentario=' + producto.comentario + '&&fkMarca=285&&fkLote=2&&imagen=' + producto.imagen +
        '&&rotacion=2&&minimo=2&&maximo=2&&valor='
        + producto.precio + '&&descuento=' + producto.descuento + '&&detalle=' + producto.detalle,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
  }

  ListarProducto(idproducto) {

    return fetch(this.urlbase.geturl() + "products/getOne/" + idproducto)

  }

  ListarProductos() {
    return fetch(this.urlbase.geturl() + "products/products_cache")
  }

  ListarProductosTotal(consulta: String) {
    return fetch(this.urlbase.geturl() + "products/queryProduct/" + consulta)
  }
  ListarPedidos() {
  }

  CrearFactura(factura) {
    return fetch(this.urlbase.geturl() + "factura/create", {
      method: 'POST',
      body: 'tipo=' + factura.tipo + '&&val_recibido=' + factura.val_recibido + '&&descuento=' + factura.descuento +
        '&&fk_usuario=' + factura.fk_usuario,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
  }


  CrearPedido(pedido) {
    return fetch(this.urlbase.geturl() + "pedido/create", {
      method: 'POST',
      body: 'fkFactura=' + pedido.fkFactura + '&&fkCliente=' + pedido.fkCliente,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
  }

  AñadirProductos(producto) {
    console.log("dentro añadir productos")
    return fetch(this.urlbase.geturl() + "pedido/AddProductToPedido", {
      method: 'POST',
      body: 'fkProducto=' + producto.fkProducto + '&&fkPedido=' + producto.fkPedido + '&&cantidad=' + producto.cantidad,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
  }

  CambiarEstae(idPedido) {

    return fetch(this.urlbase.geturl() + "pedido/ChangeStatePedido", {
      method: 'PUT',
      body: 'idPedido=' + idPedido + '&&state=FIN',
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })

  }



}
