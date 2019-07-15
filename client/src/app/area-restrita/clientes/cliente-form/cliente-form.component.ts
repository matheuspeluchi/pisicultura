import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Cidade } from 'src/app/shared/components/cidades/cidade';
import { CidadeService } from 'src/app/shared/components/cidades/cidade.service';
import { ClienteService } from '../cliente.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  
  cidades: Cidade [];
  btnSalvar = {label: 'Salvar', hidden: false};
  cliente: Cliente = new Cliente();

  constructor(
    private cidadeService: CidadeService,
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cidades = this.activatedRoute.snapshot.data.cidades;
    this.clienteService.dataSource.subscribe(res => {this.cliente = res,console.log(res)})
  }

  salvar() {

    if (this.cliente._id){
      this.clienteService.update(this.cliente).subscribe(
        () => this.router.navigated[('/arearestrita/cliente')],
        err => console.log(err.error.errors)
      );
    }else{
      this.clienteService.save(this.cliente).subscribe(
        () => this.router.navigated[('/arearestrita/cliente')],
        err => console.log(err.error.errors)
      )
    }
    
  }

}
