import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorUiComponent } from './calculator-ui.component';

/*
Kravspec:
- två textfält för tal
- knappar för att välja operator, + eller -
- visar resultatet i ett span-element
 */
describe('CalculatorUiComponent', () => {
	let component: CalculatorUiComponent;
	let fixture: ComponentFixture<CalculatorUiComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CalculatorUiComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CalculatorUiComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
