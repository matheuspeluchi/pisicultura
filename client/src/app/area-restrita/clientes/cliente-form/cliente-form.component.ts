import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Cidade } from 'src/app/shared/components/cidades/cidade';
import { CidadeService } from 'src/app/shared/components/cidades/cidade.service';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  clienteForm: FormGroup;
  cidades: Cidade [];
  btnSalvar = {label: 'Salvar', hidden: false};

  constructor(
    private formBuilder: FormBuilder,
    private cidadeService: CidadeService,
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      rsocial: [''],
      fantasia: [''],
      cnpj: [''],
      ie: [''],
      endereco: [''],
      numero: [''],
      bairro: [''],
      cidade: [''],

    });

    this.cidadeService.getCidades()
      .subscribe(
        res => this.cidades = res,
        err => console.log(err)
      );
  }

  salvar() {
    const cliente = this.clienteForm.value as Cliente;
    this.clienteService.save(cliente).subscribe(
      res => this.router.navigated[('/arearestrita/cliente')],
      err => console.log(err.error.errors)
    );
  }

}
