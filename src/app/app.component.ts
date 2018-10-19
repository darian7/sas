import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  Nocultar: boolean = true;
  usuario: boolean = false;
  registerUserData = {}
  validacion = [];


  constructor(private Auth: AuthService) {

  }

  ngOnInit(): void {
  }

  loginUser() {
    this.Auth.ValidarUsuario(this.registerUserData).then(response => response.json())
      .then(json => {
        this.validacion = json
        for (let index = 0; index < this.validacion.length; index++) {
          if (this.validacion[index].data == 3) {
            this.Nocultar = false;
            this.usuario = true;
          }
        }
      })
  }
}
