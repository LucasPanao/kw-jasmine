import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule.withRoutes([])],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit - deve iniciar o componente', () => {
    const spy = spyOn(component,'getMoreItems');
    component.ngOnInit()
    expect(spy).toHaveBeenCalled();
  });

  it('joinStrings - deve unir duas strings', () => {
    const result = component.joinStrings('Hello', 'World');
    expect(result).toEqual('HelloWorld');
  });

  it('numStrBool - deve retornar o tipo da entrada', () => {
    expect(component.numStrBool(42)).toEqual('number');
    expect(component.numStrBool('Hello')).toEqual('string');
    expect(component.numStrBool(true)).toEqual('boolean');
  });

  it('addTwoNumbers - deve somar dois números', () => {
    const result1 = component.addTwoNumbers(5, 3);
    const result2 = component.addTwoNumbers(5);
    expect(result1).toEqual(8);
    expect(result2).toEqual(5);
  });

  it('numToPow - deve elevar um número a uma potência', () => {
    const result = component.numToPow(2, 3);
    expect(result).toEqual(8);
  });

  describe('o método getMoreItems', () => {
    it('deve retornar true se isShowMore for verdadeiro', () => {
      const result = component.getMoreItems(true);
      expect(result).toBeTrue();
    });

    it('deve retornar false se isShowMore for falso', () => {
      const result = component.getMoreItems(false);
      expect(result).toBeFalse();
    });
  });
});
