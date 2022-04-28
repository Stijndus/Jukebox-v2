import { Component, Input, OnInit } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-songs-grid',
  templateUrl: './songs-grid.component.html',
  styleUrls: ['./songs-grid.component.scss'],
})
export class SongsGridComponent {
  @Input() rowData: any[];

  private gridApi: GridApi;
  private gridColumnApi: ColumnApi;

  public columnDefs: ColDef[];

  constructor() {
    this.columnDefs = [
      { field: 'make' },
      { field: 'model' },
      { field: 'price' },
    ];
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }
}
