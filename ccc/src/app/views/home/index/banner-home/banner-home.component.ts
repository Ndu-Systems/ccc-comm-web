import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.scss']
})
export class BannerHomeComponent implements OnInit {

  constructor(
    private routeTo: Router
  ) { }

  ngOnInit() {
  }

  getStarted(){
    this.routeTo.navigate(['/get-started']);
  }

}
