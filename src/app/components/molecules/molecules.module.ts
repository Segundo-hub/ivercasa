import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { BrandComponent } from './brand/brand.component';
import { FormComponent } from './form/form.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { FooterHeroComponent } from './footer-hero/footer-hero.component';



@NgModule({
	declarations: [
		MenuComponent,
		MenuMobileComponent,
		BrandComponent,
		FormComponent,
		FooterInfoComponent,
		FooterHeroComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		MenuComponent,
		MenuMobileComponent,
		FormComponent,
		FooterInfoComponent,
		FooterHeroComponent
	]
})
export class MoleculesModule { }
