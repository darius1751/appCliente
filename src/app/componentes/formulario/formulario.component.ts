import { Cliente } from './../../models/Cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public cliente:Cliente;
  constructor() {
    this.cliente = {nombre:'',cedula:'',direccion:'',telefono:''};
   }
 
  ngOnInit(): void {
  }

}
