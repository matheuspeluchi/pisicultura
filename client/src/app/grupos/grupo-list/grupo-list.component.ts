import { AgGridComponent } from './../../ag-grid/ag-grid.component';
import { GrupoService } from './../grupo.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Grupo } from '../grupo';

@Component({
  selector: 'app-grupo-list',
  templateUrl: './grupo-list.component.html',
  styleUrls: ['./grupo-list.component.css']
})
export class GrupoListComponent implements OnInit {

  grupos: Grupo[] = [];
  grid: object = null;
  columnDefs = [
    {headerName: 'Nome', field: 'nome', sortable: true},
    {headerName: 'Descrição', field: 'descricao', sortable: true},
  ];

  rowData: Grupo[] = this.grupos;

  constructor(
    private grupoService: GrupoService
    ) { }

  ngOnInit(){
    this.grupoService.getGrupos().subscribe(data => {
      this.rowData = data;
    });
  }
}
