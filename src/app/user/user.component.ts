import { Component, OnInit, Input } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
ruta:boolean=false;


  constructor() { }

  ngOnInit() {
  }

}
