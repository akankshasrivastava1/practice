import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttDir } from './att-dir';

describe('AttDir', () => {
  let component: AttDir;
  let fixture: ComponentFixture<AttDir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttDir],
    }).compileComponents();

    fixture = TestBed.createComponent(AttDir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
