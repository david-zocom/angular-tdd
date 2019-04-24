import { TestBed } from '@angular/core/testing';

import { MathematicsService } from './mathematics.service';

/*
Kravspec:
- en funktion för addition:  plus(x: number, y: number): number
- en funktion för subtraktion:  minus(x: number, y: number): number
 */
describe('MathematicsService', () => {
	let service: MathematicsService;
	beforeEach(() => {
		TestBed.configureTestingModule({})
		service = TestBed.get(MathematicsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('function plus', () => {
		it('should return NaN if either parameter is NaN', () => {
			// arrange
			let x = NaN, y = 1;

			// act
			let actual = service.plus(x, y);

			// assert
			expect(actual).toBeNaN();
		});

	})


});















// Unicornzzzz are the bestzz 🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄
