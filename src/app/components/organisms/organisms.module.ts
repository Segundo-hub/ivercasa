import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './property-card/property-card.component';
import { FormSearchAdvancedComponent } from './form-search-advanced/form-search-advanced.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { CardAltComponent } from './property-card-alt/card-alt.component';



@NgModule({
	declarations: [
		PropertyCardComponent,
		FormSearchAdvancedComponent,
  		CardAltComponent
	],
	imports: [
		CommonModule,
		MoleculesModule
	],
	exports: [
		PropertyCardComponent,
		FormSearchAdvancedComponent,
		CardAltComponent
	]
})
export class OrganismsModule { }
