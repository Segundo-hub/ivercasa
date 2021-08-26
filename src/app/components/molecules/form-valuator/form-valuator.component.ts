import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-valuator',
  templateUrl: './form-valuator.component.html',
  styleUrls: ['./form-valuator.component.scss']
})
export class FormValuatorComponent implements OnInit {
	options: string[] = [
		"Amazonas",
		"Áncash",
		"Apurímac",
		"Arequipa",
		"Ayacucho",
		"Cajamarca",
		"Callao",
		"Cusco",
		"Huancavelica",
		"Huánuco",
		"Ica", "Jun",
		"La Libertad",
		"Lambayeque",
		"Lima Metropolitana",
		"Lima",
		"Loreto",
		"Madre de Dios",
		"Moquegua",
		"Pasco",
		"Piura",
		"Puno",
		"San Martín",
		"Tacna",
		"Tumbes",
		"Ucayali"
	]
  constructor() { }

  ngOnInit(): void {
  }

}
