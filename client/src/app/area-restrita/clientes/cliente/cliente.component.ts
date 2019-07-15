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

  constructor(  ) { }

  ngOnInit() { }

}
