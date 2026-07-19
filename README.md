# Product Explorer — Custom React Web Application (FER202)

A small React app built for the FER202 assignment **"Custom React Web
Application"**, applying Learning Outcomes LO1–LO8.

## App concept

**Product Explorer** lets a user browse a live product catalog fetched from
a public REST API ([fakestoreapi.com](https://fakestoreapi.com/products)),
mark products as favorites (tracked globally with Redux and summarized in
the navbar), add their own local products, delete products from the list,
open a product detail page, and edit a product's information (sent as a
`PUT` request to the API).

## How to run

```bash
npm install
npm start
```

The app then runs at `http://localhost:3000`.

To create a production build:

```bash
npm run build
```

## Project structure

```
src/
  App.js                 → routes + lazy loading + layout
  store/
    store.js              → Redux store setup
    favoritesSlice.js      → global "favorites" state (LO8)
  components/
    Navbar.jsx             → top nav, reads favorite count from Redux
    Loader.jsx              → shared loading spinner
    ErrorMessage.jsx         → shared error alert
    ProductItem.jsx          → functional product card (LO2)
    ProductItemClass.jsx      → class-component product card (LO2)
    ProductForm.jsx           → reusable add/edit form (LO6)
  pages/
    Home.jsx                → route: /
    MainFeature.jsx           → route: /feature (lazy-loaded, LO7)
    ProductDetail.jsx          → route: /feature/:id
    EditProduct.jsx             → route: /feature/:id/edit
    About.jsx                  → route: /about
    NotFound.jsx                 → catch-all 404
```

## How each Learning Outcome is covered

| LO | Where |
|----|-------|
| **LO1** — CRA project + Git, min. 5 commits | Project generated to run with `react-scripts` (Create React App); see commit history in this repo. Continue committing as you make further changes. |
| **LO2** — Reusable component in Class **and** Functional form | `ProductItem.jsx` (functional) and `ProductItemClass.jsx` (class) both render the same shape of product data. |
| **LO3** — JSX + ES6 (arrow functions, template literals, destructuring) | Used throughout, e.g. price template literals in `ProductItem.jsx`, prop/event destructuring in `ProductForm.jsx`. |
| **LO4** — Bootstrap / React-Bootstrap + custom CSS | `react-bootstrap` components (`Navbar`, `Card`, `Form`, `Alert`, `Badge`...) plus hand-written CSS in `App.css` for `.product-card`, `.hero-section`, etc. |
| **LO5** — React Router, 3 routes | `/` (Home), `/feature` (Main Feature), `/about` (About), plus nested `/feature/:id` and `/feature/:id/edit`. |
| **LO6** — `useState`/`useEffect` + event handlers | `MainFeature.jsx` manages fetched products, add/delete via button clicks and form submit. |
| **LO7** — Fetch from public API + loading/error states + lazy-loaded Main Feature | `MainFeature.jsx`, `ProductDetail.jsx`, `EditProduct.jsx` all fetch from `fakestoreapi.com`; `App.js` lazy-loads these pages with `React.lazy` + `Suspense`. |
| **LO8** — Redux for global state, summary in navbar | `favoritesSlice.js` + `store.js`; favorite count shown live in `Navbar.jsx`. |

## Notes on the API

`fakestoreapi.com` is a public **mock** API: `POST`/`PUT`/`DELETE` requests
succeed and echo back a response, but nothing is actually persisted on the
server. Locally added products (negative IDs) and edits are only kept in
the browser's React/Redux state for the current session — this is expected
and is called out in the UI where relevant.

## Team & contributions

> Replace this section with your actual team member names and what each
> person worked on (per-LO breakdown), as required by the submission
> checklist.

- Member 1 — ...
- Member 2 — ...

## Resource transparency

- Base scaffolding follows the standard Create React App layout.
- Product data comes from the free public API `https://fakestoreapi.com/products`.
- UI built with `react-bootstrap` + Bootstrap 5; icons are plain Unicode
  glyphs (♡ ♥) to avoid extra dependencies.
