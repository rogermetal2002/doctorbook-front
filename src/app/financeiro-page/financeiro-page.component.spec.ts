import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroPageComponent } from './financeiro-page.component';

describe('FinanceiroPageComponent', () => {
  let component: FinanceiroPageComponent;
  let fixture: ComponentFixture<FinanceiroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceiroPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceiroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
