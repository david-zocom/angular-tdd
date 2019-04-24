import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MathematicsService {


	plus(x: number, y: number) {
		// Refaktorera: uttrycka koden effektivare
		// if( isNaN(x) || isNaN(y) ) {
		// 	return NaN;
		// } else if( x === Infinity || y === Infinity ) {
		// 	return Infinity;
		// } else {
			return y + x;
		// }
	}

	minus(x: number, y: number): number {
		return x - y;
	}

	constructor() { }
}
