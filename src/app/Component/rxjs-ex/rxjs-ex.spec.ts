import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsEX } from './rxjs-ex';

describe('RxjsEX', () => {
  let component: RxjsEX;
  let fixture: ComponentFixture<RxjsEX>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsEX],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsEX);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
