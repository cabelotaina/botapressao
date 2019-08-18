import { Component, OnInit, Input } from '@angular/core';

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

  mailTo(email) {
    window.open('mailto:'+email)
  }

}
