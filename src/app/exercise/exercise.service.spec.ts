import { TestBed } from '@angular/core/testing';

import { ExerciseService } from './exercise.service';

describe('ExerciseService', () => {
	let service: ExerciseService;
	beforeEach(() => {
		TestBed.configureTestingModule({})
		service = TestBed.get(ExerciseService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	// returnera true om det är ett tal mellan 1 och 10
	// annars false
	it('should return true for finger number', () => {
		let num = 1.337;  // arrange
		let actual = service.isFingerNumber(num); // act
		expect(actual).toBe(true);
	})

	it('should return true for 1 and 10', () => {
		let low = 1, high = 10;
		expect(service.isFingerNumber(low)).toBe(true);
		expect(service.isFingerNumber(high)).toBe(true);
	})

	const epsilon = 0.0001;
	it('should return false below the border', () => {
		let low = 1 - epsilon;
		expect(service.isFingerNumber(low)).toBe(false);
	})
	it('should return false above the border', () => {
		let high = 10 + epsilon;
		expect(service.isFingerNumber(high)).toBe(false);
	})

	it('should return false if not a number', () => {
		expect(service.isFingerNumber('1')).toBe(false);
		expect(service.isFingerNumber(null)).toBe(false);
		expect(service.isFingerNumber(undefined)).toBe(false);
	})
	it('should return false if NaN', () => {
		expect(service.isFingerNumber(NaN)).toBe(false);
	})
});






//
