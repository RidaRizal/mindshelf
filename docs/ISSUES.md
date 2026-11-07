# GitHub issues to create

Create these in your repo (Issues tab → New issue), or run the `gh` commands below.

1. **Set up Next.js project and folder structure** — App Router, components, context, data folders. `setup`
2. **Design tokens and global styles** — colors, fonts, spacing in `globals.css`. `design`
3. **Navbar component** — logo + "Launch a product" button. `component`
4. **ProductCard + UpvoteButton components** — reusable, accessible. `component`
5. **CategoryFilter component** — filter chips on home. `component`
6. **ProductsContext with dummy data** — products, upvotes, add product, add comment. `state`
7. **Home page** — ranked list, filtering, empty state. `page`
8. **Product detail page** — details, upvote, comments. `page`
9. **Submit page** — form with validation, redirect to new product. `page`
10. **Responsive + accessibility pass** — keyboard focus, mobile layout. `polish`
11. **Deploy to Vercel** — connect repo, set up preview deploys. `deploy`
12. **Next: replace dummy data with a database** — Supabase or Prisma + auth. `future`

## Create them with the GitHub CLI
```bash
gh issue create --title "Set up Next.js project and folder structure" --label setup
gh issue create --title "Design tokens and global styles" --label design
gh issue create --title "Navbar component" --label component
gh issue create --title "ProductCard + UpvoteButton components" --label component
gh issue create --title "CategoryFilter component" --label component
gh issue create --title "ProductsContext with dummy data" --label state
gh issue create --title "Home page" --label page
gh issue create --title "Product detail page" --label page
gh issue create --title "Submit page" --label page
gh issue create --title "Responsive + accessibility pass" --label polish
gh issue create --title "Deploy to Vercel" --label deploy
gh issue create --title "Replace dummy data with a database" --label future
```
