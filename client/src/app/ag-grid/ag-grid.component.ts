import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

  @Input() headers: object[] = [ ];

  @Input() dataGrid: object [] = [ ];



  constructor() { }

  ngOnInit() {

  }

}
