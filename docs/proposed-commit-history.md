# Proposed Development Commit Outline

This file is a transparent planning document. It is not the real Git history of the project and should not be presented as actual commit metadata. It describes how the SUADA webshop work could have been split into logical development commits during the project period from 25.02.2026 to 12.04.2026.

## Commit Outline

### 25.02.2026 - added: initial static page structure

Files:
- `index.html`
- `products.html`
- `product.html`
- `cart.html`
- `checkout.html`
- `orders.html`
- `about.html`
- `contact.html`
- `drops.html`
- `style.css`

Scope:
- Added the main static HTML entry points.
- Added shared header, navigation, footer, and page shell structure.
- Added first layout sections for home, shop, product detail, cart, checkout, orders, drops, about, and contact pages.

### 28.02.2026 - added: suada visual style foundation

Files:
- `style.css`
- `docs/styleguide.md`

Scope:
- Added global color tokens, typography variables, spacing values, borders, and layout helpers.
- Defined dark editorial streetwear styling for cards, panels, buttons, badges, headers, and footers.
- Documented the main style direction for consistent future work.

### 03.03.2026 - added: product data model

Files:
- `data.js`
- `assets/img/*`

Scope:
- Added static product records with names, categories, prices, descriptions, materials, colors, sizes, drops, statuses, and image paths.
- Added image references for product cards, product detail pages, cart items, and checkout items.

### 06.03.2026 - added: product listing rendering

Files:
- `script.js`
- `products.html`
- `index.html`
- `drops.html`

Scope:
- Added reusable product card rendering from `data.js`.
- Added homepage featured products.
- Added shop page product grid.
- Added drop-specific product sections.

### 10.03.2026 - added: filtering and sorting controls

Files:
- `products.html`
- `script.js`
- `style.css`

Scope:
- Added category filter chips.
- Added sort dropdown for featured, newest, low price, and high price views.
- Added active filter styling.

### 14.03.2026 - added: product detail page behavior

Files:
- `product.html`
- `script.js`
- `style.css`

Scope:
- Added URL-based product selection with `product.html?id=...`.
- Filled product name, price, description, material, color, drop, status, images, and size options from `data.js`.
- Added related products section.

### 18.03.2026 - added: cart storage flow

Files:
- `script.js`
- `cart.html`
- `product.html`
- `style.css`

Scope:
- Added add-to-cart behavior.
- Stored cart item IDs in `localStorage`.
- Rendered cart items and cart summary.
- Added clear-cart behavior and cart count updates.

### 23.03.2026 - added: checkout and local orders

Files:
- `checkout.html`
- `orders.html`
- `script.js`
- `style.css`

Scope:
- Added checkout item list and checkout summary.
- Added mock shipping calculation.
- Added local order creation from checkout form data.
- Added orders page rendering from `localStorage`.

### 27.03.2026 - added: informational pages and documentation

Files:
- `about.html`
- `contact.html`
- `docs/wireframes.md`
- `docs/ai-documentation.md`

Scope:
- Added brand story, contact, and supporting content pages.
- Documented wireframes and AI usage notes.

### 31.03.2026 - fixed: product card footer alignment

Files:
- `style.css`

Scope:
- Updated product cards to use equal-height flex layout.
- Pinned price and product links to the bottom of each product card.
- Improved consistency across different product title and description lengths.

### 03.04.2026 - fixed: checkout item image fitting

Files:
- `style.css`

Scope:
- Prevented checkout product images from stretching with the form height.
- Added fixed checkout image area.
- Used contained image fitting for accessories and tall product images.

### 07.04.2026 - refactored: static controls into html and css

Files:
- `products.html`
- `product.html`
- `script.js`
- `style.css`

Scope:
- Moved static shop filter buttons and sort options into HTML.
- Converted product accordions to native `<details>` and `<summary>`.
- Removed the JavaScript accordion handler.

### 10.04.2026 - refactored: reduce nonessential javascript

Files:
- `script.js`
- `style.css`
- `contact.html`
- `index.html`
- `products.html`
- `data.js`

Scope:
- Removed scroll reveal JavaScript and replaced it with CSS animation.
- Removed newsletter JavaScript and used native HTML form behavior.
- Removed contact form JavaScript and used native HTML validation.
- Removed unused static data constants.

### 12.04.2026 - fixed: responsive polish and final mock flow

Files:
- `style.css`
- `script.js`
- `checkout.html`
- `cart.html`
- `orders.html`

Scope:
- Checked cart, checkout, and orders flow.
- Polished responsive layout rules.
- Kept the project frontend-only with no backend, authentication, or real payment assumptions.
