import { Component } from '@angular/core';

import { WebPippyService } from './web-pippy.service';
import { FalloutTypesService } from './fallout-types.service';

import { ScreenRADDComponent } from './screen-radd/screen-radd.component';
import { ScreenStatusComponent } from './screen-status/screen-status.component';
import { ScreenInventoryComponent } from './screen-inventory/screen-inventory.component';
import { ScreenDataComponent } from './screen-data/screen-data.component';
import { ScreenMapComponent } from './screen-map/screen-map.component';
import { ScreenRadioComponent } from './screen-radio/screen-radio.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ScreenRADDComponent,
    ScreenStatusComponent,
    ScreenInventoryComponent,
    ScreenDataComponent,
    ScreenMapComponent,
    ScreenRadioComponent
  ],
  providers: [
    WebPippyService,
    FalloutTypesService
  ]
})
export class AppComponent {
  title = 'WebPippy!';
  selectedNav:string = "radd";
}
