import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface LearningStep {
  title: string;
  angularConcept: string;
  buildTask: string;
  filesToExplore: string[];
}

@Component({
  selector: 'app-learning-roadmap',
  imports: [RouterLink],
  templateUrl: './learning-roadmap.html',
  styleUrl: './learning-roadmap.css',
})
export class LearningRoadmap {
  protected readonly projectName = 'Basha Bhara';

  protected readonly learningSteps: LearningStep[] = [
    {
      title: 'Show rental houses on the home page',
      angularConcept: 'Components, templates, @for loops, and @Input data flow',
      buildTask: 'Read the house list from a TypeScript array and render every rental as a reusable card.',
      filesToExplore: [
        'src/app/pages/homepage/homepage.ts',
        'src/app/pages/homepage/homepage.html',
        'src/app/components/housecards/housecards.ts',
      ],
    },
    {
      title: 'Navigate between pages',
      angularConcept: 'Router configuration, routerLink, and router-outlet',
      buildTask: 'Move between the home page, add-house form, posts API demo, and this learning roadmap.',
      filesToExplore: [
        'src/app/app.routes.ts',
        'src/app/app.html',
      ],
    },
    {
      title: 'Collect a new house listing',
      angularConcept: 'Signals and Angular forms',
      buildTask: 'Capture house name, rent, rooms, location, photo URL, and Wi-Fi availability from a form.',
      filesToExplore: [
        'src/app/pages/addhome/addhome.ts',
        'src/app/pages/addhome/addhome.html',
      ],
    },
    {
      title: 'Load posts from an API',
      angularConcept: 'Services, dependency injection, HttpClient, and observables/signals',
      buildTask: 'Use the posts page as a safe practice area before connecting Basha Bhara to a real backend.',
      filesToExplore: [
        'src/app/services/posts.ts',
        'src/app/pages/posts/posts.ts',
      ],
    },
    {
      title: 'Prepare for a real rental app',
      angularConcept: 'Models, state management, validation, and feature planning',
      buildTask: 'Add search, filters, saved listings, authentication, booking requests, and landlord dashboards one feature at a time.',
      filesToExplore: [
        'src/app/components/housecards/house.model.ts',
        'src/app/services/home.ts',
      ],
    },
  ];
}
