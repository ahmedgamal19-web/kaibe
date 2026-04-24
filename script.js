/*****************************************************
 *  kaibe - main.js (Complete & Unified)
 *  Professional e-commerce interactions
 *****************************************************/

// ==================== بيانات  المنتجات (موحدة) ====================
const products = [
   {
    id: 1,
    name: "Shampoo",
    desc: "KAIBE Shampoo\nKAIBE Shampoo is part of a \"7-Day Repair Routine For Damaged Hair\".\nRepairing shampoo for damaged hair -\nRepair, Renew, Restore\nGently cleanses and nourishes hair, restoring moisture, shine, and strength while protecting against dryness and damage.",
    benefits: "The KAIBE Shampoo, enriched with Argan Oil, Collagen, Keratin, and Pro-Vitamin B5, is specially formulated to provide intense repair for all types of hair damage. After following the full routine, you'll notice a significant difference! Enriched with powerful ingredients, this line restores and rejuvenates, leaving your hair healthier and shinier.",
    howToUse: "Apply a small amount to wet hair, massage into scalp and hair, then rinse thoroughly.",
    price: 349,
    oldPrice: 399,
    category: "haircare",
    badge: "New",
    img: "Shampoo.png",
    bestseller: true
},
{
    id: 2,
    name: "Hair Mask",
    desc: "KAIBE Hair Mask\nKAIBE Hair Mask is part of a \"7-Day Repair Routine For Damaged Hair\".\nRepairing Hair Mask for damaged hair - Repair, Renew, Restore\nDeeply nourishes and revitalizes hair, restoring softness, shine, and strength while protecting against damage.",
    benefits: "The KAIBE Hair Mask, enriched with Argan Oil, Collagen, Keratin, and Pro-Vitamin B5, is specially formulated to provide intense repair for all types of hair damage. After following the full routine, you'll notice a significant difference! Enriched with powerful ingredients, this line restores and rejuvenates, leaving your hair healthier and shinier.",
    howToUse: "After shampooing, apply a generous amount of mask to damp hair, focusing on mid-lengths to ends. Leave on for 5-10 minutes for regular conditioning or up to 30 minutes for deep treatment, then rinse thoroughly with water before styling as usual. Recommended for use 1-2 times per week.",
    price: 399,
    oldPrice: 449,
    category: "haircare",
    badge: "Limited Stock",
    img: "Hair Mask.png",
    bestseller: true
},
{
    id: 3,
    name: "Conditioner",
    desc: "KAIBE Conditioner\nKAIBE Conditioner is part of a \"7-Day Repair Routine For Damaged Hair\".\nRepairing Conditioner for damaged hair - Repair, Renew, Restore\nHydrates, Enhances manageability, shine, and strength while reducing frizz and protecting against damage.",
    benefits: "The KAIBE Conditioner, enriched with Argan Oil, Collagen, Keratin, and Pro-Vitamin B5, is specially formulated to provide intense repair for all types of hair damage. After following the full routine, you'll notice a significant difference! Enriched with powerful ingredients, this line restores and rejuvenates, leaving your hair healthier and shinier.",
    howToUse: "After shampooing, apply a generous amount of conditioner to wet hair, focusing on mid-lengths to ends. Leave on for 2-3 minutes, then rinse thoroughly.",
    price: 349,
    oldPrice: 399,
    category: "haircare",
    badge: "Trending",
    img: "condetioner.png",
    bestseller: true
},
{
    id: 4,
    name: "Bundle",
    desc: "Complete 7-Day Repair Routine: Shampoo + Hair Mask + Conditioner. The ultimate trio for damaged hair.",
    benefits: "The KAIBE 7-Day Repair Bundle is enriched with Argan Oil, Collagen, Keratin, and Pro-Vitamin B5 to deliver a complete hair transformation.\n• Repairs damaged hair and reduces breakage\n• Deeply nourishes and restores moisture\n• Strengthens hair and improves elasticity\n• Reduces frizz and enhances smoothness\n• Adds natural shine and softness\n• Protects hair from future damage\nWith consistent use, your hair becomes healthier, stronger, and visibly revitalized.",
    howToUse: "Step 1: Shampoo\nApply to wet hair, massage gently into scalp and hair, then rinse thoroughly.\nStep 2: Hair Mask\nApply to damp hair, focusing on mid-lengths to ends.\nLeave for 5–10 minutes (or up to 30 minutes for deep repair), then rinse well.\nUse 1–2 times per week.\nStep 3: Conditioner\nAfter shampoo or mask, apply to wet hair focusing on mid-lengths to ends.\nLeave for 2–3 minutes, then rinse thoroughly.\nFor best results, follow the full routine regularly.",
    price: 944,
    oldPrice: 1049,
    category: "sets",
    badge: "⌛ Limited Time Offer",
    img: "Bunddle.png",
    bestseller: true
},
{
    id: 5,
    name: "KAIBE Hydrating Serum",
    desc: "KAIBE Hydrating Serum\nLightweight serum designed to deeply hydrate and plump the skin.\nInfused with Hyaluronic Acid and Vitamin B5 to lock in moisture and improve skin texture.\nPerfect for daily use for a smooth, radiant glow.",
    benefits: "The KAIBE Hydrating Serum delivers intense hydration and skin renewal.\n• Deeply hydrates and locks in moisture\n• Plumps and smooths fine lines\n• Improves skin texture and softness\n• Enhances natural glow and radiance\n• Lightweight and fast-absorbing formula\nWith regular use, skin becomes smoother, fresher, and visibly healthier.",
    howToUse: "Apply a few drops to clean, dry skin.\nGently massage into face and neck until fully absorbed.\nUse morning and evening before moisturizer.",
    price: 420,
    oldPrice: 480,
    category: "skincare",
    badge: "Launching soon",
    img: "COMING.png",
    bestseller: false
},
{
    id: 6,
    name: "KAIBE Sunscreen SPF 50",
    desc: "KAIBE Sunscreen SPF 50\nDaily broad-spectrum sunscreen that protects against UVA & UVB rays.\nLightweight, non-greasy formula suitable for all skin types.\nHelps prevent sun damage and premature aging.",
    benefits: "The KAIBE Sunscreen provides advanced daily protection.\n• Protects against harmful UV rays\n• Prevents sun damage and dark spots\n• Lightweight, non-greasy finish\n• Suitable for all skin types\n• Helps maintain even skin tone\nWith daily use, skin stays protected, healthy, and youthful.",
    howToUse: "Apply generously to face and neck 15 minutes before sun exposure.\nReapply every 2 hours or after sweating or washing.",
    price: 350,
    oldPrice: null,
    category: "skincare",
    badge: "Launching soon",
    img: "COMING.png",
    bestseller: false
},
{
    id: 7,
    name: "KAIBE Body Lotion",
    desc: "KAIBE Nourishing Body Lotion\nRich body lotion designed to deeply moisturize and soften the skin.\nInfused with Shea Butter and Coconut Oil for long-lasting hydration.\nLeaves skin smooth, soft, and refreshed.",
    benefits: "The KAIBE Body Lotion provides deep nourishment and care.\n• Intensely moisturizes dry skin\n• Improves skin softness and elasticity\n• Restores smooth texture\n• Lightweight and fast-absorbing\n• Leaves skin feeling refreshed and hydrated\nWith daily use, skin becomes silky, smooth, and healthy.",
    howToUse: "Apply a generous amount to clean, dry skin.\nMassage gently until fully absorbed.\nUse daily for best results.",
    price: 300,
    oldPrice: 360,
    category: "body",
    badge: "Launching soon",
    img: "COMING.png",
    bestseller: false
},
{
    id: 8,
    name: "KAIBE Hair Growth Oil",
    desc: "KAIBE Hair Growth Oil\nNourishing oil blend designed to strengthen hair and promote healthy growth.\nInfused with natural oils to reduce hair fall and improve scalp health.\nIdeal for weak, thinning, or damaged hair.",
    benefits: "The KAIBE Hair Growth Oil supports stronger, healthier hair.\n• Promotes healthy hair growth\n• Strengthens roots and reduces hair fall\n• Nourishes scalp and improves circulation\n• Adds shine and smoothness\n• Helps repair damaged hair\nWith regular use, hair becomes thicker, stronger, and more vibrant.",
    howToUse: "Apply a small amount to scalp and hair.\nMassage gently for a few minutes.\nLeave for at least 1 hour or overnight, then wash.\nUse 2–3 times per week.",
    price: 390,
    oldPrice: 450,
    category: "haircare",
    badge: "Launching soon",
    img: "COMING.png",
    bestseller: false
}
];

// ==================== المتغيرات العامة ====================
let cart = JSON.parse(localStorage.getItem('kaibe_cart')) || [];
let currentFilter = 'all';
let currentSort = 'featured';


// ==================== Pagination Variables ====================
let currentPage = 1;
let productsPerPage = 8; // القيمة الافتراضية
let totalPages = 1;

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
// ==================== عرض المنتجات مع Pagination ====================
function renderProducts(filter = currentFilter, sort = currentSort, page = currentPage) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const isHomePage = !!document.querySelector('.hero');
  let filtered;

  if (isHomePage) {
    filtered = products.filter(p => p.bestseller === true);
    if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  } else {
    filtered = filter === 'all' ? [...products] : products.filter(p => p.category === filter);
    if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  }

  // تطبيق Pagination
  let paginatedProducts;
  if (isHomePage || productsPerPage === 0) {
    // عرض الكل في الصفحة الرئيسية أو إذا اختار "All"
    paginatedProducts = filtered;
  } else {
    currentPage = page;
    totalPages = Math.ceil(filtered.length / productsPerPage);
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    paginatedProducts = filtered.slice(start, end);
  }

  // توليد HTML الشبكة
  grid.innerHTML = paginatedProducts.map(p => `
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
  
  // تحديث أزرار الصفحات
  if (!isHomePage) {
    renderPaginationButtons(filtered.length);
  }
}


// ==================== عرض أزرار Pagination ====================
function renderPaginationButtons(totalProducts) {
  const paginationDiv = document.getElementById('pagination');
  if (!paginationDiv || productsPerPage === 0) {
    if (paginationDiv) paginationDiv.innerHTML = '';
    return;
  }

  totalPages = Math.ceil(totalProducts / productsPerPage);
  
  if (totalPages <= 1) {
    paginationDiv.innerHTML = '';
    return;
  }

  let html = '';
  
  // زر السابق
  html += `<button class="pagination-btn ${currentPage === 1 ? 'disabled' : ''}" data-page="prev">
    <i class="fas fa-chevron-left"></i>
  </button>`;
  
  // أرقام الصفحات
  const maxButtons = 5; // عدد الأزرار المرئية
  let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  let endPage = Math.min(totalPages, startPage + maxButtons - 1);
  
  if (endPage - startPage < maxButtons - 1) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }
  
  if (startPage > 1) {
    html += `<button class="pagination-btn" data-page="1">1</button>`;
    if (startPage > 2) html += `<span class="pagination-dots">...</span>`;
  }
  
  for (let i = startPage; i <= endPage; i++) {
    html += `<button class="pagination-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }
  
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) html += `<span class="pagination-dots">...</span>`;
    html += `<button class="pagination-btn" data-page="${totalPages}">${totalPages}</button>`;
  }
  
  // زر التالي
  html += `<button class="pagination-btn ${currentPage === totalPages ? 'disabled' : ''}" data-page="next">
    <i class="fas fa-chevron-right"></i>
  </button>`;

  paginationDiv.innerHTML = html;

  // ربط الأحداث
  document.querySelectorAll('.pagination-btn[data-page]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const action = btn.dataset.page;
      
      if (action === 'prev') {
        currentPage = Math.max(1, currentPage - 1);
      } else if (action === 'next') {
        currentPage = Math.min(totalPages, currentPage + 1);
      } else {
        currentPage = parseInt(action);
      }
      
      renderProducts(currentFilter, currentSort, currentPage);
      
      // تمرير لأعلى الصفحة بسلاسة
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
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
  document.getElementById('detailBenefits').innerHTML = product.benefits.replace(/\n/g, '<br>');
  document.getElementById('detailHowToUse').innerHTML = product.howToUse.replace(/\n/g, '<br>');

    
   document.querySelectorAll('.tab-btn').forEach(btn => {
     btn.addEventListener('click', () => {
       // إزالة active من كل الأزرار والمحتويات
       document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
       document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
       // تفعيل التبويب المختار
       btn.classList.add('active');
       const tabId = btn.dataset.tab;
       if (tabId === 'description') document.getElementById('tabDescription').classList.add('active');
       else if (tabId === 'benefits') document.getElementById('tabBenefits').classList.add('active');
       else if (tabId === 'howToUse') document.getElementById('tabHowToUse').classList.add('active');
     });
   });

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
      window.open(`https://wa.me/201204818221?text=${message}`, '_blank');
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


// ==================== العداد التنازلي للعرض الترويجي ====================
function initFlashCountdown() {
  const hoursEl = document.getElementById('countdownHours');
  const minutesEl = document.getElementById('countdownMinutes');
  const secondsEl = document.getElementById('countdownSeconds');
  const flashBar = document.getElementById('flashSaleBar');
  
  if (!hoursEl || !minutesEl || !secondsEl) return;

  function getTargetTime() {
    const now = new Date().getTime();
    // 24 ساعة من الآن
    return now + (24 * 60 * 60 * 1000);
  }

  function updateCountdown() {
    // قراءة الوقت المخزن أو إنشاء جديد
    let targetTime = parseInt(localStorage.getItem('kaibe_flash_end'));
    if (!targetTime || targetTime < new Date().getTime()) {
      targetTime = getTargetTime();
      localStorage.setItem('kaibe_flash_end', targetTime);
      if (flashBar) flashBar.style.display = 'block'; // تأكد من ظهوره
    }

    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance < 0) {
      // انتهى الوقت – إعادة تعيين تلقائي
      targetTime = getTargetTime();
      localStorage.setItem('kaibe_flash_end', targetTime);
      updateCountdown(); // إعادة الاستدعاء فوراً
      return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');

    // تغيير اللون عند اقتراب النهاية
    if (distance < 60 * 60 * 1000) {
      document.querySelectorAll('.countdown-value').forEach(el => {
        el.style.color = '#e74c3c';
      });
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}
// ==================== تصدير للاستخدام العام ====================
window.kaibe = {
  renderProducts,
  updateCartUI,
  cart,
  products
};
