import { GrupoService } from './../grupo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Grupo } from '../grupo';

@Component({
  selector: 'app-grupo-view',
  templateUrl: './grupo-view.component.html',
  styleUrls: ['./grupo-view.component.css']
})
export class GrupoViewComponent implements OnInit {

  grupo: Grupo = null;

  constructor(
    private grupoService: GrupoService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.grupoService.getGrupo(id)
      .subscribe(data => this.grupo = data);
  }



}
