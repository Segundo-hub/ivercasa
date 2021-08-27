import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'form-search-advanced',
	templateUrl: './form-search-advanced.component.html',
	styleUrls: ['./form-search-advanced.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FormSearchAdvancedComponent implements OnInit {
	@Input() openFilter: boolean = false;
	constructor() { }

	ngOnInit(): void {
	}
	closeFilterSearch(event: Event): void {
		!(event.target as HTMLFormElement).closest('.form-advanced  *') ? (this.openFilter = false) : (this.openFilter = true)
	}

}
