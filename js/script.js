// ---------- PRODUCT DATA ----------
  const products = [
    { id:1, name:'AERO RUNNER X1', price:8999, oldPrice:12000, tag:'Bestseller', img:'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=400', sizes:[7,8,9,10], collection:'aero' },
    { id:2, name:'URBAN TREK PRO', price:6499, tag:'New', img:'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400', sizes:[6,7,8,9], collection:'terra' },
    { id:3, name:'LUXE HEEL 005', price:11999, tag:'Limited', img:'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=400', sizes:[5,6,7,8], collection:'noir' },
    { id:4, name:'OXFORD ELITE', price:9299, tag:'Classic', img:'https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=400', sizes:[8,9,10], collection:'classic' },
    { id:5, name:'BREEZE SLIDE', price:3499, tag:'New', img:'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400', sizes:[6,7,8], collection:'summer' },
    { id:6, name:'URBAN PULSE V2', price:6799, tag:'', img:'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400', sizes:[7,8,9], collection:'street' }
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
    grid.innerHTML = products.slice(0,4).map(p => `
      <div class="product-card" onclick="openModal(${p.id})">
        <div class="product-img"><img class="product-photo" src="${p.img}" alt="${p.name}">
          <div class="product-overlay"><button class="quick-add" onclick="event.stopPropagation();addToCart(${p.id})">+ Quick Add</button></div>
        </div>
        <div class="product-info"><div class="product-tag">${p.tag || ''}</div><div class="product-name">${p.name}</div>
          <div class="product-price">₹${p.price.toLocaleString()} ${p.oldPrice ? '<span class="old">₹'+p.oldPrice.toLocaleString()+'</span>' : ''}</div>
        </div>
      </div>`).join('');
  }

  function renderShop() {
    const grid = document.getElementById('shop-grid');
    if (!grid) return;
    grid.innerHTML = products.map(p => `
      <div class="shop-card" onclick="openModal(${p.id})">
        <div class="shop-img"><span class="new-badge">${p.tag || 'NEW'}</span><img src="${p.img}" alt="${p.name}"></div>
        <div class="shop-card-info"><div class="shop-card-brand">SOLÉ</div><div class="shop-card-name">${p.name}</div>
          <div class="shop-card-footer"><span class="shop-card-price">₹${p.price.toLocaleString()}</span>
            <button class="add-btn" onclick="event.stopPropagation();addToCart(${p.id})">+</button>
          </div>
        </div>
      </div>`).join('');
  }

  function renderCollections() {
    const grid = document.getElementById('collections-grid');
    if (!grid) return;
    const collectionsData = [
      { name:'AERO SERIES', desc:'Built for performance athletes. Lightweight, breathable, unstoppable.', img:products[0].img, productId:1, num:'01 / SPORT' },
      { name:'TERRA FORCE', desc:'Rugged soles for mountain trails and urban jungles alike.', img:products[1].img, productId:2, num:'02 / OUTDOOR' },
      { name:'NOIR ÉLITE', desc:'Refined silhouettes for the discerning taste. Italian-inspired.', img:products[2].img, productId:3, num:'03 / LUXURY' },
      { name:'URBAN PULSE', desc:'Street culture meets design precision. Wear your attitude.', img:products[5].img, productId:6, num:'04 / STREET' }
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
    if (cart.length === 0) { container.innerHTML = '<p style="text-align:center;padding:40px;color:var(--muted-text);">Your cart is empty.</p>'; if(totalSpan) totalSpan.textContent = '0'; return; }
    let total = 0; let html = '';
    cart.forEach((item, index) => {
      total += item.price * item.quantity;
      html += `<div class="cart-item"><div style="display:flex;align-items:center;gap:20px;"><img src="${item.img}" style="width:60px;height:60px;object-fit:cover;border-radius:12px;"><div><strong>${item.name}</strong><br><span style="font-size:0.85rem;color:var(--muted-text);">Size: ${item.selectedSize} | Qty: ${item.quantity}</span></div></div><div style="display:flex;align-items:center;gap:20px;"><span style="font-weight:600;">₹${(item.price*item.quantity).toLocaleString()}</span><button onclick="removeFromCart(${index})" style="background:none;border:none;color:var(--muted-text);cursor:pointer;font-size:1.2rem;">✕</button></div></div>`;
    });
    container.innerHTML = html;
    if(totalSpan) totalSpan.textContent = total.toLocaleString();
  }

  function removeFromCart(index) { cart.splice(index,1); saveCart(); }

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
    const widths = ['0%','25%','50%','75%','100%'];
    const colors = ['#e2e8f0','#ef4444','#f59e0b','#3b82f6','#22c55e'];
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

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('📩 Message sent! We\'ll respond within 24 hours.');
        contactForm.reset();
      });
    }

    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 40) { nav.style.background='rgba(255,255,255,0.98)'; nav.style.boxShadow='0 4px 12px rgba(0,0,0,0.05)'; }
      else { nav.style.background='rgba(255,255,255,0.9)'; nav.style.boxShadow='none'; }
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