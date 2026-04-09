import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImage } from './my-image';

describe('MyImage', () => {
  let component: MyImage;
  let fixture: ComponentFixture<MyImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyImage],
    }).compileComponents();

    fixture = TestBed.createComponent(MyImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
