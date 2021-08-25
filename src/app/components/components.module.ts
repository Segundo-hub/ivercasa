import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { MoleculesModule } from './molecules/molecules.module';
import { OrganismsModule } from './organisms/organisms.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		FooterComponent,
		HeaderComponent,
		MainComponent
	],
	imports: [
		CommonModule,
		MoleculesModule,
		OrganismsModule,
		RouterModule
	],
	exports: [
		FooterComponent,
		HeaderComponent,
		MainComponent
	]
})
export class ComponentsModule { }
