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
  


  constructor(private Auth: AuthService) {

  }

  ngOnInit(): void {
  }

  loginUser() {
    this.Auth.ValidarUsuario(this.registerUserData).then(response => response.json())
      .then(json => {
        var validacion = json
        if (validacion[0].data != -1) {
          this.Nocultar = false;
          this.usuario = true;
        }
      })
  }
}
