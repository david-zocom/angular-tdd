import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CalculatorUiComponent } from './calculator-ui/calculator-ui.component';

@NgModule({
	declarations: [CalculatorUiComponent],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		CalculatorUiComponent
	]
})
export class CalcModule { }
