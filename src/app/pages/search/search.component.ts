import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	openFilter: boolean=false;
	constructor() { }

	ngOnInit(): void {
	}
	openAdvancedSearch() {
		this.openFilter = !this.openFilter;
	}
}
