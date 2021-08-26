import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
	selector: 'property-card',
	templateUrl: './property-card.component.html',
	styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
	@Input() property: Property = new Property();
	constructor() { }

	ngOnInit(): void {
	}

}
