import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { WebPippyService } from '../web-pippy.service';

@Component({
  moduleId: module.id,
  selector: 'app-screen-radio',
  templateUrl: 'screen-radio.component.html',
  styleUrls: ['screen-radio.component.css']
})
export class ScreenRadioComponent implements OnInit {
  radio: FirebaseListObservable<any[]>;
  selectedStation: any;

  constructor(private service: WebPippyService) {}

  ngOnInit() {
    this.radio = this.service.radioList;
  }

}
