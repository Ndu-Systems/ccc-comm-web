import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
@Input() displayedColumns: string[];
@Input() source: any[];
 dataSource;
 @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {

    this.dataSource  = new MatTableDataSource<any[]>(this.source);
    this.dataSource.paginator = this.paginator;
   }
}
