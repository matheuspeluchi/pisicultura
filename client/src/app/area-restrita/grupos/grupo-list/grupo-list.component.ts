import { GrupoService } from '../grupo.service';
import { Component, OnInit } from '@angular/core';
import { Grupo } from '../grupo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grupo-list',
  templateUrl: './grupo-list.component.html',
  styleUrls: ['./grupo-list.component.css']
})
export class GrupoListComponent implements OnInit {

  grupos: Grupo[] = [];
  columnDefs = [
    {headerName: 'Nome', field: 'nome', sortable: true, resizable: true},
    {headerName: 'Descrição', field: 'descricao', sortable: true, resizable: true },
  ];

  constructor(
     private grupoService: GrupoService,
     private activatedRoute: ActivatedRoute
     ) { }

  ngOnInit() {
    this.grupos = this.activatedRoute.snapshot.data['grupos'];
    };
  
}
