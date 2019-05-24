import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa/pessoa.service';
import { Pessoa } from '../pessoa/pessoa';

@Component({
  selector: 'app-pessoa-view',
  templateUrl: './pessoa-view.component.html',
  styleUrls: ['./pessoa-view.component.css']
})
export class PessoaViewComponent implements OnInit {
  pessoa: Pessoa = null;
  id = '';
  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoaService.getPessoabyId(this.id).subscribe(data => this.pessoa = data);
  }

}
