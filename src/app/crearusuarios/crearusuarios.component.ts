import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ifError } from 'assert';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-crearusuarios',
  templateUrl: './crearusuarios.component.html',
  styleUrls: ['./crearusuarios.component.css']
})
export class CrearusuariosComponent implements OnInit {

  UserDatos = {

    nombre: "",
    apellido: "",
    correo: "",
    contrasena: "",
    experiencia: null,
    comentario: "",
    identificacion: null,
    genero: null,
    nacimiento: "",

  }

  constructor(private CrearUsuariosService: AuthService) { }

  ngOnInit() {
  }

  CrearUsuarios() {

    if (this.UserDatos.apellido == "") {
      this.UserDatos.apellido = "Sin apellido";
    } if (this.UserDatos.nacimiento == "") {
      this.UserDatos.nacimiento = "1993-01-13";
    } if (this.UserDatos.correo == "") {
      this.UserDatos.correo = "Sin correo";
    } if (this.UserDatos.comentario == "") {
      this.UserDatos.comentario = "Sin comentario";
    } if (this.UserDatos.experiencia == null) {
      this.UserDatos.experiencia = 0;
    }

    this.CrearUsuariosService.CrearUsuarios(this.UserDatos)

  }

}
