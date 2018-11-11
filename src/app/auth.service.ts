import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {



  private _ValidarUsuarioUrl = "http://40.121.134.227:3000/users/signin"
  private _MostrarproductosUrl = "http://40.121.134.227:3000/products/products_cache"
  private _MostrarproductosTolalUrl = "http://40.121.134.227:3000/products/queryProduct/"
  private _MostrarproductoUrl= "http://40.121.134.227:3000/products/getOne/";
  private _MostrarusuariosUrl = "http://40.121.134.227:3000/users/All"
  private _CrearUsuarioUrl = "http://40.121.134.227:3000/users/create"
  private _CrearPersonaUrl =  "http://40.121.134.227:3000/persons/create"
  private _CrearProductoUrl = "http://40.121.134.227:3000/products/create"


  constructor(public http: HttpClient) {
  }


  ValidarUsuario(user) {

    
    return fetch(this._ValidarUsuarioUrl, {
      method: 'POST',
      body: 'correo=' + user.correo + '&&contrasena=' + user.contrasena,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })



  }

  CrearUsuarios(userdatos) {

    fetch(this._CrearPersonaUrl, {
      method: 'POST',
      body: 'nombre=' + userdatos.nombre + '&&apellido=' + userdatos.apellido + '&&genero=' + userdatos.genero + '&&fe_naci=' + userdatos.nacimiento + '&&identifi=' +
        userdatos.identificacion + '&&estado=1',
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })

    fetch(this._CrearUsuarioUrl, {
      method: 'POST',
      body: 'nombre=' + userdatos.nombre + ' ' + userdatos.apellido + '&&contrasena=' + userdatos.contrasena + '&&correo=' + userdatos.correo + '&&comentario=' +
        userdatos.comentario + '&&experiencia=' + userdatos.experiencia + '&&estado=1&&fkPersona=1',
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })


  }

  MostrarUsuarios() {
    return fetch(this._MostrarusuariosUrl)
  }

  CrearProductos(producto) {

    fetch(this._CrearProductoUrl, {
      method: 'POST',
      body: 'nombre='+producto.nombre+'&&referencia='+producto.referencia+'&&iva='+producto.iva+'&&existencia='+producto.existencia+
      '&&comentario='+producto.comentario+'&&fkMarca=285&&fkLote=2&&imagen='+producto.imagen+
      '&&rotacion=2&&minimo=2&&maximo=2&&valor='
      +producto.precio+'&&descuento='+producto.descuento+'&&detalle='+producto.detalle,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })

  }

  ListarProducto(idproducto) {

return fetch(this._MostrarproductoUrl+idproducto)

  }

  ListarProductos() {
    return fetch(this._MostrarproductosUrl)
  }

  ListarProductosTotal(consulta:String) {
    return fetch(this._MostrarproductosTolalUrl+consulta)
  }

  ListarPedidos() {

  }




}
