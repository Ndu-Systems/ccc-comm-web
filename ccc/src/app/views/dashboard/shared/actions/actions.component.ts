import { Component, OnInit, Input } from '@angular/core';
import { ActionModel } from 'src/app/_models/action.model';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  @Input() actions: ActionModel[];
  constructor() { }

  ngOnInit() {
    console.log(this.actions);
  }

}
