import { TestBed } from '@angular/core/testing';

import { MathematicsService } from './mathematics.service';

describe('MathematicsService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: MathematicsService = TestBed.get(MathematicsService);
		expect(service).toBeTruthy();
	});
});
