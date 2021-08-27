import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'app/models/property';

@Component({
  selector: 'property-card-alt',
  templateUrl: './card-alt.component.html',
  styleUrls: ['./card-alt.component.scss']
})
export class CardAltComponent implements OnInit {
	@Input() property: Property = new Property();
  constructor() { }

  ngOnInit(): void {
  }

}
