import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { WebPippyService } from '../web-pippy.service';

declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'app-screen-data',
  templateUrl: 'screen-data.component.html',
  styleUrls: ['screen-data.component.css']
})
export class ScreenDataComponent implements OnInit {
  playerInfo: FirebaseObjectObservable<any[]>;
  quests: FirebaseListObservable<any[]>;
  workshops: FirebaseListObservable<any[]>;
  logs: FirebaseListObservable<any[]>;
  
  selectedNav:string = "quests";
  selectedQuest: any;
  selectedWorkshop: any;
  selectedLog: any;

  constructor(private service: WebPippyService) {}

  ngOnInit() {
    this.playerInfo = this.service.playerInfoObj;
    this.quests = this.service.questsList;
    this.workshops = this.service.workshopsList;
    this.logs = this.service.logList;

    jQuery(".questList").mCustomScrollbar({ theme:"fallout" });
    jQuery(".workshopList").mCustomScrollbar({ theme:"fallout" });
    jQuery(".itemDetails").mCustomScrollbar({ theme:"fallout" });
  }

  convertTime(time) {
    var timestamp = new Date(time*3600*1000);
    return ((timestamp.getUTCHours() + 11) % 12 + 1) +':' + timestamp.getUTCMinutes() + (timestamp.getUTCHours() < 12 ? ' AM':' PM');
  }

}
