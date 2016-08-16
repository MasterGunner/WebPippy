import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { WebPippyService } from '../web-pippy.service';
import { FalloutTypesService } from '../fallout-types.service';
import { FirebaseSortPipe } from '../firebase-sort.pipe'


declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'app-screen-radd',
  templateUrl: 'screen-radd.component.html',
  styleUrls: ['screen-radd.component.css'],
  pipes: [FirebaseSortPipe]
})
export class ScreenRADDComponent implements OnInit {
  playerInfo: FirebaseObjectObservable<any[]>;
  healthStats: FirebaseObjectObservable<any[]>;
  aid: FirebaseListObservable<any[]>;
  weapons: FirebaseListObservable<any[]>;
  alcohol: any[];

  constructor(private service: WebPippyService, private types: FalloutTypesService) {}

  ngOnInit() {
    this.playerInfo = this.service.playerInfoObj;
    this.healthStats = this.service.healthStatsObj;
    this.aid = this.service.inventoryAidList;
    this.weapons = this.service.inventoryWeaponsList;

    jQuery(".quickPanel > div").mCustomScrollbar({ theme:"fallout" });
  }

  isAlcohol(item: any): boolean {
    return this.types.ALCOHOL_NAMES.indexOf(item.text.toLowerCase()) >= 0 ? true : false;
  }

  isChem(item: any): boolean {
    return this.types.CHEM_NAMES.indexOf(item.text.toLowerCase()) >= 0 ? true : false;
  }

  isFavourite(item: any): boolean {
    return item.favorite >= 0;
  }

}
