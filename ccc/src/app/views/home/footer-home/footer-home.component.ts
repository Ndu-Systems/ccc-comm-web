import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-home',
  templateUrl: './footer-home.component.html',
  styleUrls: ['./footer-home.component.scss']
})
export class FooterHomeComponent implements OnInit {
  constructor(
    private routeTo: Router
  ) { }

  ngOnInit() {
  }

  getStarted(){
    this.routeTo.navigate(['/get-started']);
  }
}
