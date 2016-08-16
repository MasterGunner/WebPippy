import { Injectable } from '@angular/core';

@Injectable()
export class FalloutTypesService {

  ALCOHOL_NAMES = [
		'beer',
		"bobrov's best moonshine",
		'bourbon',
		'dirty wastelander',
		'gwinnett ',
		'gwinnett ale',
		'gwinnett brew',
		'gwinnett lager',
		'gwinnett pale',
		'gwinnett pilsner',
		'gwinnett stout',
		'ice cold beer',
		'ice cold gwinnett ale',
		'ice cold gwinnett brew',
		'ice cold gwinnett lager',
		'ice cold gwinnett pale',
		'ice cold gwinnett pilsner',
		'ice cold gwinnett stout',
		'poisoned wine',
		'rum',
		'vodka',
		'whiskey',
		'wine'
  ];

	CHEM_NAMES = [
		'berry mentats',
		'buffjet',
		'buffout',
		'bufftats',
		'calmex',
		'daddy-o',
		'day tripper',
		'fury',
		'grape mentats',
		'jet',
		'jet fuel',
		'med-x',
		'mentats',
		'orange mentats',
		'overdrive',
		'psycho',
		'psycho jet',
		'psychobuff',
		'psychotats',
		'ultra jet',
		'x-cell'
	];

	INVENTORY_INFOCARD = [
		{Name: 'Damage'},
		{Name: 'Ammo Type'},
		{Name: 'Fire Rate'},
		{Name: 'Speed'},
		{Name: 'Range'},
		{Name: 'Accuracy'},

		{Name: 'DMG Resist'},
		{Name: 'SPECIAL'},

		{Name: 'Weight'},
		{Name: 'Value'}
	]

  constructor() {}

}
