import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

	@Input() activeMenu: boolean = false;
	@Output() onClose: EventEmitter<boolean> = new EventEmitter();
	constructor() { }

	ngOnInit(): void {
	}
	closeMenu(){
		this.onClose.emit(false);
	}
}
