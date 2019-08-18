import { Component, OnInit } from '@angular/core';
import { MapDirective } from '../map.component';
import { environment } from './../../environments/environment.ts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  twitter = environment.twitter;

  constructor() {}

  ngOnInit() {
  }

  onNavigate(url) {
    window.open(url, "_blank");
  }

}
