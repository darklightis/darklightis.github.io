<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GPU Store - Магазин відеокарт</title>
  <link rel="stylesheet" href="style.css">
  <style>
        :root {
      --bg: #121212;
      --text: #fff;
      --card-bg: #1e1e1e;
      --accent: #00d4ff;
    }
    [data-theme="light"] {
      --bg: #f5f5f5;
      --text: #000;
      --card-bg: #fff;
      --accent: #0077ff;
    }
    body, header, footer, .product-card, .cart-content {
      transition: background 0.4s ease, color 0.4s ease;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
    }

    header {
      background: var(--card-bg);
      padding: 1rem;
      position: sticky;
      top: 0;
      z-index: 10;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: auto;
    }
    .logo {
      font-weight: bold;
      font-size: 1.3rem;
      color: var(--accent);
    }
    .nav-menu {
      list-style: none;
      display: flex;
      gap: 1rem;
      margin: 0;
      padding: 0;
      align-items: center;
    }
    .nav-menu a {
      color: var(--text);
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s;
    }
    .theme-toggle {
      cursor: pointer;
      background: none;
      border: none;
      font-size: 1.2rem;
      color: var(--text);
      transition: color 0.3s;
    }
    .cart-icon {
      cursor: pointer;
      font-size: 1.5rem;
      position: relative;
    }
    .cart-count {
      position: absolute;
      top: -8px;
      right: -10px;
      background: red;
      color: white;
      border-radius: 50%;
      font-size: 0.7rem;
      padding: 2px 5px;
    }

    .hero {
      text-align: center;
      padding: 4rem 1rem;
      background: linear-gradient(135deg, var(--accent), #5b86e5);
      color: #fff;
      transition: background 0.4s ease;
    }

    .products {
      max-width: 1200px;
      margin: auto;
      padding: 2rem 1rem;
    }
    .section-title {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }
    .product-card {
      background: var(--card-bg);
      border-radius: 10px;
      overflow: hidden;
      text-align: center;
      padding: 1rem;
      box-shadow: 0 6px 12px rgba(0,0,0,0.2);
    }
    .product-card img {
      width: 100%;
      height: 200px;
      object-fit: contain;   /* показує картинку повністю */
      display: block;
      margin: 0 auto;
      border-radius: 6px;
    }
    .product-name {
      margin: 1rem 0 0.5rem;
      font-weight: bold;
    }
    .product-price {
      color: var(--accent);
      font-size: 1.2rem;
      margin-bottom: 1rem;
      transition: color 0.4s ease;
    }
    .buy-btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 6px;
      background: linear-gradient(45deg, var(--accent), #5b86e5);
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
    }

    footer {
      background: var(--card-bg);
      text-align: center;
      padding: 2rem 1rem;
      margin-top: 3rem;
    }

    /* Кошик */
    .cart-modal {
      display: none;
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.7);
      justify-content: center;
      align-items: center;
      z-index: 100;
      
    }
    .cart-content {
      position: relative;
       margin: auto;
      background: var(--card-bg);
      color: var(--text);
      padding: 1.5rem;
      border-radius: 10px;
      width: 90%;
      max-width: 400px;
      display: flex;
      flex-direction: column;   /* вирівнює елементи один під одним */
      align-items: center;      /* центрує по горизонталі */
      text-align: center;       /* щоб текст був по центру */
      padding: 20px;
    }
    .cart-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

.close-cart {
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 26px;
  font-weight: bold;
  color: #aaa;
  cursor: pointer;
  transition: color 0.2s ease;
}

.close-cart:hover {
  color: red;
}


.filter-buttons {
  text-align: center;
  margin-bottom: 20px;
}

.filter-buttons button {
  margin: 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  background: #4f4141; 
  color: #fff;
  font-weight: bold;
  transition: 0.3s ease;
}

.filter-buttons button:hover {
  background: #333;      
}

.filter-buttons button.active {
  background: #007bff;   
}
 /* Стилі для чорних закруглених кнопок */
    .filter-buttons button {
      background: #000;
      color: #fff;
      border: none;
      border-radius: 20px;
      padding: 10px 20px;
      margin: 5px;
      cursor: pointer;
      transition: 0.3s;
    }
    .filter-buttons button:hover {
      background: #333;
    }

    /* Модальне вікно товару */
    .product-modal {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background: rgba(0, 0, 0, 0.7);
    }
    .product-modal-content {
      background: #fff;
      margin: 10% auto;
      padding: 20px;
      border-radius: 15px;
      width: 400px;
      text-align: center;
      position: relative;
    }
    .close-modal {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 24px;
      cursor: pointer;
    }
    .product-modal-content img {
      max-width: 100%;
      border-radius: 10px;
    }


    
    
.product-modal-content {
  background: var(--bg-color);
  color: var(--text-color);
}

.product-modal-content h2,
.product-modal-content p,
.product-modal-content h3 {
  color: var(--text-color);
}

.product-modal {
  display: none; /* приховане за замовчуванням */
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.7); /* задній фон */
}

.product-modal-content {
  background: #fff;
  margin: 10% auto;
  padding: 20px;
  border-radius: 12px;
  width: 400px;
  text-align: center;
  border-radius: 15px;
  width: 90%;         /* зробив ширше */
  max-width: 4500px;   /* обмеження максимальної ширини */
  min-height: 600px;  /* щоб воно не було занадто маленьке */
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  text-align: center;
}

.close-modal {
  float: right;
  font-size: 24px;
  cursor: pointer;
}

.product-modal-content {
  background: #4e4e4e;
  color: #000;
  margin: 5% auto;
  padding: 30px;
  border-radius: 15px;
  width: 70%;
  max-width: 900px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  position: relative;
}
/* Тіло модального вікна у flex */
.product-modal-body {
  display: flex;
  align-items: center;
  gap: 20px;
}
/* Картинка зліва */
.product-modal-image img {
  max-width: 350px;
  border-radius: 10px;
}
/* Текст справа */
.product-modal-info {
  flex: 1;
  text-align: left;
}
/* Темна тема */
body.dark-mode .product-modal-content {
  background: #1e1e1e;
  color: #f5f5f5;
/* світла тема (за замовчуванням) */
.product-modal-content {
  background: #fff;
  color: #000;
  </style>
</head>
<body>
  <header>
    <nav>
      <div class="logo">🎮 GPU Store</div>
      <ul class="nav-menu">
        <li><a href="#home">Головна</a></li>
        <li><a href="#products">Товари</a></li>
        <li><a href="#contact">Контакти</a></li>
        <li><button class="theme-toggle" id="themeToggle">🌙</button></li>
        <li class="cart-icon" onclick="toggleCart()">🛒<span class="cart-count" id="cartCount">0</span></li>
      </ul>
    </nav>
  </header>

  <section class="hero" id="home">
    <h1>Найкращі відеокарти за найкращими цінами</h1>
    <p>Вибери свою ідеальну GPU прямо зараз</p>
  </section>

  <div class="filter-buttons">
    <button onclick="filterProducts('all')">Всі</button>
    <button onclick="filterProducts('nvidia')">NVIDIA</button>
    <button onclick="filterProducts('amd')">AMD</button>
    <button onclick="filterProducts('intel')">Intel</button>
  </div>

  <section class="products" id="products">
    <h2 class="section-title">Наші товари</h2>
    
    <div class="product-grid">
      <!-- NVIDIA RTX 4090 -->
      <div class="product-card" data-brand="nvidia" onclick="showProductInfo('modal4090')">
        <img src="Photo/4090.png" alt="NVIDIA RTX 4090">
        <div class="product-name">NVIDIA RTX 4090</div>
        <div class="product-price">65 000 ₴</div>
        <button class="buy-btn" onclick="event.stopPropagation(); addToCart('NVIDIA RTX 4090', 65000)">Купити</button>
      </div>

      <!-- NVIDIA RTX 4080 -->
      <div class="product-card" data-brand="nvidia" onclick="showProductInfo('modal4080')">
        <img src="Photo/4080/4080.jpg" alt="NVIDIA RTX 4080">
        <div class="product-name">NVIDIA RTX 4080</div>
        <div class="product-price">45 000 ₴</div>
        <button class="buy-btn" onclick="event.stopPropagation(); addToCart('NVIDIA RTX 4080', 45000)">Купити</button>
      </div>

      <!-- AMD RX 7900 XTX -->
      <div class="product-card" data-brand="amd" onclick="showProductInfo('modal7900')">
        <img src="Photo/7900xtx/7900xtx.jpg" alt="AMD RX 7900 XTX">
        <div class="product-name">AMD RX 7900 XTX</div>
        <div class="product-price">42 000 ₴</div>
        <button class="buy-btn" onclick="event.stopPropagation(); addToCart('AMD RX 7900 XTX', 42000)">Купити</button>
      </div>

      <!-- Intel ARC A770 -->
      <div class="product-card" data-brand="intel" onclick="showProductInfo('modalArc')">
        <img src="Photo/arc/arc.jpg" alt="Intel ARC A770">
        <div class="product-name">Intel ARC A770</div>
        <div class="product-price">25 000 ₴</div>
        <button class="buy-btn" onclick="event.stopPropagation(); addToCart('Intel ARC A770', 25000)">Купити</button>
      </div>
    </div>
  </section>

  <footer id="contact">
    <p>📞 +380 (XX) XXX-XX-XX</p>
    <p>📧 info@gpustore.ua</p>
    <p>📍 м. Київ, вул. Технологічна, 1</p>
    <p>&copy; 2025 GPU Store. Усі права захищені.</p>
  </footer>

  <div class="cart-modal" id="cartModal" style="display:none;">
    <div class="cart-content">
      <span class="close-cart" onclick="toggleCart()">&times;</span>
      <h2 class="text-center">Кошик</h2>
      <div id="cartItems">Кошик порожній</div>
      <div id="cartTotal">Загальна сума: 0 ₴</div>
      <button class="buy-btn" onclick="checkout()">Оформити замовлення</button>
    </div>
  </div>

  <!-- Модальні вікна -->
  <div class="product-modal" id="modal4090">
      <span class="close-modal" onclick="closeProductModal('modal4090')">&times;</span>
      <div class="product-modal-content">
  <span class="close-modal" onclick="closeProductModal()">&times;</span>

  <div class="product-modal-body">
    <!-- Картинка зліва -->
    <div class="product-modal-image">
      <img src="Photo/4090/4090-removebg-preview.png" alt="NVIDIA RTX 4090">
    </div>

    <!-- Інформація справа -->
    <div class="product-modal-info">
      <h2>NVIDIA RTX 4090</h2>
      <p>Найпотужніша відеокарта для геймінгу та роботи з 3D.</p>
      <h3>65 000 ₴</h3>
      <button class="buy-btn" onclick="addToCart('NVIDIA RTX 4090', 65000)">Купити</button>
    </div>
  </div>

  <div class="product-modal" id="modal4080">
    <div class="product-modal-content">
      <span class="close-modal" onclick="closeProductModal('modal4080')">&times;</span>
      <h2>NVIDIA RTX 4080</h2>
      <img src="Photo/4080/4080.jpg" alt="">
      <p>Потужна відеокарта для 4K ігор.</p>
      <h3>45 000 ₴</h3>
    </div>
  </div>

  <div class="product-modal" id="modal7900">
    <div class="product-modal-content">
      <span class="close-modal" onclick="closeProductModal('modal7900')">&times;</span>
      <h2>AMD RX 7900 XTX</h2>
      <img src="Photo/7900xtx/7900xtx.jpg" alt="">
      <p>Флагманська відеокарта від AMD.</p>
      <h3>42 000 ₴</h3>
    </div>
  </div>

  <div class="product-modal" id="modalArc">
    <div class="product-modal-content">
      <span class="close-modal" onclick="closeProductModal('modalArc')">&times;</span>
      <h2>Intel ARC A770</h2>
      <img src="Photo/arc/arc.jpg" alt="">
      <p>Перша потужна відеокарта від Intel для геймінгу.</p>
      <h3>25 000 ₴</h3>
    </div>
  </div>
<> 
  <script src="script.js">
        let cart = [];

    function addToCart(name, price) {
      const item = cart.find(p => p.name === name);
      if (item) {
        item.qty++;
      } else {
        cart.push({ name, price, qty: 1 });
      }
      updateCart();
    }

    function updateCart() {
      const cartCount = document.getElementById('cartCount');
      const cartItems = document.getElementById('cartItems');
      const cartTotal = document.getElementById('cartTotal');

      let totalQty = 0;
      let totalPrice = 0;
      cartItems.innerHTML = '';

      cart.forEach(item => {
        totalQty += item.qty;
        totalPrice += item.qty * item.price;
        cartItems.innerHTML += `
          <div class="cart-item">
            ${item.name} × ${item.qty} <strong>${item.price * item.qty} ₴</strong>
          </div>
        `;
      });

      if (cart.length === 0) cartItems.innerHTML = 'Кошик порожній';

      cartCount.textContent = totalQty;
      cartTotal.textContent = `Загальна сума: ${totalPrice} ₴`;
    }

    function toggleCart() {
      const modal = document.getElementById('cartModal');
      modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
    }

    function checkout() {
      if (cart.length === 0) {
        alert('Кошик порожній!');
        return;
      }
      alert('Дякуємо за покупку!');
      cart = [];
      updateCart();
      toggleCart();
    }

    // 🔄 Перемикання теми
    const themeToggle = document.getElementById('themeToggle');
    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);



function filterProducts(brand) {
  let products = document.querySelectorAll('.product-card');

  products.forEach(product => {
    if (brand === 'all' || product.dataset.brand === brand) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

function filterProducts(brand) {
  let products = document.querySelectorAll('.product-card');
  let buttons = document.querySelectorAll('.filter-buttons button');

  // показуємо тільки потрібні продукти
  products.forEach(product => {
    if (brand === 'all' || product.dataset.brand === brand) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });

  // прибираємо активний клас у всіх кнопок
  buttons.forEach(btn => btn.classList.remove('active'));

  // додаємо активний клас тій кнопці, яку натиснули
  event.target.classList.add('active');
}

    function showProductInfo(name, price, image, description) {
      document.getElementById('modalProductName').innerText = name;
      document.getElementById('modalProductPrice').innerText = price;
      document.getElementById('modalProductImage').src = image;
      document.getElementById('modalProductDescription').innerText = description;
      document.getElementById('productModal').style.display = "block";
    }

    function closeProductModal() {
      document.getElementById('productModal').style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == document.getElementById('productModal')) {
        closeProductModal();
      }
    }

    document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

function showProductInfo(productId) {
  // ховаємо всі блоки з товарами в модалці
  document.querySelectorAll('.product-info').forEach(el => el.style.display = 'none');

  // показуємо потрібний
  document.getElementById(productId).style.display = 'block';

  // відкриваємо модалку
  document.getElementById("productModal").style.display = "flex";
}

function closeProductModal() {
  document.getElementById("productModal").style.display = "none";
}
 function showProductInfo(id) {
  document.getElementById(id).style.display = "block";
}

function closeProductModal(id) {
  document.getElementById(id).style.display = "none";
}

// Закриття при кліку поза вікном
window.onclick = function(event) {
  const modals = document.getElementsByClassName("product-modal");
  for (let modal of modals) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
};
  </script>
</body>
</html>
