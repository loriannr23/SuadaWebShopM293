# Repository Guidelines

## Project Structure & Module Organization
This repository is a static frontend mock for the SUADA webshop. Page entry points live at the project root: `index.html`, `products.html`, `product.html`, `cart.html`, `checkout.html`, `orders.html`, `about.html`, `contact.html`, and `drops.html`. Shared behavior is centralized in `script.js`, product data and UI options live in `data.js`, and all styling is in `style.css`. Visual assets are stored under `assets/`, and supporting project documentation lives in `docs/` (`styleguide.md`, `wireframes.md`, `ai-documentation.md`).

## Build, Test, and Development Commands
There is no build step or package manager in this project.

- Open `index.html` in a browser to run the site locally.
- Use `Start-Process .\index.html` from PowerShell for a quick local launch.
- Use `python -m http.server` from the repo root if you want a simple local server for multi-page navigation and query-string testing.

## Coding Style & Naming Conventions
Follow the existing code style: 2-space indentation in HTML, CSS, and JavaScript; semicolons in JavaScript; and descriptive, lowercase file names. Keep CSS class names in the current BEM-like style such as `product-card__body` and modifier patterns like `product-visual--small`. Prefer `data-*` hooks for JavaScript behavior, for example `data-products-grid` or `data-add-to-cart`. Reuse the palette and typography defined in `docs/styleguide.md` instead of inventing new visual tokens.

## Testing Guidelines
There is no automated test suite in this copy of the project. Validate changes manually in a browser across the affected pages. At minimum, verify navigation, localStorage-backed cart and order flows, product filtering/sorting, and responsive layout behavior. If you add tests later, keep them lightweight and place them in a dedicated `tests/` folder.

## Commit & Pull Request Guidelines
This workspace does not include `.git` metadata, so no local commit history is available to infer conventions. Use short, imperative commit subjects such as `Add checkout confirmation state` or `Refine product card spacing`. Pull requests should include a brief summary, the pages changed, manual test notes, and screenshots for any visual updates.

## Contributor Notes
Treat this as a frontend-only mock. Do not introduce backend assumptions, real payment logic, or authentication flows without explicit scope changes.
