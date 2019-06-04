import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {

  empresas: Empresa[] = [];
  columnDefs: [
    {headerName: 'Razão Social', field: 'rsocial', sortable: true, resizable: true},
    {headerName: 'Fantasia', field: 'fantasia', sortable: true, resizable: true},
    {headerName: 'CNPJ', field: 'cnpj', sortable: true, resizable: true},
    {headerName: 'IE', field: 'ie', sortable: true, resizable: true},
    {headerName: 'Endereço', field: 'endereco', sortable: true, resizable: true},
    {headerName: 'Nº', field: 'enderecoNum', sortable: true, resizable: true},
    {headerName: 'Bairro', field: 'bairro', sortable: true, resizable: true},
    {headerName: 'Cidade', field: 'cidade.nome', sortable: true, resizable: true},
    {headerName: 'Telefone', field: 'telefone', sortable: true, resizable: true}
  ]


  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresaService.getEmpresas().subscribe(data => {
      this.empresas = data
    });
      console.log(this.empresas)
  }

}
