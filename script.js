/*****************************************************
 *  kaibe - main.js (Complete & Unified)
 *  Professional e-commerce interactions
 *****************************************************/

// ==================== بيانات المنتجات (موحدة) ====================
const products = [
  {
    id: 1,
    name: "Hydrating Serum",
    desc: "A lightweight serum with hyaluronic acid and rose extract that deeply hydrates and plumps the skin, leaving it radiant and smooth.",
    price: 250,
    oldPrice: null,
    category: "skincare",
    badge: "New",
    img: "Shampoo.png"
  },
  {
    id: 2,
    name: "Hair Mask",
    desc: "Intensive repair mask with argan and jojoba oils. Restores moisture and shine to damaged hair.",
    price: 150,
    oldPrice: null,
    category: "haircare",
    badge: "",
    img: "Hair Mask.png"
  },
  {
    id: 3,
    name: "Bundle",
    desc: "Complete skincare routine: Hydrating Serum + Moisturizer + Calming Mist. Perfect for daily glow.",
    price: 750,
    oldPrice: 1000,
    category: "sets",
    badge: "Sale",
    img: "Bunddle.png"
  },
  {
    id: 4,
    name: "Calming Mist",
    desc: "Rosewater and aloe vera facial mist to refresh and soothe sensitive skin.",
    price: 240,
    oldPrice: null,
    category: "skincare",
    badge: "",
    img: ""
  },
  {
    id: 5,
    name: "Vitamin C Cream",
    desc: "Brightening daily moisturizer with vitamin C and antioxidants. Evens skin tone and boosts radiance.",
    price: 380,
    oldPrice: null,
    category: "skincare",
    badge: "",
    img: ""
  },
  {
    id: 6,
    name: "Clay Mask",
    desc: "Purifying clay mask that draws out impurities and minimizes pores. Suitable for oily and combination skin.",
    price: 320,
    oldPrice: 400,
    category: "skincare",
    badge: "",
    img: ""
  },
  {
    id: 7,
    name: "Body Scrub",
    desc: "Exfoliating body scrub with coffee grounds and coconut oil. Leaves skin soft and smooth.",
    price: 280,
    oldPrice: null,
    category: "body",
    badge: "",
    img: ""
  },
  {
    id: 8,
    name: "Glow Set",
    desc: "Deluxe set: Hydrating Serum + Vitamin C Cream + Calming Mist. The ultimate glow trio.",
    price: 890,
    oldPrice: 1200,
    category: "sets",
    badge: "Sale",
    img: "Bunddle.png"
  }
];

// ==================== المتغيرات العامة ====================
let cart = JSON.parse(localStorage.getItem('kaibe_cart')) || [];
let currentFilter = 'all';
let currentSort = 'featured';

// ==================== دوال عامة ====================
function saveCart() {
  localStorage.setItem('kaibe_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const countSpan = document.querySelector('.cart-count');
  const itemsDiv = document.querySelector('.cart-items');
  const totalSpan = document.querySelector('.cart-total span');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (countSpan) countSpan.textContent = totalItems;

  if (itemsDiv) {
    if (cart.length === 0) {
      itemsDiv.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
      itemsDiv.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}" width="50" height="50" style="object-fit:cover; border-radius:12px;" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'50\\' height=\\'50\\' viewBox=\\'0 0 24 24\\' fill=\\'%23C79A95\\'%3E%3Cpath d=\\'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\\'/%3E%3C/svg%3E'">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <p>${item.quantity} x ${item.price} L.E</p>
          </div>
          <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
        </div>
      `).join('');

      document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = parseInt(btn.dataset.id);
          cart = cart.filter(item => item.id !== id);
          updateCartUI();
          saveCart();
        });
      });
    }
  }

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (totalSpan) totalSpan.textContent = `${total} L.E`;
}

// ==================== عرض المنتجات في الشبكات ====================
function renderProducts(filter = currentFilter, sort = currentSort) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  let filtered = filter === 'all'
    ? [...products]
    : products.filter(p => p.category === filter);

  if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-category="${p.category}" data-id="${p.id}" onclick="location.href='product.html?id=${p.id}'" style="cursor: pointer;">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <i class="fas fa-spa" style="display: ${p.img ? 'none' : 'flex'}; position:absolute; font-size:2.5rem; color:var(--olive-sage);"></i>
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc.substring(0, 35)}...</p>
        <div class="product-footer">
          <div class="price-wrapper">
            <span class="current-price">${p.price} L.E</span>
            ${p.oldPrice ? `<span class="old-price">${p.oldPrice} L.E</span>` : ''}
          </div>
          <button class="btn-add" data-id="${p.id}"><i class="fas fa-plus"></i></button>
        </div>
      </div>
    </div>
  `).join('');

  attachAddToCartEvents();
}

function attachAddToCartEvents() {
  document.querySelectorAll('.btn-add').forEach(btn => {
    btn.removeEventListener('click', handleAddToCart);
    btn.addEventListener('click', handleAddToCart);
  });
}

function handleAddToCart(e) {
  e.stopPropagation(); // يمنع الانتقال إلى صفحة التفاصيل عند الضغط على الزر
  e.preventDefault();
  const id = parseInt(this.dataset.id);
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  saveCart();
  alert(`✨ ${product.name} added to cart!`);
}

// ==================== صفحة تفاصيل المنتج ====================
function initProductDetailPage() {
  // التحقق من أننا في صفحة التفاصيل عبر وجود عناصر محددة
  if (!document.getElementById('detailName')) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id')) || 1;
  const product = products.find(p => p.id === productId) || products[0];

  // تحديث واجهة الصفحة
  document.getElementById('productTitle').textContent = product.name;
  const crumb = document.getElementById('productCrumb');
  if (crumb) crumb.textContent = product.name;

  const imgEl = document.getElementById('detailImg');
  imgEl.src = product.img || '';
  imgEl.alt = product.name;
  imgEl.onerror = function() {
    this.style.display = 'none';
    const parent = this.parentElement;
    const icon = document.createElement('i');
    icon.className = 'fas fa-spa';
    icon.style.fontSize = '5rem';
    icon.style.color = 'var(--olive-sage)';
    parent.appendChild(icon);
  };

  document.getElementById('detailName').textContent = product.name;
  document.getElementById('detailPrice').textContent = product.price + ' L.E';

  const oldPriceEl = document.getElementById('detailOldPrice');
  if (product.oldPrice) {
    oldPriceEl.textContent = product.oldPrice + ' L.E';
    oldPriceEl.style.display = 'inline';
  } else {
    oldPriceEl.style.display = 'none';
  }

  document.getElementById('detailDesc').textContent = product.desc;

  const badgeEl = document.getElementById('detailBadge');
  if (product.badge) {
    badgeEl.textContent = product.badge;
    badgeEl.style.display = 'inline-block';
  }

  // الكمية
  const qtyInput = document.getElementById('qtyInput');
  document.getElementById('qtyPlus').addEventListener('click', () => {
    qtyInput.value = Math.min(parseInt(qtyInput.value) + 1, 99);
  });
  document.getElementById('qtyMinus').addEventListener('click', () => {
    qtyInput.value = Math.max(parseInt(qtyInput.value) - 1, 1);
  });

  // إضافة للسلة
  document.getElementById('addToCartBtn').addEventListener('click', () => {
    const qty = parseInt(qtyInput.value);
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({ ...product, quantity: qty });
    }
    updateCartUI();
    saveCart();
    alert(`✨ Added ${qty} x ${product.name} to cart!`);
  });

  // طلب واتساب مباشر
  document.getElementById('whatsappOrderBtn').addEventListener('click', () => {
    const qty = parseInt(qtyInput.value);
    const total = product.price * qty;
    let msg = `🛍️ *Order from kaibe*%0A%0A*Product:* ${product.name}%0A*Quantity:* ${qty}%0A*Total:* ${total} L.E%0A%0APlease confirm.`;
    window.open(`https://wa.me/201204818221?text=${msg}`, '_blank');
  });

  // منتجات ذات صلة
  renderRelatedProducts(product);
}

function renderRelatedProducts(currentProduct) {
  const grid = document.getElementById('relatedGrid');
  if (!grid) return;
  const related = products.filter(p => p.category === currentProduct.category && p.id !== currentProduct.id).slice(0, 4);
  if (related.length === 0) {
    document.querySelector('.related-products').style.display = 'none';
    return;
  }
  grid.innerHTML = related.map(p => `
    <div class="product-card" onclick="location.href='product.html?id=${p.id}'" style="cursor: pointer;">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <i class="fas fa-spa" style="display:${p.img ? 'none' : 'flex'}; position:absolute; font-size:2.5rem; color:var(--olive-sage);"></i>
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc.substring(0, 35)}...</p>
        <div class="product-footer">
          <div class="price-wrapper">
            <span class="current-price">${p.price} L.E</span>
            ${p.oldPrice ? `<span class="old-price">${p.oldPrice} L.E</span>` : ''}
          </div>
          <button class="btn-add" data-id="${p.id}"><i class="fas fa-plus"></i></button>
        </div>
      </div>
    </div>
  `).join('');

  attachAddToCartEvents();
}

// ==================== الفلاتر والترتيب ====================
function initFiltersAndSort() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProducts(currentFilter, currentSort);
    });
  });

  const sortSelect = document.querySelector('.sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts(currentFilter, currentSort);
    });
  }
}

// ==================== البحث ====================
function initSearch() {
  const searchToggle = document.querySelector('.search-toggle');
  const searchOverlay = document.querySelector('.search-overlay');
  const searchClose = document.querySelector('.search-close');
  const searchInput = document.getElementById('searchInput');

  if (!searchToggle || !searchOverlay) return;

  searchToggle.addEventListener('click', (e) => {
    e.preventDefault();
    searchOverlay.classList.add('active');
    searchInput.focus();
  });

  searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    document.querySelectorAll('.product-card').forEach(card => card.style.display = 'block');
  });

  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      const name = card.querySelector('.product-name')?.textContent.toLowerCase() || '';
      card.style.display = name.includes(term) ? 'block' : 'none';
    });
  });

  document.addEventListener('click', (e) => {
    if (!searchOverlay.contains(e.target) && !searchToggle.contains(e.target) && searchOverlay.classList.contains('active')) {
      searchOverlay.classList.remove('active');
    }
  });
}

// ==================== السلة الجانبية ====================
function initCartSidebar() {
  const cartToggle = document.querySelector('.cart-toggle');
  const sidebar = document.querySelector('.cart-sidebar');
  const overlay = document.querySelector('.cart-overlay');
  const closeBtn = document.querySelector('.cart-close');
  const checkoutBtn = document.querySelector('.cart-footer .btn-primary');

  if (!cartToggle || !sidebar) return;

  function openCart() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  cartToggle.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
  });

  closeBtn.addEventListener('click', closeCart);
  overlay.addEventListener('click', closeCart);

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is empty');
        return;
      }
      let message = "🛍️ *New Order from kaibe*%0A%0A";
      cart.forEach(item => {
        message += `• ${item.name} x${item.quantity} - ${item.price * item.quantity} L.E%0A`;
      });
      const total = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
      message += `%0A*Total: ${total} L.E*`;
      window.open(`https://wa.me/201234567890?text=${message}`, '_blank');
    });
  }
}

// ==================== القائمة الجانبية (هامبرجر) ====================
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      navMenu?.classList.remove('active');
    });
  });
}

// ==================== تأثير الهيدر عند التمرير ====================
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
    } else {
      header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.02)';
    }
  });
}

// ==================== النشرة البريدية ====================
function initNewsletter() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input.value) {
        alert(`🎉 Thanks for subscribing, ${input.value}!`);
        input.value = '';
      }
    });
  });
}

// ==================== فورم الاتصال ====================
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('📬 Your message has been sent! We will reply within 24 hours.');
      contactForm.reset();
    });
  }
}

// ==================== التهيئة العامة ====================
document.addEventListener('DOMContentLoaded', () => {
  // تهيئة المكونات المشتركة
  initSearch();
  initCartSidebar();
  initMobileMenu();
  initStickyHeader();
  initNewsletter();
  initContactForm();
  updateCartUI();

  // تحميل الصفحة المناسبة
  if (document.getElementById('productGrid')) {
    // الصفحات التي تحتوي على شبكة منتجات (index, products)
    renderProducts();
    initFiltersAndSort();
  }

  // صفحة تفاصيل المنتج
  initProductDetailPage();
});

// ==================== تصدير للاستخدام العام ====================
window.kaibe = {
  renderProducts,
  updateCartUI,
  cart,
  products
};
