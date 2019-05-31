import { Component, OnInit } from '@angular/core';

import { Empresa } from '../empresa/empresa';
import { EmpresaService } from '../empresa/empresa.service';

@Component({
  selector: 'app-area-restrita',
  templateUrl: './area-restrita.component.html',
  styleUrls: ['./area-restrita.component.css']
})
export class AreaRestritaComponent implements OnInit {

  columnDefs = [
    {headerName: 'Razão Social', field: 'rsocial', sortable: true, resizable: true},
    {headerName: 'Fantasia', field: 'fantasia', sortable: true, resizable: true },
    {headerName: 'CNPJ', field: 'cnpj', sortable: true, resizable: true },
    {headerName: 'Insc. Estdual', field: 'ie', sortable: true, resizable: true },
    {headerName: 'Endereço', field: 'endereco', sortable: true, resizable: true },
    {headerName: 'Nº', field: 'enderecoNum', sortable: true, resizable: true },
    {headerName: 'Bairro', field: 'bairro', sortable: true, resizable: true },
    {headerName: 'Cidade', field: 'cidade.nome', sortable: true, resizable: true },
    {headerName: 'Telefone', field: 'telefone', sortable: true, resizable: true },
  ];

  empresas: Empresa[];

  constructor(
    private empresaService: EmpresaService,
    ) { }

  ngOnInit() {
    this.empresaService.getList()
      .subscribe(
        data => this.empresas = data
      )
  }

}
