import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { WebPippyService } from '../web-pippy.service';
import { FirebaseSortPipe } from '../firebase-sort.pipe';

declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'app-screen-inventory',
  templateUrl: 'screen-inventory.component.html',
  styleUrls: ['screen-inventory.component.css'],
  pipes: [FirebaseSortPipe]
})
export class ScreenInventoryComponent implements OnInit {
  playerInfo: FirebaseObjectObservable<any[]>;
  inventory: FirebaseListObservable<any[]>;

  selectedNav:string = "weapons";
  selectedItem: any;
  itemCard: any;
  itemImage: string;

  constructor(private service: WebPippyService) {}

  ngOnInit() {
    this.playerInfo = this.service.playerInfoObj;
    this.inventory = this.service.inventoryWeaponsList;

    jQuery(".inventoryList").mCustomScrollbar({ theme:"fallout" });
  }

  changeInv(invType: string): void {
    this.selectedNav = invType;
    switch(invType) {
      case 'weapons':
        this.inventory = this.service.inventoryWeaponsList;
        break;
      case 'apparel':
        this.inventory = this.service.inventoryApparelList;
        break;
      case 'aid':
        this.inventory = this.service.inventoryAidList;
        break;
      case 'misc':
        this.inventory = this.service.inventoryMiscList;
        break;
      case 'junk':
        this.inventory = null; this.service.inventoryJunkList;
        break;
      case 'mods':
        this.inventory = null; this.service.inventoryModsList;
        break;
      case 'ammo':
        this.inventory = this.service.inventoryAmmoList;
        break;
    }
  }

  selectItem(item): void {
    this.setItemImage(item);
    this.setItemCard(item);
  }

  setItemImage(item): void {
    if(this.selectedNav == 'apparel') {
      this.itemImage="/art/icons/paperDoll.svg";
    } else {
      this.itemImage="/art/icons/ImgNotFound.png";
    }
  }

  setItemCard(item): void {
    this.itemCard = {};

    this.itemCard.description = item.itemCardInfoList
      .filter((value) => value.showAsDescription && value.text.length > 3)[0];

    this.itemCard.damage = item.itemCardInfoList
      .filter((value) => value.damageType && value.damageType != 10 && value.Value);

    this.itemCard.attributes = item.itemCardInfoList
      .filter(value => !(value.Value == 0 
                        || value.showAsDescription 
                        || (value.damageType && value.damageType != 10)
                        ));

    //Takes care of sorting.
    this.itemCard.attributes = this.itemCard.damage.concat(this.itemCard.attributes);
    //Clean up the names.
    this.itemCard.attributes = this.itemCard.attributes.map((attribute, index) => this.cleanItemCardAttribute(attribute, index));

    this.selectedItem = item;
  }

  cleanItemCardAttribute(attribute: any, index:number): any {
    //Weapon-specific attributes.
    if(this.selectedNav == 'weapons') {
      switch(attribute.text) {
        case '$dmg':
          attribute.text = index==0 ? 'Damage' : '\u00A0';
          attribute.img = '/art/icons/dmg-normal.svg'; //use attribute.damageType to set this. 
          break;
        case '$ROF':
          attribute.text = 'Fire Rate';
          break;
        case '$speed':
          attribute.text = 'Speed';
          attribute.Value = attribute.Value.substring(1);
          break;
        case '$rng':
          attribute.text = 'Range';
          break;
        case '$acc':
          attribute.text = 'Accuracy';
          break;
      }
    } 
    //Apparel-specific attributes
    else if (this.selectedNav == 'apparel') {
      switch(attribute.text) {
        case '$dr':
          attribute.text = index==0 ? 'DMG Resist' : '\u00A0';
          attribute.img = '/art/icons/dmg-resist.svg'; //use attribute.damageType to set this.
          break;
      }
    }

    //General attributes.
    switch(attribute.text) {
      case '$wt':
        attribute.text = 'Weight';
        break;
      case '$val':
        attribute.text = 'Value';
        break;
    }

    return attribute;
  }

  damageTypeToImg(value: number): string {
    switch(value) {
      case 1:
        return '';
      case 2:
        return '';
      case 3:
        return '';
      case 4:
        return '';
      case 5:
        return '';
      case 6:
        return '/art/icons/dmg-rad.svg';
      default:
        return '/art/icons/dmg-normal.svg';
    }
  }
}
