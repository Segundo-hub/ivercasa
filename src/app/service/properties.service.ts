import { Injectable } from '@angular/core';
import { Property } from 'app/models/property';

@Injectable({
	providedIn: 'root'
})
export class PropertiesService {
	db: Property[] = [];
	constructor() {
		this.db = [
		{
			img: 'img-1.png',
			price: 1450,
			address: 'Chiclayo - Lambayeque',
			name: 'Bad Room',
			description: 'Alquilo un departamento de extreno, con todo incluido. Lugar exclusivo de chiclayo',
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
			img: 'img-2.png',
			price: 12340,
			address: 'Barranco - Lima',
			name: 'Las Veladas',
			description: 'Alquilo lindo departamento en el centro de barranco',
			service: {
				bathroom: 2,
				debroom: 4,
				parking: 1,
				size: 240
			},
			like: true,
			url_contact: 'https://contacte.me'
		},
		{
			img: 'img-3.png',
			price: 12340,
			name: 'Calle Charaise',
			address: 'Miraflores - Lima',
			description: 'Alquilo lindo departamento simplemente el texto de relleno.',
			service: {
				bathroom: 2,
				debroom: 4,
				parking: 1,
				size: 140
			},
			like: true,
			url_contact: 'https://contacte.me'
		},
		{
			img: 'img-4.png',
			price: 2340,
			address: 'Trujillo - La Libertad',
			name: 'Sweet Scape',
			description: 'Alquilo lindo departamento simplemente el texto de relleno.',
			service: {
				bathroom: 2,
				debroom: 4,
				parking: 1,
				size: 200
			},
			like: false,
			url_contact: 'https://contacte.me'
		},
		{
			img: 'img-1.png',
			price: 1450,
			address: 'Chiclayo - Lambayeque',
			name: 'Bad Room',
			description: 'Alquilo un departamento de extreno, con todo incluido. Lugar exclusivo de chiclayo',
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
			img: 'img-2.png',
			price: 12340,
			address: 'Barranco - Lima',
			name: 'Las Veladas',
			description: 'Alquilo lindo departamento en el centro de barranco',
			service: {
				bathroom: 2,
				debroom: 4,
				parking: 1,
				size: 240
			},
			like: true,
			url_contact: 'https://contacte.me'
		},
		{
			img: 'img-3.png',
			price: 12340,
			name: 'Calle Charaise',
			address: 'Miraflores - Lima',
			description: 'Alquilo lindo departamento simplemente el texto de relleno.',
			service: {
				bathroom: 2,
				debroom: 4,
				parking: 1,
				size: 140
			},
			like: true,
			url_contact: 'https://contacte.me'
		},
	];
	}

	getProperties() {
		return this.db;
	}
}
