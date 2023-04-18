import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoutorPageComponent } from './doutor-page.component';

describe('DoutorPageComponent', () => {
  let component: DoutorPageComponent;
  let fixture: ComponentFixture<DoutorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoutorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoutorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
