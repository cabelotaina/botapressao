import { Component, OnInit } from '@angular/core';
import { MapDirective } from '../map.component';
import { environment } from './../../environments/environment';
import senators from '../../assets/senators-cards.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contra:any = {};
  indecisos:any = {};
  afavor:any = {};

  constructor() {}

  ngOnInit() {
    this.contra = senators.contra
    this.indecisos = senators.indecisos
    this.afavor = senators.afavor
  }

  onNavigate(url) {
    window.open(url, "_blank");
  }

  onTwitt() {
    window.open(environment.twitter_intent+environment.twitter_text, "_blank");
  }

}
