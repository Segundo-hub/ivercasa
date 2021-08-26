import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-menu-mobile',
	templateUrl: './menu-mobile.component.html',
	styleUrls: ['./menu-mobile.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MenuMobileComponent implements OnInit {
	activeMenu: boolean = false;
	@Output() emitOpen: EventEmitter<boolean> = new EventEmitter<boolean>()
	constructor() { }

	ngOnInit(): void {
	}
	openMenu() {
		this.activeMenu = !this.activeMenu;
		this.emitOpen.emit(this.activeMenu)
	}

}
