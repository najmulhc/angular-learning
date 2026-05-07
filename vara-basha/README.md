# Basha Bhara Angular Learning Project

Basha Bhara is a house-rent demo app for learning Angular by building real rental-product features. Instead of studying Angular concepts separately, each lesson maps to a working part of the app.

## Run the project

```bash
npm install
npm start
```

Open `http://localhost:4200/` after the dev server starts.

## Learning roadmap

The app now includes a built-in learning page at `/learn`. Use it as your checklist while building:

1. **Components and templates** — render rental houses on the home page.
2. **Inputs and reusable UI** — pass each house into the house-card component.
3. **Routing** — move between homes, add-house form, API practice, and the learning page.
4. **Signals and forms** — collect a new rental listing from the add-house page.
5. **Services and APIs** — use the posts page as a practice area before connecting a real backend.
6. **Real app planning** — add search, filters, saved listings, validation, authentication, and landlord features gradually.

## Suggested study workflow

For every Angular topic:

1. Read the files listed on the `/learn` page.
2. Make one small change, such as adding a new house field or route.
3. Run the app and explain what changed in your own words.
4. Run tests or a build.
5. Commit your working lesson before starting the next one.

## Useful commands

```bash
npm start
npm run build
npm test
```

## Project areas to explore

- `src/app/app.routes.ts` — page routes.
- `src/app/app.html` — shared navigation and router outlet.
- `src/app/pages/homepage/` — home page and house list rendering.
- `src/app/components/housecards/` — reusable rental-card component and `House` model.
- `src/app/pages/addhome/` — form practice for adding a listing.
- `src/app/services/` — service layer practice for future API work.
