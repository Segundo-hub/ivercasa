import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { OrganismsModule } from '../components/organisms/organisms.module';
import { MoleculesModule } from '../components/molecules/molecules.module';
import { PropertiesService } from 'app/service/properties.service';
import { RouterModule } from '@angular/router';



@NgModule({
	declarations: [
		HomeComponent,
		SearchComponent
	],
	providers: [PropertiesService],
	imports: [
		CommonModule,
		OrganismsModule,
		MoleculesModule,
		RouterModule
	]
})
export class PagesModule { }
