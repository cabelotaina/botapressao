import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {IconsComponent} from '../icons/icons.component';
import states from '../../assets/senators-by-state.json';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  private state_code: string = "";
  public state: any = {};

  private subject: string = '';
  private body: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((route) => {
      this.state_code = route["params"].id
      this.state = states[this.state_code];
      console.log(this.state)
    })
  }

  onNavigate(url) {
    window.open(url, "_blank");
  }

  mailTo(email) {
    window.open('mailto:'+email, "_blank");
  }

  sendMessage(){

    let email = 'mailto:'

    for (let senator = 0; senator < this.state.senators.length; i++) {
      if (senator != this.state.senators.length - 1) {
        email += this.state.senators[senator].email + ','
      } else {
        email += this.state.senators[senator].email+'?subject='+subject+'&body='+body
      }
    }

    window.open(email, "_blank");

  }

}
