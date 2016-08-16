import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class WebPippyService {
  PLAYER:String = 'mastergunner';

  playerInfoObj: FirebaseObjectObservable<any[]>;
  healthStatsObj: FirebaseObjectObservable<any[]>;
  specialList: FirebaseListObservable<any[]>;
  perksList: FirebaseListObservable<any[]>;
  questsList: FirebaseListObservable<any[]>;
  workshopsList: FirebaseListObservable<any[]>;
  logList: FirebaseListObservable<any[]>;
  radioList: FirebaseListObservable<any[]>;


  inventoryWeaponsList: FirebaseListObservable<any[]>;
  inventoryApparelList: FirebaseListObservable<any[]>;
  inventoryAidList: FirebaseListObservable<any[]>;
  inventoryMiscList: FirebaseListObservable<any[]>;
  inventoryJunkList: FirebaseListObservable<any[]>;
  inventoryModsList: FirebaseListObservable<any[]>;
  inventoryAmmoList: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.playerInfoObj = af.database.object(this.PLAYER+'/PlayerInfo');
    this.healthStatsObj = af.database.object(this.PLAYER+'/Stats');
    this.specialList = af.database.list(this.PLAYER+'/Special');
    this.perksList = af.database.list(this.PLAYER+'/Perks', {
      query: {
        orderByChild: 'Rank',
        startAt: 1
      }
    });
    this.questsList = af.database.list(this.PLAYER+'/Quests', {
      query: {
        orderByChild: 'enabled',
        equalTo: true
      }
    });
    this.workshopsList = af.database.list(this.PLAYER+'/Workshop', {
      query: {
        orderByChild: 'owned',
        equalTo: true
      }
    });
    this.logList = af.database.list(this.PLAYER+'/Log');
    this.radioList = af.database.list(this.PLAYER+'/Radio', {
      query: {
        orderByChild: 'inRange',
        equalTo: true
      }
    });

    this.inventoryWeaponsList = af.database.list(this.PLAYER+'/Inventory/43');
    this.inventoryApparelList = af.database.list(this.PLAYER+'/Inventory/29');
    this.inventoryAidList = af.database.list(this.PLAYER+'/Inventory/48');
    this.inventoryMiscList = af.database.list(this.PLAYER+'/Inventory/35');
    this.inventoryJunkList = af.database.list(this.PLAYER+'/Inventory/30');
    this.inventoryModsList = af.database.list(this.PLAYER+'/Inventory/47');
    this.inventoryAmmoList = af.database.list(this.PLAYER+'/Inventory/44');
  }

}
