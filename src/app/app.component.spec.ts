import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculatorUiComponent } from './calc/calculator-ui/calculator-ui.component';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				CalculatorUiComponent
			],
		}).compileComponents();
	}));

	// const title = 'Unicorn extravaganza';

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'Unicorn extravaganza'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('Unicorn extravaganza!');
	});

	it('should render title in a h1 tag', () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		let h1 = compiled.querySelector('h1');
		let content = h1.textContent;
		expect(content).toContain('Welcome to Unicorn extravaganza!');
	});
});





//
