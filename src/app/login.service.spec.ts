import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
	let service: LoginService;
	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.get(LoginService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	/*
	x när användaren kommer första gången till appen ska man inte vara inloggad
	x om användaren inte är inloggad, så ska den kunna logga in
	x om användaren är inloggad, så ska den kunna logga ut
	*/
	it('should not be logged in oninit', () => {
		let expected = false;
		let actual = service.userIsLoggedIn();
		expect(actual).toBe(expected);
	});
	it('should be able to log in if not logged in', () => {
		service.login();
		let actual = service.userIsLoggedIn();
		expect(actual).toBeTruthy();
	});
	it('should be able to log out if logged in', () => {
		service.login();
		service.logout();
		let isLoggedIn = service.userIsLoggedIn(); // actual
		expect(isLoggedIn).toBeFalsy();
	});




});
