import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Housecards } from './housecards';
import { House } from './house.model';

describe('Housecards', () => {
  let component: Housecards;
  let fixture: ComponentFixture<Housecards>;

  const sampleHouse: House = {
    name: 'Test Apartment',
    state: 'Dhaka',
    price: 25000,
    rooms: 2,
    toilets: 1,
    description: 'A test listing for the card component.',
    photo: 'https://example.com/house.jpg',
    isWifiAvailable: true,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Housecards],
    }).compileComponents();

    fixture = TestBed.createComponent(Housecards);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('house', sampleHouse);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
