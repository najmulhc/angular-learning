import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCards } from './house-cards';

describe('HouseCards', () => {
  let component: HouseCards;
  let fixture: ComponentFixture<HouseCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseCards],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
