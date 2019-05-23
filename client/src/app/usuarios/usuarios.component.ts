import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: object[] = [];

  constructor(http: HttpClient) {
    http.get<object[]>('localhost:3000/pessoa')
    .subscribe(data => this.usuarios = data);
   }

  ngOnInit() {
    console.log(this.usuarios);
  }

}
