import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-mostrarusuarios',
  templateUrl: './mostrarusuarios.component.html',
  styleUrls: ['./mostrarusuarios.component.css']
})
export class MostrarusuariosComponent implements OnInit {

  constructor(private UsuariosService: AuthService) { }

  usuarios: Array<{
    idUsuario: Number,
    nombre: String,
    contrasena: String,
    correo: String,
    comentario: String,
    experiencia: Number,
    estado: Number,
    fkPersona: Number
  }> = [];
  buscador = "";


  ngOnInit() {
    this.MostrarUsuarios();
  }

  MostrarUsuarios() {

    this.UsuariosService.MostrarUsuarios().then(response => response.json())
      .then(json => this.usuarios = json)

  }

}
