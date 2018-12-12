import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private Servicio: AuthService) { }

  PedidosCola: Array<{
    idPedido: Number,
    referencia: String,
    fecha: String,
    estado: String,
    fkFactura: Number,
    fkCliente: Number
  }> = [];

  PedidosAtendido: Array<{
    idPedido: Number,
    referencia: String,
    fecha: String,
    estado: String,
    fkFactura: Number,
    fkCliente: Number
  }> = [];

  
  ngOnInit() {

    this.ConsultarPedidosAtendido();
    this.ConsultarPedidosCola();

  }

  ConsultarPedidosCola() {
    this.Servicio.CosnultarPedidosEstado("COLA").
      then(response => response.json())
      .then(json => {
        this.PedidosCola= json;
      }).catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
        return confirm('No Hay Conexion a Internet');
      });
  }

  ConsultarPedidosAtendido() {
    this.Servicio.CosnultarPedidosEstado("ATENDIDO").
      then(response => response.json())
      .then(json => {
        this.PedidosAtendido= json;
      }).catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
        return confirm('No Hay Conexion a Internet');
      });
  }

}
