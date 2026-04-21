import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAdv } from './reactive-form-adv';

describe('ReactiveFormAdv', () => {
  let component: ReactiveFormAdv;
  let fixture: ComponentFixture<ReactiveFormAdv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormAdv],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveFormAdv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
