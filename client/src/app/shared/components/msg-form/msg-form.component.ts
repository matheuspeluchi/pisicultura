import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-msg-form',
  templateUrl: './msg-form.component.html',
  styleUrls: ['./msg-form.component.css']
})
export class MsgFormComponent implements OnInit {

  @Input() texto = '';

  constructor() { }

  ngOnInit() {
  }

}
