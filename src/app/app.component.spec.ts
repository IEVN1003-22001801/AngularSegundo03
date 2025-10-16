import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DistanciaComponent } from './formularios/distancia/distancia.component';
import { ZodiacoComponent } from './formularios/zodiaco/zodiaco.component';
import { AxBComponent } from './formularios/ax-b/ax-b.component';
import { Distancia } from './formularios/distancia/distancia';



describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, DistanciaComponent, Distancia, ZodiacoComponent, AxBComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'AngularSegundo03' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularSegundo03');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, AngularSegundo03');
  });
});
