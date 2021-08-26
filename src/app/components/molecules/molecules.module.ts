import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { BrandComponent } from './brand/brand.component';
import { FormComponent } from './form/form.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { FooterHeroComponent } from './footer-hero/footer-hero.component';
import { BrandBigComponent } from './brand/brand-big.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormValuatorComponent } from './form-valuator/form-valuator.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';

const components = [MenuComponent,
	MenuMobileComponent,
	BrandComponent,
	BrandBigComponent,
	FormComponent,
	FooterInfoComponent,
	FooterHeroComponent,
	FormSearchComponent,
	FormValuatorComponent,
	SingleCardComponent,
	PhoneNumberComponent]

@NgModule({
	declarations: [ ...components],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [ ...components]
})
export class MoleculesModule { }
