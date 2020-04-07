import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { TestingService } from 'src/app/_services';
import { Test } from 'src/app/_models/test.model';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  doughnutChartLabels: Label[] = ['Active', 'Tested'];

  doughnutChartLabelsPatients: Label[] = ['Acount owners', 'Overall Tests'];

  doughnutChartLabelsHighRisk: Label[] = ['High Risk', 'Overall Tests'];
  doughnutChartDataHigRisk: MultiDataSet = [[55, 45]];

  doughnutChartLabelsMedRisk: Label[] = ['Medium Risk', 'Overall Tests'];
  doughnutChartDataMediumRisk: MultiDataSet = [[55, 45]];

  doughnutChartLabelsLowRisk: Label[] = ['Low Risk', 'Overall Tests'];
  doughnutChartDataLowRisk: MultiDataSet = [[55, 45]];

  doughnutChartLabelsTopSymptoms: Label[] = ['Top Symptoms', 'All Symptoms'];
  doughnutChartDataSymptoms: MultiDataSet = [[55, 45]];

  doughnutChartData: MultiDataSet = [[55, 45]];
  doughnutChartType: ChartType = 'doughnut';
  allTests: Test[];
  constructor(private testingService: TestingService) { }

  ngOnInit() {
    this.testingService.getAll(1);
    this.testingService.allTests.subscribe(data => {
      if (data) {
        this.allTests = data;
        this.doughnutChartDataHigRisk = [[
          this.allTests.filter(x => x.Outcome.toLocaleLowerCase() === 'high').length, this.allTests.length
        ]];
        this.doughnutChartDataMediumRisk = [[
          this.allTests.filter(x => x.Outcome.toLocaleLowerCase() === 'medium').length, this.allTests.length
        ]];
        this.doughnutChartDataLowRisk = [[
          this.allTests.filter(x => x.Outcome.toLocaleLowerCase() === 'low').length, this.allTests.length
        ]];
      }
    });
  }

}
