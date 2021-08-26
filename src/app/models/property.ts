class Service {
	bathroom: number = 0
	debroom: number = 0
	parking: number = 0
	size: number = 0
}

export class Property {
	img: string = "";
	price: number = 0;
	address: string = '';
	description: string = '';
	service: Service = new Service();
	like: boolean = false;
	url_contact: string = ''
}
