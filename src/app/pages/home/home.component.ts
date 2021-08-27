import { Component, OnInit } from '@angular/core';
import { Property } from 'app/models/property';
import { PropertiesService } from 'app/service/properties.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	properties: Property[] = [];
	principal: Property[] = [];
	constructor( public dbProperties:  PropertiesService) {
		this.properties = this.dbProperties.getProperties()
	}

	ngOnInit() {
		this.principal = this.properties.filter((val, i) => i <3)
	}

}
