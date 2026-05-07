import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addhome } from './addhome';

describe('Addhome', () => {
  let component: Addhome;
  let fixture: ComponentFixture<Addhome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addhome],
    }).compileComponents();

    fixture = TestBed.createComponent(Addhome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
