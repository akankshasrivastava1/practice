import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPost } from './get-post';

describe('GetPost', () => {
  let component: GetPost;
  let fixture: ComponentFixture<GetPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetPost],
    }).compileComponents();

    fixture = TestBed.createComponent(GetPost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
