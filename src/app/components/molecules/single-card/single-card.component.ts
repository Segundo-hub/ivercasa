import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'app/models/property';

@Component({
  selector: 'single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {
	@Input() property: Property = new Property();
  constructor() { }

  ngOnInit(): void {
  }

}
