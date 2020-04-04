import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnInit {


  constructor(
    private routeTo: Router
  ) { }

  ngOnInit() {
  }

  getStarted(){
    this.routeTo.navigate(['/get-started']);
  }
}
