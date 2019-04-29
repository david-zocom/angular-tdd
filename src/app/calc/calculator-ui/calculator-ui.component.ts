import { Component, OnInit } from '@angular/core';
import { MathematicsService } from './../mathematics.service';

@Component({
	selector: 'app-calculator-ui',
	templateUrl: './calculator-ui.component.html',
	styleUrls: ['./calculator-ui.component.css']
})
export class CalculatorUiComponent implements OnInit {
	result: number = NaN;
	alfa: number = -1;
	beta: number = 22;

	constructor(private service: MathematicsService) { }

	ngOnInit() { }

	addButtonClick() {
		this.result = this.service.plus(this.alfa, this.beta);
	}

}





//
