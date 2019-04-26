import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ExerciseService {

	constructor() { }

	isFingerNumber(n: any): boolean {
		if( typeof n !== 'number' ) return false;
		else if( isNaN(n) ) return false;
		else if( n < 1 || n > 10 ) return false;
		return true;
	}
}

/*
4a Skriv minst tre testfall för funktionen isFingerNumber(n: any): boolean. Funktionen ska returnera true om n är ett tal mellan 1 och 10, annars false.
Man kan göra testfallen "should return true for n=1", "should return true for n=2" osv., men det blir inte särskilt intressant. Det är bättre att behandla "tal mellan 1 och 10" som ett testfall.
4b* Implementera funktionen.

*/
