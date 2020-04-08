import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { TestingService } from 'src/app/_services';
import { Test } from 'src/app/_models/test.model';
import { Answer } from 'src/app/_models/answer.model';

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
  data: any;
  symptomsStat: { labels: string[]; datasets: { label: string; backgroundColor: string; borderColor: string; data: number[]; }[]; };
  constructor(private testingService: TestingService) { }

  ngOnInit() {
    this.testingService.getAll(1);
    this.testingService.allTests.subscribe(data => {
      if (data) {
        this.allTests = data;
        this.initRiskChats();
        this.initTopSysmtoms();
      }
    });

  }

  initRiskChats() {
    this.data = {
      labels: ['HIGH', 'MEDIUM', 'LOW'],
      datasets: [
        {
          data: [
            this.allTests.filter(x => x.Outcome.toLocaleLowerCase() === 'high').length,
            this.allTests.filter(x => x.Outcome.toLocaleLowerCase() === 'medium').length,
            this.allTests.filter(x => x.Outcome.toLocaleLowerCase() === 'low').length
          ],
          backgroundColor: [
            '#E5646E',
            '#F8BB56',
            '#43DDC1'
          ],
          hoverBackgroundColor: [
            '#E5646E',
            '#F8BB56',
            '#43DDC1'
          ]
        }]
    };
  }

  initTopSysmtoms() {
    const answers: Answer[] = [];
    this.allTests.forEach(test => {
      test.Answers.forEach(answer => {
        answers.push(answer);
      });
    });

    this.symptomsStat = {
      labels: [],
      datasets: [
        {
          label: 'Cases',
          backgroundColor: '#5659A6',
          borderColor: '#E5646E',
          data: []
        }
      ]
    };

    answers.forEach(x => {
      if (!this.symptomsStat.labels.find(q => q === x.Question.Name)) {
        this.symptomsStat.labels.push(x.Question.Name);
        this.symptomsStat.datasets[0].data.push(
          answers.filter(s => s.Question.Name === x.Question.Name && s.Answer === 'yes').length
          );
      }
    });
  }

}
