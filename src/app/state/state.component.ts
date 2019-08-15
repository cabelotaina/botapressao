import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import states from '../../assets/senators_by_state.json';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  private state_code: string = "";
  public state: any = {};

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(states)
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((route) => {
      console.log(route["params"])
      this.state_code = route["params"].id
      this.state = states[this.state_code];
    })
  }

}
