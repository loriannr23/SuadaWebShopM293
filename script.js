const cartStorageKey = "suada-cart-count";
const cartItemsStorageKey = "suada-cart-items";
const ordersStorageKey = "suada-orders";

function getCartCount() {
  return Number(localStorage.getItem(cartStorageKey) || 0);
}

function setCartCount(count) {
  localStorage.setItem(cartStorageKey, String(count));
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = String(count).padStart(2, "0");
  });
}

function getCartItems() {
  try {
    return JSON.parse(localStorage.getItem(cartItemsStorageKey) || "[]");
  } catch (error) {
    return [];
  }
}

function setCartItems(items) {
  localStorage.setItem(cartItemsStorageKey, JSON.stringify(items));
  setCartCount(items.length);
}

function getOrders() {
  try {
    return JSON.parse(localStorage.getItem(ordersStorageKey) || "[]");
  } catch (error) {
    return [];
  }
}

function setOrders(orders) {
  localStorage.setItem(ordersStorageKey, JSON.stringify(orders));
}

function calculateCartProducts() {
  return getCartItems()
    .map((id) => getProductById(id))
    .filter(Boolean);
}

function calculateTotal(list) {
  return list.reduce((sum, product) => sum + product.price, 0);
}

function createOrderReference() {
  return `SU-${Date.now().toString().slice(-6)}`;
}

function formatPrice(product) {
  return `${product.currency} ${product.price}`;
}

function renderProductImage(product, srcKey, altSuffix) {
  const src = product[srcKey] || product.imageSrc;
  if (!src) return `<span class="product-visual__label">${product.image}</span>`;
  return `<img class="product-visual__image" src="${src}" alt="${product.name} ${altSuffix}" loading="lazy" />`;
}

function productCardTemplate(product) {
  return `
    <article class="product-card reveal" data-category="${product.category}" data-status="${product.status}">
      <a class="product-card__visual product-visual product-visual--small" href="product.html?id=${product.id}" aria-label="${product.name}">
        <span class="product-visual__tag">${product.drop}</span>
        ${renderProductImage(product, "imageSrc", "product image")}
      </a>
      <div class="product-card__body">
        <div class="product-card__meta">
          <p class="eyebrow">${product.category}</p>
          <span class="badge ${product.status.toLowerCase().replace(/\s+/g, "-")}">${product.status}</span>
        </div>
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <p>${product.shortDescription}</p>
        <div class="product-card__footer">
          <strong>${formatPrice(product)}</strong>
          <a class="text-link" href="product.html?id=${product.id}">View Product</a>
        </div>
      </div>
    </article>
  `;
}

function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

function sortProducts(list, sortValue) {
  const sorted = [...list];

  switch (sortValue) {
    case "price-low":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      sorted.sort((a, b) => products.indexOf(b) - products.indexOf(a));
      break;
    case "featured":
    default:
      sorted.sort((a, b) => {
        const score = (item) => {
          if (item.status === "Featured") return 0;
          if (item.status === "Current") return 1;
          if (item.status === "Archive") return 2;
          return 3;
        };
        return score(a) - score(b);
      });
      break;
  }

  return sorted;
}

function renderProductGrid(container, list) {
  container.innerHTML = list.map(productCardTemplate).join("");
}

function updateFilterButtons(container, activeCategory) {
  container.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === activeCategory);
  });
}

function initShopPage() {
  const grid = document.querySelector("[data-products-grid]");
  const filterBar = document.querySelector("[data-filter-bar]");
  const sortSelect = document.querySelector("[data-sort-select]");

  if (!grid || !filterBar || !sortSelect) return;

  let activeCategory = "All";
  let activeSort = "featured";

  const update = () => {
    const filtered =
      activeCategory === "All"
        ? products
        : products.filter((product) => product.category === activeCategory);
    const finalList = sortProducts(filtered, activeSort);
    renderProductGrid(grid, finalList);
    updateFilterButtons(filterBar, activeCategory);
  };

  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeCategory = button.dataset.filter;
    update();
  });

  sortSelect.addEventListener("change", (event) => {
    activeSort = event.target.value;
    update();
  });

  update();
}

function initHomePage() {
  const featuredGrid = document.querySelector("[data-home-featured]");
  const desertGrid = document.querySelector("[data-desert-grid]");

  if (featuredGrid) {
    const featuredProducts = products.filter((product) =>
      ["Featured", "Current"].includes(product.status)
    ).slice(0, 4);
    renderProductGrid(featuredGrid, featuredProducts);
  }

  if (desertGrid) {
    const desertProducts = products.filter((product) => product.drop === "Desert Capsule").slice(0, 3);
    renderProductGrid(desertGrid, desertProducts);
  }
}

function initProductPage() {
  const page = document.querySelector("[data-product-page]");
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || products[0].id;
  const product = getProductById(productId) || products[0];

  document.title = `${product.name} | SUADA`;

  const name = document.querySelector("[data-product-name]");
  const price = document.querySelector("[data-product-price]");
  const shortDescription = document.querySelector("[data-product-short]");
  const description = document.querySelector("[data-product-description]");
  const details = document.querySelector("[data-product-details]");
  const color = document.querySelector("[data-product-color]");
  const drop = document.querySelector("[data-product-drop]");
  const status = document.querySelector("[data-product-status]");
  const primaryVisual = document.querySelector("[data-product-visual-primary]");
  const secondaryVisual = document.querySelector("[data-product-visual-secondary]");
  const campaignVisual = document.querySelector("[data-product-visual-campaign]");
  const sizeContainer = document.querySelector("[data-size-options]");
  const relatedGrid = document.querySelector("[data-related-products]");
  const addToCartButton = document.querySelector("[data-add-to-cart]");
  const addToCartFeedback = document.querySelector("[data-cart-feedback]");

  if (name) name.textContent = product.name;
  if (price) price.textContent = formatPrice(product);
  if (shortDescription) shortDescription.textContent = product.shortDescription;
  if (description) description.textContent = product.fullDescription;
  if (details) details.textContent = `${product.material}. Color: ${product.color}. Collection: ${product.drop}.`;
  if (color) color.textContent = product.color;
  if (drop) drop.textContent = product.drop;
  if (status) status.textContent = product.status;
  if (primaryVisual) {
    primaryVisual.src = product.imageSrc || "";
    primaryVisual.alt = `${product.name} primary view`;
  }
  if (secondaryVisual) {
    secondaryVisual.src = product.imageSecondarySrc || product.imageSrc || "";
    secondaryVisual.alt = `${product.name} detail view`;
  }
  if (campaignVisual) {
    campaignVisual.src = product.imageSecondarySrc || product.imageSrc || "";
    campaignVisual.alt = `${product.name} campaign view`;
  }

  if (sizeContainer) {
    sizeContainer.innerHTML = product.sizes
      .map(
        (size, index) => `
          <button class="size-chip ${index === 1 ? "is-active" : ""}" type="button" data-size="${size}">
            ${size}
          </button>
        `
      )
      .join("");

    sizeContainer.addEventListener("click", (event) => {
      const button = event.target.closest("[data-size]");
      if (!button) return;
      sizeContainer.querySelectorAll("[data-size]").forEach((node) => node.classList.remove("is-active"));
      button.classList.add("is-active");
    });
  }

  if (relatedGrid) {
    const relatedProducts = products
      .filter((item) => item.id !== product.id && item.drop === product.drop)
      .slice(0, 3);
    renderProductGrid(relatedGrid, relatedProducts.length ? relatedProducts : products.slice(0, 3));
  }

  if (addToCartButton && addToCartFeedback) {
    addToCartButton.addEventListener("click", () => {
      const cartItems = getCartItems();
      cartItems.push(product.id);
      setCartItems(cartItems);
      addToCartFeedback.textContent = `${product.name} added to cart.`;
      addToCartFeedback.classList.add("is-visible");
      window.setTimeout(() => addToCartFeedback.classList.remove("is-visible"), 2200);
    });
  }
}

function initCartPage() {
  const cartPage = document.querySelector("[data-cart-page]");
  if (!cartPage) return;

  const mappedProducts = calculateCartProducts();

  const cartGrid = document.querySelector("[data-cart-items]");
  const cartSummary = document.querySelector("[data-cart-summary]");
  const clearButton = document.querySelector("[data-clear-cart]");

  if (cartGrid) {
    if (!mappedProducts.length) {
      cartGrid.innerHTML = `
        <article class="story-panel panel-pad">
          <p class="eyebrow">Cart</p>
          <h3>Your cart is currently empty.</h3>
          <p>Use the product pages to add pieces to this mock cart.</p>
          <div class="button-row">
            <a class="button" href="products.html">Shop the Collection</a>
          </div>
        </article>
      `;
    } else {
      cartGrid.innerHTML = mappedProducts
        .map(
          (product) => `
            <article class="product-card">
              <div class="product-card__visual product-visual product-visual--small">
                <span class="product-visual__tag">${product.drop}</span>
                ${renderProductImage(product, "imageSrc", "product image")}
              </div>
              <div class="product-card__body">
                <div class="product-card__meta">
                  <p class="eyebrow">${product.category}</p>
                  <span class="badge ${product.status.toLowerCase().replace(/\s+/g, "-")}">${product.status}</span>
                </div>
                <h3>${product.name}</h3>
                <p>${product.shortDescription}</p>
                <div class="product-card__footer">
                  <strong>${formatPrice(product)}</strong>
                  <a class="text-link" href="product.html?id=${product.id}">View Product</a>
                </div>
              </div>
            </article>
          `
        )
        .join("");
    }
  }

  if (cartSummary) {
    const total = calculateTotal(mappedProducts);
    cartSummary.innerHTML = `
      <div class="detail-meta__item">
        <p class="eyebrow">Items</p>
        <strong>${mappedProducts.length}</strong>
      </div>
      <div class="detail-meta__item">
        <p class="eyebrow">Subtotal</p>
        <strong>CHF ${total}</strong>
      </div>
      <div class="detail-meta__item">
        <p class="eyebrow">Status</p>
        <strong>Mock Checkout</strong>
      </div>
    `;
  }

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      setCartItems([]);
      window.location.reload();
    });
  }
}

function initCheckoutPage() {
  const checkoutPage = document.querySelector("[data-checkout-page]");
  if (!checkoutPage) return;

  const productsInCart = calculateCartProducts();
  const orderList = document.querySelector("[data-checkout-items]");
  const summary = document.querySelector("[data-checkout-summary]");
  const form = document.querySelector("[data-checkout-form]");
  const feedback = document.querySelector("[data-checkout-feedback]");

  if (!productsInCart.length) {
    if (orderList) {
      orderList.innerHTML = `
        <article class="story-panel panel-pad">
          <p class="eyebrow">Checkout</p>
          <h3>No items available for checkout.</h3>
          <p>Add products to the cart before using this mock checkout.</p>
          <div class="button-row">
            <a class="button" href="products.html">Return to Shop</a>
          </div>
        </article>
      `;
    }

    if (summary) {
      summary.innerHTML = `
        <div class="detail-meta__item">
          <p class="eyebrow">Items</p>
          <strong>0</strong>
        </div>
        <div class="detail-meta__item">
          <p class="eyebrow">Subtotal</p>
          <strong>CHF 0</strong>
        </div>
      `;
    }

    if (form) {
      form.querySelectorAll("input, select, button").forEach((field) => {
        field.disabled = true;
      });
    }
    return;
  }

  if (orderList) {
    orderList.innerHTML = productsInCart
      .map(
        (product) => `
          <article class="checkout-item">
            <div class="checkout-item__visual product-visual product-visual--small">
              <span class="product-visual__tag">${product.drop}</span>
              ${renderProductImage(product, "imageSrc", "checkout image")}
            </div>
            <div class="checkout-item__body">
              <h3>${product.name}</h3>
              <p>${product.shortDescription}</p>
              <div class="product-card__footer">
                <span>${product.category}</span>
                <strong>${formatPrice(product)}</strong>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  if (summary) {
    const subtotal = calculateTotal(productsInCart);
    const shipping = 12;
    const total = subtotal + shipping;
    summary.innerHTML = `
      <div class="detail-meta__item">
        <p class="eyebrow">Items</p>
        <strong>${productsInCart.length}</strong>
      </div>
      <div class="detail-meta__item">
        <p class="eyebrow">Subtotal</p>
        <strong>CHF ${subtotal}</strong>
      </div>
      <div class="detail-meta__item">
        <p class="eyebrow">Shipping</p>
        <strong>CHF ${shipping}</strong>
      </div>
      <div class="detail-meta__item">
        <p class="eyebrow">Total</p>
        <strong>CHF ${total}</strong>
      </div>
    `;
  }

  if (!form || !feedback) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;
    form.querySelectorAll("input, select").forEach((field) => {
      field.classList.remove("input-error");
      if (!field.value.trim()) {
        field.classList.add("input-error");
        isValid = false;
      }
    });

    const email = form.querySelector('input[type="email"]');
    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add("input-error");
      isValid = false;
    }

    if (!isValid) {
      feedback.textContent = "Please complete the mock checkout form with valid details.";
      feedback.classList.add("is-visible");
      return;
    }

    const subtotal = calculateTotal(productsInCart);
    const newOrder = {
      id: createOrderReference(),
      date: new Date().toLocaleDateString("en-CH"),
      status: "Processing",
      customer: form.querySelector("#checkout-name").value.trim(),
      email: form.querySelector("#checkout-email").value.trim(),
      payment: form.querySelector("#checkout-payment").value.trim(),
      items: productsInCart.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category
      })),
      total: subtotal + 12
    };

    const orders = getOrders();
    orders.unshift(newOrder);
    setOrders(orders);
    setCartItems([]);
    form.reset();
    feedback.textContent = `Order ${newOrder.id} created. Redirecting to Orders.`;
    feedback.classList.add("is-visible");
    window.setTimeout(() => {
      window.location.href = "orders.html";
    }, 900);
  });
}

function initOrdersPage() {
  const ordersPage = document.querySelector("[data-orders-page]");
  if (!ordersPage) return;

  const orders = getOrders();
  const container = document.querySelector("[data-orders-list]");

  if (!container) return;

  if (!orders.length) {
    container.innerHTML = `
      <article class="story-panel panel-pad">
        <p class="eyebrow">Orders</p>
        <h3>No orders placed yet.</h3>
        <p>Complete the mock checkout to generate local orders for this user view.</p>
        <div class="button-row">
          <a class="button" href="products.html">Start Shopping</a>
        </div>
      </article>
    `;
    return;
  }

  container.innerHTML = orders
    .map(
      (order) => `
        <article class="order-card reveal">
          <div class="order-card__header">
            <div>
              <p class="eyebrow">Order ${order.id}</p>
              <h3>${order.customer}</h3>
            </div>
            <span class="badge current">${order.status}</span>
          </div>
          <div class="order-card__meta">
            <div class="detail-meta__item">
              <p class="eyebrow">Date</p>
              <strong>${order.date}</strong>
            </div>
            <div class="detail-meta__item">
              <p class="eyebrow">Payment</p>
              <strong>${order.payment}</strong>
            </div>
            <div class="detail-meta__item">
              <p class="eyebrow">Total</p>
              <strong>CHF ${order.total}</strong>
            </div>
          </div>
          <div class="order-card__items">
            ${order.items
              .map(
                (item) => `
                  <div class="order-line">
                    <span>${item.name}</span>
                    <strong>CHF ${item.price}</strong>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");

}

function initDropsPage() {
  const desertGrid = document.querySelector("[data-drop-desert]");
  const bloodmoonGrid = document.querySelector("[data-drop-bloodmoon]");

  if (desertGrid) {
    renderProductGrid(
      desertGrid,
      products.filter((product) => product.drop === "Desert Capsule").slice(0, 4)
    );
  }

  if (bloodmoonGrid) {
    renderProductGrid(
      bloodmoonGrid,
      products.filter((product) => product.drop === "Bloodmoon Capsule").slice(0, 4)
    );
  }
}

function initMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-mobile-nav]");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    panel.classList.toggle("is-open");
    document.body.classList.toggle("nav-open");
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      panel.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const existingItems = getCartItems();
  if (!existingItems.length && getCartCount() > 0) {
    setCartCount(getCartCount());
  } else {
    setCartItems(existingItems);
  }
  initMobileNav();
  initHomePage();
  initShopPage();
  initProductPage();
  initCartPage();
  initCheckoutPage();
  initOrdersPage();
  initDropsPage();
});
