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

  constructor(
    private grupoService: GrupoService
    ) { }

  ngOnInit(){
    this.grupoService.getGrupos().subscribe(data => {
      this.grupos = data
      console.log(this.grupos);
      this.grid = {
        data: this.grupos
      };
    });
  }

}
