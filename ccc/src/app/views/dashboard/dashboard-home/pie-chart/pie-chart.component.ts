import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  doughnutChartLabels: Label[] = ['Active', 'Tested'];
  doughnutChartData: MultiDataSet = [
    [55, 45]
  ];
  doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}
