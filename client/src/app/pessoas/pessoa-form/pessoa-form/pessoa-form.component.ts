import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pessoa } from '../../pessoa/pessoa';
import { PessoaService } from '../../pessoa/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  pessoaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private router: Router
    ) { }

  ngOnInit() {
    this.pessoaForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      endereco: ['', Validators.required],
      enderecoNum: ['', Validators.required],
      bairro: ['', Validators.required],
      celular: ['', Validators.required],
    })
  }

  salvar(){
    let pessoa:Pessoa = this.pessoaForm.getRawValue() as Pessoa;
    this.pessoaService.save(pessoa)
      .subscribe(
        ()=> this.router.navigate(['grupo']),
        err => console.log(err)
        )
  }

}
