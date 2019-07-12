import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-acoes-barras',
  templateUrl: './acoes-barras.component.html',
  styleUrls: ['./acoes-barras.component.css']
})
export class AcoesBarrasComponent implements OnInit {

  @Input() btn1 = {label: 'Btn1', hidden: true};
  @Input() btn2 = {label: 'Btn2', hidden: true};
  @Input() btn3 = {label: 'Btn3', hidden: true};
  @Input() btn4 = {label: 'Btn4', hidden: true};
  @Input() btn5 = {label: 'Btn5', hidden: true};
  @Input() btn6 = {label: 'Btn6', hidden: true};
  @Input() btn7 = {label: 'Btn7', hidden: true};
  @Input() btn8 = {label: 'Btn8', hidden: true};

  @Output() b1ClickOutput: EventEmitter <any> = new EventEmitter();
  @Output() b2ClickOutput: EventEmitter <any> = new EventEmitter();
  @Output() b3ClickOutput: EventEmitter <any> = new EventEmitter();
  @Output() b4ClickOutput: EventEmitter <any> = new EventEmitter();
  @Output() b5ClickOutput: EventEmitter <any> = new EventEmitter();
  @Output() b6ClickOutput: EventEmitter <any> = new EventEmitter();
  @Output() b7ClickOutput: EventEmitter <any> = new EventEmitter();
  @Output() b8ClickOutput: EventEmitter <any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  b1Click() {
    this.b1ClickOutput.emit();
  }

  b2Click() {
    this.b1ClickOutput.emit();
  }

  b3Click() {
    this.b1ClickOutput.emit();
  }

  b4Click() {
    this.b1ClickOutput.emit();
  }

  b5Click() {
    this.b1ClickOutput.emit();
  }

  b6Click() {
    this.b1ClickOutput.emit();
  }

  b7Click() {
    this.b1ClickOutput.emit();
  }

  b8Click() {
    this.b1ClickOutput.emit();
  }

}
