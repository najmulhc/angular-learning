import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Housecards } from './housecards';

describe('Housecards', () => {
  let component: Housecards;
  let fixture: ComponentFixture<Housecards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Housecards],
    }).compileComponents();

    fixture = TestBed.createComponent(Housecards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
