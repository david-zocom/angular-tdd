import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
// import { CalcModule } from './../calc.module';
// import { AppModule } from './../../app.module';
import { CalculatorUiComponent } from './calculator-ui.component';
import { MathematicsService } from './../mathematics.service';

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
			declarations: [
				CalculatorUiComponent
			],
			imports: [
				FormsModule
				// , AppModule
				// , CalcModule
			],
			providers: [
				MathematicsService
			]
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
		let buttons: HTMLElement[] = Array.from(domElement.querySelectorAll('button'));
		let maybeButton = buttons.find(b => b.classList.contains('minusButton'))
		expect(maybeButton).toBeTruthy();
	})
	// it should have a span element with the result
	// it should have two text inputs
	// - två textfält för tal
	// - knappar för att välja operator, + eller -
	// - visar resultatet i ett span-element

	describe('mock service', () => {
		it('should show the result after plus button click', () => {
			// kontrollera att class property "result" innehåller rätt värde

			// Arrange
			let alfa = 23, beta = 30;
			let expectedResult = alfa + beta;
			let mockService = jasmine.createSpyObj(['plus']);
			mockService.plus.and.returnValue(expectedResult);
			let component = new CalculatorUiComponent(mockService);

			// Act
			component.addButtonClick();

			// Assert
			expect(mockService.plus).toHaveBeenCalled();
			expect(component.result).toBe(expectedResult);
		})
	})
});





//
