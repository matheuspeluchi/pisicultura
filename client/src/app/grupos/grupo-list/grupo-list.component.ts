import { GrupoService } from '../grupo/grupo.service';
import { Component, OnInit } from '@angular/core';
import { Grupo } from '../grupo/grupo';

@Component({
  selector: 'app-grupo-list',
  templateUrl: './grupo-list.component.html',
  styleUrls: ['./grupo-list.component.css']
})
export class GrupoListComponent implements OnInit {

  grupos: Grupo[] = [];
  grid: object = null;
  columnDefs = [
    {headerName: 'Nome', field: 'nome', sortable: true, resizable: true},
    {headerName: 'Descrição', field: 'descricao', sortable: true, resizable: true },
  ];

  constructor( private grupoService: GrupoService ) { }

  ngOnInit() {
    this.grupoService.getGrupos().subscribe(data => {
      this.grupos = data;
    });
  }
}
