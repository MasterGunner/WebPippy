import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { WebPippyService } from '../web-pippy.service';
import { FirebaseSortPipe } from '../firebase-sort.pipe';

declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'app-screen-status',
  templateUrl: 'screen-status.component.html',
  styleUrls: ['screen-status.component.css'],
  pipes: [FirebaseSortPipe]
})
export class ScreenStatusComponent implements OnInit {
  playerInfo: FirebaseObjectObservable<any[]>;
  healthStats: FirebaseObjectObservable<any[]>;
  specials: FirebaseListObservable<any[]>;
  perks: FirebaseListObservable<any[]>;

  selectedNav:string = "status";
  selectedSpecial: any;
  selectedPerk: any;

  constructor(private service: WebPippyService) {}

  ngOnInit() {
    this.playerInfo = this.service.playerInfoObj;
    this.healthStats = this.service.healthStatsObj;
    this.specials = this.service.specialList;
    this.selectedSpecial = this.specials[0]; //doesn't work.
    this.perks = this.service.perksList;
  }

  enableScrollbar() {
    setTimeout(() =>  jQuery(".perksList").mCustomScrollbar({ theme:"fallout" }), 100);
  }

}
