import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorUiComponent } from './calc/calculator-ui/calculator-ui.component';
import { CalcModule } from './calc/calc.module';

@NgModule({
	declarations: [
		AppComponent
		// , CalculatorUiComponent
	],
	imports: [
		BrowserModule,
		CalcModule,
		CalculatorUiComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
