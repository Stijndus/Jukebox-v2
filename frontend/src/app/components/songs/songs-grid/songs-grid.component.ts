import { Component, Input, OnInit } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { ApiService } from 'src/app/shared/api/api.service';

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

  constructor(private apiSrvc: ApiService) {
    this.columnDefs = [
      { field: 'id', width:  50},
      { field: 'title' },
      { field: 'artist.name'},
      { field: 'duration'}
    ];
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    console.log(this.rowData)
    this.gridApi.sizeColumnsToFit();
  }
}
