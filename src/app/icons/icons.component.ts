import { Component, OnInit, Input } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  @Input()
  politic: any;

  constructor() { }

  ngOnInit() {
  }

  onNavigate(url) {
    window.open(url, "_blank")
  }

  onTwitt(nickname) {
    window.open(environment.twitter_intent+'@'+nickname+'%20'+environment.twitter_text, "_blank")
  }

  mailTo(email) {
    window.open('mailto:'+email)
  }

}
