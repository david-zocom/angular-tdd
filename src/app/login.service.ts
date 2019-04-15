import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	isLoggedIn: boolean = false;

	userIsLoggedIn(): boolean { return this.isLoggedIn; }
	login(): void {
		this.isLoggedIn = true;
	}
	logout(): void {
		this.isLoggedIn = false;
	}
	constructor() { }
}



//
