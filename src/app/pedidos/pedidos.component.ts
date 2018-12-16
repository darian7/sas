import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Observable, Subscriber, of } from 'rxjs';
import { faceCliente, facePedido } from './pedido'
import { map, switchMap, concatMap, flatMap, tap, retry, subscribeOn, timeout, catchError } from 'rxjs/operators';



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private Servicio: AuthService) { }

  PedidosClientesCola: Array<[facePedido, faceCliente]> = [];
  PedidosCola: Array<facePedido> = [];

  PedidosClientesAtendido: Array<[facePedido, faceCliente]> = [];
  PedidosAtendido: Array<facePedido> = [];

  i = 0;
  i2 = 0;

  ngOnInit() {
    this.ConsultarPedidosAtendido2();
    this.ConsultarPedidoCola2();
  }

  ConsultarPedidosAtendido2() {

    this.Servicio.CosnultarPedidoEstado("ATENDIDO").subscribe(pedidos => {
      this.PedidosAtendido = pedidos;
    }).add(() => {

      this.Servicio.CosnultarPedidoEstado("ATENDIDO").pipe(

        flatMap(x => x),
        concatMap(pedido => this.Servicio.ClienteID(pedido.fkCliente))


      ).subscribe(clientes => {

        this.PedidosClientesAtendido = [...this.PedidosClientesAtendido, [this.PedidosAtendido[this.i], clientes[0]]]
        this.i2++

      }).add(() => {
        console.log("Termino 1");
       // this.ConsultarPedidoCola2();
      })

    });

  }

  ConsultarPedidoCola2() {

    this.Servicio.CosnultarPedidoEstado2("COLA").subscribe(pedidos => {
      this.PedidosCola = pedidos;
    }).add(() => {

      this.Servicio.CosnultarPedidoEstado2("COLA").pipe(

        flatMap(x => x),
        concatMap(pedido => this.Servicio.ClienteID2(pedido.fkCliente))

      ).subscribe(clientes => {

        this.PedidosClientesCola = [...this.PedidosClientesCola, [this.PedidosCola[this.i], clientes[0]]]
        this.i++

      }).add(() => {
        console.log("Termino2")
        
      })

    })


  }



}






