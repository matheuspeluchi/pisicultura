import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cidade } from 'src/app/shared/components/cidades/cidade';
import { CidadeService } from 'src/app/shared/components/cidades/cidade.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clienteForm: FormGroup;
  cidades: Cidade [];

  constructor(
    private formBuilder: FormBuilder,
    private cidadeService: CidadeService
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

    })

    this.cidadeService.getCidades()
      .subscribe(
        res => {this.cidades = res,console.log(res),console.log('entrou')},
        err => console.log(err)
      )
  }

  salvar(){
    
  }

}