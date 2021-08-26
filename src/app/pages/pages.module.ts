import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { OrganismsModule } from '../components/organisms/organisms.module';
import { MoleculesModule } from '../components/molecules/molecules.module';



@NgModule({
	declarations: [
		HomeComponent,
		SearchComponent
	],
	imports: [
		CommonModule,
		OrganismsModule,
		MoleculesModule
	]
})
export class PagesModule { }
