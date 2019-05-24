import { PessoaService } from './pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoas: object[] = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit() {
    this.pessoaService.getPessoas().subscribe(data => this.pessoas = data);
  }



}
