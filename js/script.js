// ---------- PRODUCT DATA ----------
const products = [
  { id: 1, name: 'AERO RUNNER X1', price: 8999, oldPrice: 12000, tag: 'Bestseller', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9, 10], collection: 'aero', category: 'Sneakers', color: 'White' },
  { id: 2, name: 'URBAN TREK PRO', price: 6499, tag: 'New', img: "images/id2.jpg", sizes: [6, 7, 8, 9], collection: 'terra', category: 'Boots', color: 'Brown' },
  { id: 3, name: 'LUXE HEEL 005', price: 11999, tag: 'Limited', img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800', sizes: [5, 6, 7, 8], collection: 'noir', category: 'Heels', color: 'Black' },
  { id: 4, name: 'OXFORD ELITE', price: 9299, tag: 'Classic', img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800', sizes: [8, 9, 10], collection: 'classic', category: 'Formals', color: 'Brown' },
  { id: 5, name: 'BREEZE SLIDE', price: 3499, tag: 'New', img: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&q=80&w=800', sizes: [6, 7, 8], collection: 'summer', category: 'Sandals', color: 'White' },
  { id: 6, name: 'URBAN PULSE V2', price: 6799, tag: '', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9], collection: 'street', category: 'Sneakers', color: 'Red' },
  { id: 7, name: 'COASTAL DRIFT', price: 5999, tag: 'Hot', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9], collection: 'summer', category: 'Sandals', color: 'White' },
  { id: 8, name: 'METRO WALKER', price: 7499, tag: 'New', img: "images/id1.jpg", sizes: [8, 9, 10], collection: 'street', category: 'Sneakers', color: 'Black' },
  { id: 9, name: 'ECLIPSE RUN', price: 9299, tag: 'Limited', img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9, 10], collection: 'aero', category: 'Sneakers', color: 'Black' },
  { id: 10, name: 'TERRA CLASSIC', price: 6799, tag: '', img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800', sizes: [6, 7, 8, 9], collection: 'terra', category: 'Boots', color: 'Brown' },
  { id: 11, name: 'SUMMIT HIKE', price: 4999, tag: 'Sale', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9, 10], collection: 'terra', category: 'Boots', color: 'Red' },
  { id: 12, name: 'VELOCITY X', price: 10499, tag: 'New', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800', sizes: [8, 9, 10], collection: 'aero', category: 'Sneakers', color: 'White' },
  { id: 13, name: 'MIDNIGHT OXFORD', price: 8799, tag: '', img: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9, 10], collection: 'classic', category: 'Formals', color: 'Black' },
  { id: 14, name: 'AMBER HEEL', price: 12999, tag: 'Limited', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800', sizes: [5, 6, 7, 8], collection: 'noir', category: 'Heels', color: 'Red' },
  { id: 15, name: 'DESERT STORM', price: 7299, tag: 'New', img: "images/id4.jpg", sizes: [8, 9, 10], collection: 'terra', category: 'Boots', color: 'Brown' },
  { id: 16, name: 'SKY RUNNER', price: 8499, tag: '', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9, 10], collection: 'aero', category: 'Sneakers', color: 'White' },
  { id: 17, name: 'ONIX LACE', price: 9999, tag: '', img: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9, 10], collection: 'classic', category: 'Formals', color: 'Black' },
  { id: 18, name: 'TROPIC SLIDE', price: 2999, tag: 'Sale', img: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&q=80&w=800', sizes: [6, 7, 8, 9], collection: 'summer', category: 'Sandals', color: 'White' },
  { id: 19, name: 'URBAN FLOW', price: 6299, tag: 'New', img: "images/id5.jpg", sizes: [7, 8, 9, 10], collection: 'street', category: 'Sneakers', color: 'Black' },
  { id: 20, name: 'NOIR VELVET', price: 14999, tag: 'Limited', img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800', sizes: [5, 6, 7, 8], collection: 'noir', category: 'Heels', color: 'Black' },
  { id: 21, name: 'PEAK BOOT', price: 8899, tag: '', img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800', sizes: [8, 9, 10, 11], collection: 'terra', category: 'Boots', color: 'Brown' },
  { id: 22, name: 'AERO LIGHT', price: 7999, tag: 'New', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9, 10], collection: 'aero', category: 'Sneakers', color: 'White' },
  { id: 23, name: 'ROYAL DERBY', price: 10999, tag: '', img: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9, 10], collection: 'classic', category: 'Formals', color: 'Black' },
  { id: 24, name: 'SAND DRIFT', price: 3299, tag: '', img: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&q=80&w=800', sizes: [6, 7, 8, 9], collection: 'summer', category: 'Sandals', color: 'White' },
  { id: 25, name: 'CITY PULSE', price: 6999, tag: 'Hot', img: "images/id6.jpg", sizes: [7, 8, 9, 10], collection: 'street', category: 'Sneakers', color: 'Black' },
  { id: 26, name: 'STARE HEEL', price: 11499, tag: '', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800', sizes: [5, 6, 7, 8], collection: 'noir', category: 'Heels', color: 'Red' },
  { id: 27, name: 'TRAIL BLAZER', price: 7599, tag: 'New', img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800', sizes: [8, 9, 10, 11], collection: 'terra', category: 'Boots', color: 'Black' },
  { id: 28, name: 'AERO GHOST', price: 11999, tag: 'Limited', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9, 10], collection: 'aero', category: 'Sneakers', color: 'White' },
  { id: 29, name: 'MODERN MONK', price: 9599, tag: '', img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9, 10], collection: 'classic', category: 'Formals', color: 'Brown' },
  { id: 30, name: 'GLAM STILETO', price: 13999, tag: 'Limited', img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800', sizes: [5, 6, 7, 8], collection: 'noir', category: 'Heels', color: 'Black' },
  { id: 31, name: 'CORE SNEAK', price: 5499, tag: 'Sale', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9, 10], collection: 'street', category: 'Sneakers', color: 'Red' },
  { id: 32, name: 'RUGGED EDGE', price: 8299, tag: 'New', img: "images/id7.jpg", sizes: [8, 9, 10, 11], collection: 'terra', category: 'Boots', color: 'Brown' },
  { id: 33, name: 'AERO SPEED', price: 8999, tag: '', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9, 10], collection: 'aero', category: 'Sneakers', color: 'White' },
  { id: 34, name: 'ELITE LOAFER', price: 7799, tag: '', img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9, 10], collection: 'classic', category: 'Formals', color: 'Brown' },
  { id: 35, name: 'DIVA HEEL', price: 15999, tag: 'Premium', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800', sizes: [5, 6, 7, 8], collection: 'noir', category: 'Heels', color: 'Red' },
  { id: 36, name: 'URBAN EDGE', price: 6899, tag: '', img: "images/id8.jpg", sizes: [7, 8, 9, 10], collection: 'street', category: 'Sneakers', color: 'Black' },
  { id: 37, name: 'AERO PRIME', price: 12499, tag: 'Limited', img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9, 10], collection: 'aero', category: 'Sneakers', color: 'Black' },
  { id: 38, name: 'WILD TREK', price: 5999, tag: 'Sale', img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800', sizes: [8, 9, 10, 11], collection: 'terra', category: 'Boots', color: 'Brown' },
  { id: 39, name: 'AERO FLOW', price: 9499, tag: 'New', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800', sizes: [7, 8, 9, 10], collection: 'aero', category: 'Sneakers', color: 'White' },
  { id: 40, name: 'NOIR CLASSIC', price: 10999, tag: '', img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800', sizes: [5, 6, 7, 8], collection: 'noir', category: 'Heels', color: 'Black' }
];

// ---------- CART ----------
let cart = JSON.parse(localStorage.getItem('sole_cart')) || [];
let currentProduct = null;

function saveCart() { localStorage.setItem('sole_cart', JSON.stringify(cart)); updateCartUI(); }

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').textContent = totalItems;
  renderCartPage();
}

function addToCart(productId, selectedSize = null) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const sizeToUse = selectedSize || (product.sizes ? product.sizes[0] : 8);
  const existingItem = cart.find(item => item.id === productId && item.selectedSize === sizeToUse);
  if (existingItem) { existingItem.quantity += 1; } else { cart.push({ ...product, quantity: 1, selectedSize: sizeToUse }); }
  saveCart();
  showToast(`${product.name} added to cart! 🛒`);
}

// ---------- RENDER ----------
function renderFeatured() {
  const grid = document.getElementById('featured-products');
  if (!grid) return;
  grid.innerHTML = products.slice(0, 4).map(p => `
      <div class="product-card" onclick="openModal(${p.id})">
        <div class="product-img"><img class="product-photo" src="${p.img}" alt="${p.name}">
          <div class="product-overlay"><button class="quick-add" onclick="event.stopPropagation();addToCart(${p.id})">+ Quick Add</button></div>
        </div>
        <div class="product-info"><div class="product-tag">${p.tag || ''}</div><div class="product-name">${p.name}</div>
          <div class="product-price">₹${p.price.toLocaleString()} ${p.oldPrice ? '<span class="old">₹' + p.oldPrice.toLocaleString() + '</span>' : ''}</div>
        </div>
      </div>`).join('');
}

function renderShop(productsToRender = products) {
  const grid = document.getElementById('shop-grid');
  if (!grid) return;

  const countText = document.getElementById('shop-count-text');
  if (countText) {
    countText.innerHTML = `Showing <strong>${productsToRender.length}</strong> of ${products.length} products`;
  }

  if (productsToRender.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding: 40px; color: var(--muted-text);">No products found matching your filters.</div>';
    return;
  }

  grid.innerHTML = productsToRender.map(p => `
      <div class="shop-card" onclick="openModal(${p.id})">
        <div class="shop-img"><span class="new-badge">${p.tag || 'NEW'}</span><img src="${p.img}" alt="${p.name}"></div>
        <div class="shop-card-info"><div class="shop-card-brand">SOLÉ</div><div class="shop-card-name">${p.name}</div>
          <div class="shop-card-footer"><span class="shop-card-price">₹${p.price.toLocaleString()}</span>
            <button class="add-btn" onclick="event.stopPropagation();addToCart(${p.id})">+</button>
          </div>
        </div>
      </div>`).join('');
}

function filterProducts() {
  let filtered = [...products];

  const searchInput = document.getElementById('shop-search');
  if (searchInput && searchInput.value) {
    const query = searchInput.value.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(query));
  }

  const checkedCats = Array.from(document.querySelectorAll('.filter-category:checked')).map(cb => cb.value);
  if (checkedCats.length > 0) {
    filtered = filtered.filter(p => checkedCats.includes(p.category));
  }

  const checkedSizes = Array.from(document.querySelectorAll('.filter-size:checked')).map(cb => parseInt(cb.value));
  if (checkedSizes.length > 0) {
    filtered = filtered.filter(p => p.sizes.some(size => checkedSizes.includes(size)));
  }

  const checkedColors = Array.from(document.querySelectorAll('.filter-color:checked')).map(cb => cb.value);
  if (checkedColors.length > 0) {
    filtered = filtered.filter(p => checkedColors.includes(p.color));
  }

  const checkedPrices = Array.from(document.querySelectorAll('.filter-price:checked')).map(cb => cb.value);
  if (checkedPrices.length > 0) {
    filtered = filtered.filter(p => {
      if (checkedPrices.includes('under5k') && p.price < 5000) return true;
      if (checkedPrices.includes('5k-10k') && p.price >= 5000 && p.price <= 10000) return true;
      if (checkedPrices.includes('above10k') && p.price > 10000) return true;
      return false;
    });
  }

  const sortSelect = document.getElementById('shop-sort');
  if (sortSelect) {
    const sortVal = sortSelect.value;
    if (sortVal === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sortVal === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sortVal === 'newest') filtered.reverse();
  }

  renderShop(filtered);
}

function renderCollections() {
  const grid = document.getElementById('collections-grid');
  if (!grid) return;
  const collectionsData = [
    { name: 'AERO SERIES', desc: 'Built for performance athletes. Lightweight, breathable, unstoppable.', img: products[0].img, productId: 1, num: '01 / SPORT' },
    { name: 'TERRA FORCE', desc: 'Rugged soles for mountain trails and urban jungles alike.', img: products[1].img, productId: 2, num: '02 / OUTDOOR' },
    { name: 'NOIR ÉLITE', desc: 'Refined silhouettes for the discerning taste. Italian-inspired.', img: products[2].img, productId: 3, num: '03 / LUXURY' },
    { name: 'URBAN PULSE', desc: 'Street culture meets design precision. Wear your attitude.', img: products[5].img, productId: 6, num: '04 / STREET' }
  ];
  grid.innerHTML = collectionsData.map(c => `
      <div class="collection-card" onclick="openModal(${c.productId})">
        <div class="collection-bg"><img src="${c.img}" alt="${c.name}"></div>
        <div class="collection-arrow">→</div>
        <div class="collection-info"><div class="collection-num">${c.num}</div><div class="collection-name">${c.name}</div><div class="collection-desc">${c.desc}</div></div>
      </div>`).join('');
}

// ---------- MODAL ----------
function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  currentProduct = { ...product };
  document.getElementById('modal-product-content').innerHTML = `
      <div style="display:flex;gap:30px;flex-wrap:wrap;">
        <div style="flex:1;min-width:280px;"><img src="${product.img}" alt="${product.name}" style="width:100%;border-radius:20px;"></div>
        <div style="flex:1;">
          <h2 style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;margin-bottom:8px;">${product.name}</h2>
          <div style="font-size:1.8rem;color:var(--primary-blue);margin-bottom:20px;">₹${product.price.toLocaleString()}</div>
          <p style="color:var(--muted-text);margin-bottom:24px;">Premium quality, handcrafted with precision materials. Designed for all-day comfort.</p>
          <label style="display:block;margin-bottom:12px;font-weight:500;">Select Size (UK):</label>
          <div class="size-options">${product.sizes.map(s => `<button class="size-btn" onclick="selectSize(this,${s})">${s}</button>`).join('')}</div>
          <button class="btn-primary" style="width:100%;margin-top:30px;" onclick="addToCartFromModal()"><span>Add to Cart</span></button>
        </div>
      </div>`;
  document.getElementById('productModal').classList.add('active');
}

function selectSize(btn, size) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (currentProduct) currentProduct.selectedSize = size;
}

function addToCartFromModal() {
  if (!currentProduct) return;
  if (!currentProduct.selectedSize) { alert('Please select a size'); return; }
  addToCart(currentProduct.id, currentProduct.selectedSize);
  closeModal();
}

function closeModal() { document.getElementById('productModal').classList.remove('active'); }

// ---------- CART PAGE ----------
function renderCartPage() {
  const container = document.getElementById('cart-items-container');
  const totalSpan = document.getElementById('cart-total');
  if (!container) return;
  if (cart.length === 0) { container.innerHTML = '<p style="text-align:center;padding:40px;color:var(--muted-text);">Your cart is empty.</p>'; if (totalSpan) totalSpan.textContent = '0'; return; }
  let total = 0; let html = '';
  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    html += `<div class="cart-item"><div style="display:flex;align-items:center;gap:20px;"><img src="${item.img}" style="width:60px;height:60px;object-fit:cover;border-radius:12px;"><div><strong>${item.name}</strong><br><span style="font-size:0.85rem;color:var(--muted-text);">Size: ${item.selectedSize} | Qty: ${item.quantity}</span></div></div><div style="display:flex;align-items:center;gap:20px;"><span style="font-weight:600;">₹${(item.price * item.quantity).toLocaleString()}</span><button onclick="removeFromCart(${index})" style="background:none;border:none;color:var(--muted-text);cursor:pointer;font-size:1.2rem;">✕</button></div></div>`;
  });
  container.innerHTML = html;
  if (totalSpan) totalSpan.textContent = total.toLocaleString();
}

function removeFromCart(index) { cart.splice(index, 1); saveCart(); }

// ---------- TOAST ----------
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

// ---------- NEWSLETTER SUBSCRIBE ----------
function handleSubscribe() {
  const email = document.getElementById('newsletter-email').value.trim();
  if (!email || !email.includes('@')) { showToast('⚠️ Please enter a valid email address.'); return; }
  document.getElementById('newsletter-email').value = '';
  showToast('🎉 You\'re subscribed! Welcome to the SOLÉ family.');
}

// ---------- LOGIN / SIGNUP HANDLERS ----------
function handleLogin() {
  showToast('✅ Login successful! Welcome back.');
  setTimeout(() => navigate('home'), 1200);
}

function handleSignup() {
  showToast('🎉 Account created! Welcome to SOLÉ.');
  setTimeout(() => navigate('home'), 1200);
}

function checkStrength(val) {
  const fill = document.getElementById('strength-fill');
  if (!fill) return;
  let strength = 0;
  if (val.length >= 8) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;
  const widths = ['0%', '25%', '50%', '75%', '100%'];
  const colors = ['#e2e8f0', '#ef4444', '#f59e0b', '#3b82f6', '#22c55e'];
  fill.style.width = widths[strength];
  fill.style.background = colors[strength];
}

// ---------- LOGIN TABS ----------
function switchLoginTab(tab) {
  document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.login-form').forEach(f => f.classList.remove('active'));
  document.getElementById(tab + '-form').classList.add('active');
  const tabs = document.querySelectorAll('.login-tab');
  if (tab === 'login') tabs[0].classList.add('active');
  else tabs[1].classList.add('active');
}

// ---------- NAVIGATION ----------
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const activeLink = document.getElementById('nav-' + page);
  if (activeLink) activeLink.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (page === 'shop') renderShop();
  if (page === 'collections') renderCollections();
  if (page === 'cart') renderCartPage();
  return false;
}

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  // Set active nav link based on current URL
  const path = window.location.pathname;
  let page = path.split('/').pop().replace('.html', '');
  if (!page || page === 'index' || page === '') page = 'home';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (!a.classList.contains('nav-cta')) {
      a.classList.remove('active');
    }
  });
  const activeLink = document.getElementById('nav-' + page);
  if (activeLink) activeLink.classList.add('active');

  renderFeatured();
  renderShop();
  renderCollections();
  updateCartUI();

  // Setup filter listeners
  const filterInputs = document.querySelectorAll('.filter-category, .filter-size, .filter-price, .filter-color');
  filterInputs.forEach(input => input.addEventListener('change', filterProducts));

  const searchInput = document.getElementById('shop-search');
  if (searchInput) searchInput.addEventListener('input', filterProducts);

  const sortSelect = document.getElementById('shop-sort');
  if (sortSelect) sortSelect.addEventListener('change', filterProducts);



  // --- Mobile Nav Toggle ---
  const navBar = document.querySelector('nav');
  const navLinks = document.querySelector('.nav-links');
  if (navBar && navLinks) {
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger-menu';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    navBar.appendChild(hamburger);

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      hamburger.classList.toggle('toggle');
    });
  }

  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 40) { nav.style.background = 'rgba(255,255,255,0.98)'; nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)'; }
    else { nav.style.background = 'rgba(255,255,255,0.9)'; nav.style.boxShadow = 'none'; }
  });
});

// Expose globals
window.navigate = navigate;
window.openModal = openModal;
window.closeModal = closeModal;
window.addToCart = addToCart;
window.selectSize = selectSize;
window.addToCartFromModal = addToCartFromModal;
window.switchLoginTab = switchLoginTab;
window.removeFromCart = removeFromCart;
window.handleSubscribe = handleSubscribe;
window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.checkStrength = checkStrength;