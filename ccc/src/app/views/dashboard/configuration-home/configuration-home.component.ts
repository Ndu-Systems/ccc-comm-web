import { Component, OnInit } from '@angular/core';
import { ActionModel } from 'src/app/_models/action.model';

@Component({
  selector: 'app-configuration-home',
  templateUrl: './configuration-home.component.html',
  styleUrls: ['./configuration-home.component.scss']
})
export class ConfigurationHomeComponent implements OnInit {
  name = 'Configuration';
  subText = 'List of configs';
  actions: ActionModel[] = [];
  constructor() { }

  ngOnInit() {
    this.populateActions();
  }

  populateActions() {
    this.actions.push(
      {
        title: 'Questions Config',
        actions: [
          {
            name: 'Questions',
            label: 'View All Questions',
            link: '/dashboard/questions'
          }, {
            name: 'Add a question',
            label: 'Create new question',
            link: '/dashboard/add-question'
          }]
      }
    );
  }

}
