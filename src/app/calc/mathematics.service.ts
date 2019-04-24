import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MathematicsService {


	plus(x: number, y: number) {
		if( isNaN(x) || isNaN(y) ) {
			return NaN;
		} else if( x === Infinity || y === Infinity ) {
			return Infinity;
		} else {
			return y + x;
		}
	}

	constructor() { }
}
