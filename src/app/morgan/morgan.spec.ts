import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Morgan } from './morgan';

describe('Morgan', () => {
  let component: Morgan;
  let fixture: ComponentFixture<Morgan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Morgan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Morgan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
