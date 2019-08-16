import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-senator',
  templateUrl: './senator.component.html',
  styleUrls: ['./senator.component.css']
})
export class SenatorComponent implements OnInit {

  public senator: any = {}

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((route) => {
      console.log(route)
      this.senator = route["params"]
    })
  }

  onNavigate(url) {
    window.open(url, "_blank");
  }

  mailTo(email) {
    window.open('mailto:'+email, "_blank");
  }

}
