/*****************************************************
 *  kaibe - main.js
 *  Professional e-commerce interactions
 *****************************************************/

// ==================== بيانات المنتجات ====================
const products = [
  {
    id: 1,
    name: "Hydrating Serum",
    desc: "With hyaluronic acid & rose",
    price: 250,
    oldPrice: null,
    category: "skincare",
    badge: "New",
    img: "Shampoo.png"
  },
  {
    id: 2,
    name: "Hair Mask",
    desc: "Repair & shine",
    price: 150,
    oldPrice: null,
    category: "haircare",
    badge: "",
    img: "Hair Mask.png"
  },
  {
    id: 3,
    name: "Bundle",
    desc: "Serum + Moisturizer + Mist",
    price: 750,
    oldPrice: 1000,
    category: "sets",
    badge: "Sale",
    img: "Bunddle.png"
  },
  {
    id: 4,
    name: "Calming Mist",
    desc: "Rosewater & aloe",
    price: 240,
    oldPrice: null,
    category: "skincare",
    badge: "",
    img: ""
  }
];

// ==================== المتغيرات العامة ====================
let cart = JSON.parse(localStorage.getItem('kaibe_cart')) || [];
let currentFilter = 'all';
let currentSort = 'featured';

// ==================== دالة عرض المنتجات ====================
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
    <div class="product-card" data-category="${p.category}" data-id="${p.id}">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <i class="fas fa-spa" style="display: ${p.img ? 'none' : 'flex'}; position:absolute; font-size:2.5rem; color:var(--olive-sage);"></i>
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
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

// ==================== أحداث الإضافة إلى السلة ====================
function attachAddToCartEvents() {
  document.querySelectorAll('.btn-add').forEach(btn => {
    btn.removeEventListener('click', handleAddToCart);
    btn.addEventListener('click', handleAddToCart);
  });
}

function handleAddToCart(e) {
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

// ==================== السلة UI ====================
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
        btn.addEventListener('click', () => {
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

function saveCart() {
  localStorage.setItem('kaibe_cart', JSON.stringify(cart));
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

// ==================== شريط البحث ====================
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

// ==================== قائمة الهامبرجر ====================
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

// ==================== تأثير الهيدر أثناء التمرير ====================
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

// ==================== فورم النشرة البريدية ====================
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

// ==================== أيقونة الواتساب ====================
// الرابط موجود في HTML مباشرةً، لا حاجة لكود إضافي

// ==================== تهيئة كل شيء عند تحميل الصفحة ====================
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('productGrid')) {
    renderProducts();
    initFiltersAndSort();
  }

  initSearch();
  initCartSidebar();
  initMobileMenu();
  initStickyHeader();
  initNewsletter();
  initContactForm();
  updateCartUI();
});

// ==================== تصدير للاستخدام في الكونسول (اختياري) ====================
window.kaibe = {
  renderProducts,
  updateCartUI,
  cart
};
