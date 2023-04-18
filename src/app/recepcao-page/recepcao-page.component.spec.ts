import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcaoPageComponent } from './recepcao-page.component';

describe('RecepcaoPageComponent', () => {
  let component: RecepcaoPageComponent;
  let fixture: ComponentFixture<RecepcaoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcaoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
