import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LearningRoadmap } from './learning-roadmap';

describe('LearningRoadmap', () => {
  let component: LearningRoadmap;
  let fixture: ComponentFixture<LearningRoadmap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningRoadmap],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LearningRoadmap);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should explain the project learning path', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Learn Angular by building Basha Bhara');
    expect(compiled.textContent).toContain('Components, templates, @for loops');
  });
});
