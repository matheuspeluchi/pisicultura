import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-area-restrita',
  templateUrl: './area-restrita.component.html',
  styleUrls: ['./area-restrita.component.css']
})
export class AreaRestritaComponent implements OnInit {

  btn1 = {label: 'Teste123', hidden: false};
  btn2 = {label: '123', hidden: false};
  @Input() clickEvent: Event;


  constructor( ) { }

  ngOnInit() { }


  testeClick(clickEvent) {
    console.log(clickEvent);
  }
}
