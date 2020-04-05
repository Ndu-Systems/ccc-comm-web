import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taking-selftest',
  templateUrl: './taking-selftest.component.html',
  styleUrls: ['./taking-selftest.component.scss']
})
export class TakingSelftestComponent implements OnInit {
  step = 1;
  constructor() { }

  ngOnInit() {
  }

}
