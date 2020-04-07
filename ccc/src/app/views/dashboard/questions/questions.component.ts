import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from 'src/app/_services';
import { Question } from 'src/app/_models';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];
  displayedColumns: string[] = ['Name', 'Question', 'SecondaryQuestion', 'Severity', 'CreateDate', 'CreateUserId', 'status'];
  name = 'Questions';
  subText = 'List questions';
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.questionService.getAllQuestions(1).subscribe(data => {
      if (data) {
        this.questions = data as Question[];
        this.dataSource = new MatTableDataSource<Question>(this.questions);
        this.dataSource.paginator = this.paginator;
      }
    });

  }

}
