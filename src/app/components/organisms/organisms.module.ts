import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './property-card/property-card.component';
import { FormSearchAdvancedComponent } from './form-search-advanced/form-search-advanced.component';
import { MoleculesModule } from '../molecules/molecules.module';



@NgModule({
	declarations: [
		PropertyCardComponent,
		FormSearchAdvancedComponent
	],
	imports: [
		CommonModule,
		MoleculesModule
	],
	exports: [
		PropertyCardComponent,
		FormSearchAdvancedComponent
	]
})
export class OrganismsModule { }
