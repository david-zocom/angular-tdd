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
			let actual1 = service.plus(x, y);
			let actual2 = service.plus(y, x);

			// assert
			expect(actual1).toBeNaN();
			expect(actual2).toBeNaN();
		});

		it('should return infinity if either parameter is infinity', () => {
			let x = Infinity, y = 1;
			let actual1 = service.plus(x, y);
			let actual2 = service.plus(y, x);
			expect(actual1).toBe(Infinity);
			expect(actual2).toBe(Infinity);
		})
		it('should return regular number if both parameters are regular numbers', () => {
			let x = 1, y = 42;
			let actual = service.plus(x, y);
			expect(actual).toBe(x + y);
		})

	})


});















// Unicornzzzz are the bestzz 🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄
