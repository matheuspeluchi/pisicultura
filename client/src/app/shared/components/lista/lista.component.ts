import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { GridApi, ColumnApi } from 'ag-grid-community';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  private gridApi: GridApi;
  private gridColumnApi: ColumnApi;

  @Input() headers: object[] = [ ];
  @Input() lista: object [] = [ ];


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() { }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.sizeToFit();
    this.autoSizeAll();
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  autoSizeAll() {
    let allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(column => allColumnIds.push(column));
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }
}
