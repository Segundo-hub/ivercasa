import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Property } from 'app/models/property';
import { PropertiesService } from 'app/service/properties.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	properties: Property[] = [];
	openFilter: boolean=false;

	forSlider: Property[] = [];
	constructor(public propertyService: PropertiesService) { }

	ngOnInit(): void {
		this.properties = this.propertyService.getProperties()
		this.forSlider = this.properties.filter((el, i) => i < 6)
	}
	openAdvancedSearch() {
		this.openFilter = !this.openFilter;
	}
}
