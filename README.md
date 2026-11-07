# Shipyard

A Product Hunt–inspired MVP built with Next.js (App Router), React Context and dummy data.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Push to GitHub
```bash
git init
git add .
git commit -m "feat: initial Shipyard MVP"
git branch -M main
git remote add origin https://github.com/<your-username>/shipyard.git
git push -u origin main
```

## Structure
```
app/          pages (/, /products/[id], /submit)
components/   Navbar, ProductCard, UpvoteButton, CategoryFilter
context/      ProductsContext (state: products, upvotes, comments)
data/         dummy products
docs/         WIREFRAME.md, ISSUES.md
```
Note: data lives in memory, so it resets on refresh. Add a database as the next step.
