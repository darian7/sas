import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-crearusuarios',
  templateUrl: './crearusuarios.component.html',
  styleUrls: ['./crearusuarios.component.css']
})
export class CrearusuariosComponent implements OnInit {

  UserDatos = {

    nombre :"",
    apellido: "",
    correo:"",
    contrasena:"",
    experiencia:"",
    comentario: "",
    identificacion:null,
    genero:null,
    nacimiento:"",
  
  }

  constructor(private CrearUsuariosService: AuthService) { }

  ngOnInit() {
  }

  CrearUsuarios() {
    this.CrearUsuariosService.CrearUsuarios(this.UserDatos)
   
  }

}
