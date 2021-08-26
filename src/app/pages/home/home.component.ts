import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	properties: Property[] = [
		{
			img: 'img.url',
			price: 12340,
			address: 'Miraflores - Lima',
			description: 'Alquilo lindo departamento simplemente el texto de relleno.',
			service: {
				bathroom: 2,
				debroom: 4,
				parking: 1,
				size: 240
			},
			like: false,
			url_contact: 'https://contacte.me'
		},
		{
			img: 'img.url',
			price: 12340,
			address: 'Miraflores - Lima',
			description: 'Alquilo lindo departamento simplemente el texto de relleno.',
			service: {
				bathroom: 2,
				debroom: 4,
				parking: 1,
				size: 240
			},
			like: false,
			url_contact: 'https://contacte.me'
		},
		{
			img: 'img.url',
			price: 12340,
			address: 'Miraflores - Lima',
			description: 'Alquilo lindo departamento simplemente el texto de relleno.',
			service: {
				bathroom: 2,
				debroom: 4,
				parking: 1,
				size: 240
			},
			like: false,
			url_contact: 'https://contacte.me'
		},
		{
			img: 'img.url',
			price: 12340,
			address: 'Miraflores - Lima',
			description: 'Alquilo lindo departamento simplemente el texto de relleno.',
			service: {
				bathroom: 2,
				debroom: 4,
				parking: 1,
				size: 240
			},
			like: false,
			url_contact: 'https://contacte.me'
		}
	]
	constructor() { }

	ngOnInit(): void {
	}

}
