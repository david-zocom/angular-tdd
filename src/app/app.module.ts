import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { CalculatorUiComponent } from './calc/calculator-ui/calculator-ui.component';
import { CalcModule } from './calc/calc.module';

@NgModule({
	declarations: [
		AppComponent
		// , CalculatorUiComponent
	],
	imports: [
		BrowserModule,
		CalcModule,
		// CalculatorUiComponent,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
