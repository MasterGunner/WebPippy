import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { WebPippyService } from '../web-pippy.service';

@Component({
  moduleId: module.id,
  selector: 'app-screen-map',
  templateUrl: 'screen-map.component.html',
  styleUrls: ['screen-map.component.css']
})
export class ScreenMapComponent implements OnInit {
  playerInfo: FirebaseObjectObservable<any[]>;

  constructor(private service: WebPippyService) {}

  ngOnInit() {
    this.playerInfo = this.service.playerInfoObj;
  }

  convertTime(time) {
    var timestamp = new Date(time*3600*1000);
    return ((timestamp.getUTCHours() + 11) % 12 + 1) +':' + timestamp.getUTCMinutes() + (timestamp.getUTCHours() < 12 ? ' AM':' PM');
  }

}
