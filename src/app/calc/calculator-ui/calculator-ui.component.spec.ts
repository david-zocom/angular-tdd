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
	let domElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CalculatorUiComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CalculatorUiComponent);
		component = fixture.componentInstance;
		domElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have a plus button with the class addButton', () => {
		let maybeButton = domElement.querySelector('.addButton');
		expect(maybeButton).toBeTruthy();
	})
	it('should have a minus button with the class minusButton', () => {
		let buttons = Array.from(domElement.querySelectorAll('button'));
		let maybeButton = buttons.find(b => b.classList.contains('minusButton'))
		expect(maybeButton).toBeTruthy();
	})
	// it should have a span element with the result
	// it should have two text inputs
	// - två textfält för tal
	// - knappar för att välja operator, + eller -
	// - visar resultatet i ett span-element
});





//
