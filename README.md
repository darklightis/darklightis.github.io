<html lang="uk">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GPU Store - Магазин відеокарт</title>
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
    * {
      box-sizing: border-box;
    }
    body, header, footer, .product-card, .cart-content, .product-modal-content {
      transition: background 0.4s ease, color 0.4s ease;
    }
    body {
      margin: 0;
      padding: 0;
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
      width: 100%;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
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
      width: 100%;
      margin: 0;
    }
    .products {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
      width: 100%;
    }
    .section-title {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      width: 100%;
    }
    .product-card {
      background: var(--card-bg);
      border-radius: 10px;
      overflow: hidden;
      text-align: center;
      padding: 1rem;
      box-shadow: 0 6px 12px rgba(0,0,0,0.2);
      cursor: pointer;
      transition: transform 0.3s ease;
      width: 100%;
    }
    .product-card:hover {
      transform: translateY(-5px);
    }
    .product-card img {
      width: 100%;
      height: 200px;
      object-fit: contain;
      display: block;
      margin: 0 auto;
      border-radius: 6px;
    }
    .product-name {
      margin: 1rem 0 0.5rem;
      font-weight: bold;
      font-size: 1.1rem;
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
      width: 100%;
      max-width: 150px;
    }
    .buy-btn:hover {
      transform: translateY(-2px);
    }
    footer {
      background: var(--card-bg);
      text-align: center;
      padding: 2rem 1rem;
      margin-top: 3rem;
      width: 100%;
    }
    .filter-buttons {
      text-align: center;
      margin: 2rem 0;
      padding: 0 1rem;
    }
    .filter-buttons button {
      background: #000;
      color: #fff;
      border: none;
      border-radius: 20px;
      padding: 10px 20px;
      margin: 5px;
      cursor: pointer;
      transition: 0.3s;
      font-size: 0.9rem;
    }
    .filter-buttons button:hover {
      background: #333;
    }
    .filter-buttons button.active {
      background: var(--accent);
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
      padding: 1rem;
    }
    .cart-content {
      position: relative;
      background: var(--card-bg);
      color: var(--text);
      padding: 1.5rem;
      border-radius: 10px;
      width: 100%;
      max-width: 400px;
      text-align: center;
      max-height: 90vh;
      overflow-y: auto;
    }
    .cart-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      padding: 10px;
      background: var(--bg);
      border-radius: 8px;
      color: var(--text);
      flex-wrap: wrap;
    }
    .cart-item-info {
      flex: 1;
      text-align: left;
      min-width: 150px;
    }
    .cart-item-name {
      font-weight: bold;
      margin-bottom: 5px;
      font-size: 0.9rem;
    }
    .cart-item-price {
      font-size: 0.8rem;
      color: var(--accent);
    }
    .cart-item-controls {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .cart-btn {
      width: 30px;
      height: 30px;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    .cart-btn.decrease, .cart-btn.increase {
      background: var(--accent);
      color: white;
    }
    .cart-btn.decrease:hover, .cart-btn.increase:hover {
      background: #0099cc;
      transform: scale(1.1);
    }
    .cart-btn.remove {
      background: #ff4757;
      color: white;
    }
    .cart-btn.remove:hover {
      background: #ff3742;
      transform: scale(1.1);
    }
    .quantity {
      min-width: 20px;
      text-align: center;
      font-weight: bold;
      color: var(--text);
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
    /* Модальні вікна товарів */
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
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
    .product-modal-content {
      background: var(--card-bg);
      color: var(--text);
      margin: 0 auto;
      padding: 30px;
      border-radius: 15px;
      width: 100%;
      max-width: 800px;
      box-shadow: 0 8px 25px rgba(0,0,0,0.3);
      position: relative;
      max-height: 90vh;
      overflow-y: auto;
    }
    .close-modal {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 28px;
      font-weight: bold;
      color: var(--text);
      cursor: pointer;
      transition: color 0.2s ease;
      z-index: 10;
    }
    .close-modal:hover {
      color: red;
    }
    .product-modal-body {
      display: flex;
      align-items: flex-start;
      gap: 30px;
      margin-top: 20px;
    }
    .product-modal-image {
      flex: 0 0 300px;
    }
    .product-modal-image img {
      width: 100%;
      max-width: 300px;
      border-radius: 10px;
    }
    .product-modal-info {
      flex: 1;
      text-align: left;
    }
    .product-modal-info h2 {
      color: var(--accent);
      margin-bottom: 15px;
    }
    .product-modal-info p {
      margin: 8px 0;
      line-height: 1.5;
    }
    .product-modal-info h3 {
      color: var(--accent);
      font-size: 1.8rem;
      margin: 20px 0 15px 0;
    }
    /* Мобільні стилі */
    @media (max-width: 768px) {
      .hero {
        padding: 2rem 1rem;
      }
      .hero h1 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      .nav-menu {
        gap: 0.5rem;
      }
      .nav-menu a {
        font-size: 0.9rem;
      }
      .logo {
        font-size: 1.1rem;
      }
      .section-title {
        font-size: 1.5rem;
      }
      .product-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
      }
      .filter-buttons button {
        padding: 8px 15px;
        margin: 3px;
        font-size: 0.8rem;
      }
      .product-modal-content {
        width: 95%;
        margin: 0 auto;
        padding: 20px;
      }
      .product-modal-body {
        flex-direction: column;
        gap: 20px;
      }
      .product-modal-image {
        flex: none;
        text-align: center;
      }
      .product-modal-info {
        text-align: center;
      }
      .cart-item {
        flex-direction: column;
        gap: 10px;
        text-align: center;
      }
      .cart-item-info {
        text-align: center;
      }
    @media (max-width: 480px) {
      .nav-menu {
        flex-wrap: wrap;
        gap: 0.3rem;
      }
      .nav-menu a {
        font-size: 0.8rem;
      }
      .hero h1 {
        font-size: 1.3rem;
      }
      .hero p {
        font-size: 0.9rem;
      }
      .product-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      .filter-buttons {
        padding: 0 0.5rem;
      }
      .filter-buttons button {
        padding: 6px 12px;
        font-size: 0.75rem;
      }
      .product-modal-content {
        padding: 15px;
      }
      .cart-content {
        padding: 1rem;
      }
    #contact {
       display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      background: #f5f5f5;
    }
    .footer-info {
      text-align: left;
    }
    .footer-mascot img {
      max-width: 120px; /* можна змінити розмір */
      height: auto;
    }
      /* Футер */
#contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px; /* додав більше відступів для рівності з hero */
  background: var(--card-bg); /* той же фон, що й у header / карток */
  max-width: 1200px; /* вирівнювання з секціями */
  margin: 0 auto;
  border-radius: 10px 10px 0 0; /* акуратні закруглення */
}
.footer-info {
  text-align: left;
}
.footer-mascot {
  background: rgba(0, 0, 0, 0.05); /* фон контейнера */
  padding: 10px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-mascot img {
  max-width: 120px;
  height: auto;
  display: block;
}
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
    <button class="active" onclick="filterProducts('all')">Всі</button>
    <button onclick="filterProducts('nvidia')">NVIDIA</button>
    <button onclick="filterProducts('amd')">AMD</button>
    <button onclick="filterProducts('intel')">Intel</button>
  </div>
  
  <section class="products" id="products">
    <h2 class="section-title">Наші товари</h2>
    <div class="product-grid">
      <!-- NVIDIA RTX 4090 -->
      <div class="product-card" data-brand="nvidia" onclick="showProductInfo('modal4090')">
        <img src="Photo/4090-removebg-preview.png" alt="NVIDIA RTX 4090">
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
  <div class="footer-info">
    <p>📞 +380 (XX) XXX-XX-XX</p>
    <p>📧 info@gpustore.ua</p>
    <p>📍 м. Київ, вул. Технологічна, 1</p>
    <p>&copy; 2025 GPU Store. Усі права захищені.</p>
    <p>Маскот:</p>
  </div>

  <div class="footer-mascot">
    <img src="Photo/Maskot.webp" alt="Маскот">
  </div>
</footer>

  
  <!-- Кошик -->
  <div class="cart-modal" id="cartModal">
    <div class="cart-content">
      <span class="close-cart" onclick="toggleCart()">&times;</span>
      <h2>Кошик</h2>
      <div id="cartItems">Кошик порожній</div>
      <div id="cartTotal">Загальна сума: 0 ₴</div>
      <button class="buy-btn" onclick="checkout()">Оформити замовлення</button>
    </div>
  </div>
  
  <!-- Модальні вікна товарів -->
  <div class="product-modal" id="modal4090">
    <div class="product-modal-content">
      <span class="close-modal" onclick="closeProductModal('modal4090')">&times;</span>
      <div class="product-modal-body">
        <div class="product-modal-image">
          <img src="Photo/4090-removebg-preview.png" alt="NVIDIA RTX 4090">
        </div>
        <div class="product-modal-info">
          <h2>NVIDIA RTX 4090</h2>
          <p><strong>Найпотужніша відеокарта для геймінгу та роботи з 3D.</strong></p>
          <p><strong>Графічний чип:</strong> GeForce RTX 4090</p>
          <p><strong>Обсяг пам'яті:</strong> 24 ГБ</p>
          <p><strong>Система охолодження:</strong> активна</p>
          <p><strong>Максимальна роздільна здатність:</strong> 7680x4320</p>
          <p><strong>Тип пам'яті:</strong> GDDR6X</p>
          <p><strong>Розміри:</strong> 357,6 x 149,3 x 70,1 мм</p>
          <p><strong>Додаткове живлення:</strong> 16 pin</p>
          <h3>65 000 ₴</h3>
          <button class="buy-btn" onclick="addToCart('NVIDIA RTX 4090', 65000); closeProductModal('modal4090')">Купити</button>
        </div>
      </div>
    </div>
  </div>
  
  <div class="product-modal" id="modal4080">
    <div class="product-modal-content">
      <span class="close-modal" onclick="closeProductModal('modal4080')">&times;</span>
      <div class="product-modal-body">
        <div class="product-modal-image">
          <img src="Photo/4080/4080.jpg" alt="NVIDIA RTX 4080">
        </div>
        <div class="product-modal-info">
          <h2>NVIDIA RTX 4080</h2>
          <p><strong>Потужна відеокарта для 4K ігор.</strong></p>
          <p><strong>Графічний чип:</strong> GeForce RTX 4080</p>
          <p><strong>Обсяг пам'яті:</strong> 16 ГБ</p>
          <p><strong>Система охолодження:</strong> активна</p>
          <p><strong>Тип пам'яті:</strong> GDDR6X</p>
          <p><strong>Рекомендовано для:</strong> 1440p/4K Gaming</p>
          <h3>45 000 ₴</h3>
          <button class="buy-btn" onclick="addToCart('NVIDIA RTX 4080', 45000); closeProductModal('modal4080')">Купити</button>
        </div>
      </div>
    </div>
  </div>
  
  <div class="product-modal" id="modal7900">
    <div class="product-modal-content">
      <span class="close-modal" onclick="closeProductModal('modal7900')">&times;</span>
      <div class="product-modal-body">
        <div class="product-modal-image">
          <img src="Photo/7900xtx/7900xtx.jpg" alt="AMD RX 7900 XTX">
        </div>
        <div class="product-modal-info">
          <h2>AMD RX 7900 XTX</h2>
          <p><strong>Флагманська відеокарта від AMD.</strong></p>
          <p><strong>Графічний чип:</strong> AMD Radeon RX 7900 XTX</p>
          <p><strong>Обсяг пам'яті:</strong> 24 ГБ</p>
          <p><strong>Архітектура:</strong> RDNA 3</p>
          <p><strong>Тип пам'яті:</strong> GDDR6</p>
          <p><strong>Рекомендовано для:</strong> 4K Gaming, Ray Tracing</p>
          <h3>42 000 ₴</h3>
          <button class="buy-btn" onclick="addToCart('AMD RX 7900 XTX', 42000); closeProductModal('modal7900')">Купити</button>
        </div>
      </div>
    </div>
  </div>
  
  <div class="product-modal" id="modalArc">
    <div class="product-modal-content">
      <span class="close-modal" onclick="closeProductModal('modalArc')">&times;</span>
      <div class="product-modal-body">
        <div class="product-modal-image">
          <img src="Photo/arc/arc.jpg" alt="Intel ARC A770">
        </div>
        <div class="product-modal-info">
          <h2>Intel ARC A770</h2>
          <p><strong>Перша потужна відеокарта від Intel для геймінгу.</strong></p>
          <p><strong>Графічний чип:</strong> Intel Arc A770</p>
          <p><strong>Обсяг пам'яті:</strong> 16 ГБ</p>
          <p><strong>Архітектура:</strong> Xe HPG</p>
          <p><strong>Тип пам'яті:</strong> GDDR6</p>
          <p><strong>Рекомендовано для:</strong> 1080p/1440p Gaming, Ray Tracing</p>
          <h3>25 000 ₴</h3>
          <button class="buy-btn" onclick="addToCart('Intel ARC A770', 25000); closeProductModal('modalArc')">Купити</button>
        </div>
      </div>
    </div>
  </div>

  <script>
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
      
      cart.forEach((item, index) => {
        totalQty += item.qty;
        totalPrice += item.qty * item.price;
        cartItems.innerHTML += `
          <div class="cart-item">
            <div class="cart-item-info">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-price">${item.price.toLocaleString()} ₴ × ${item.qty} = ${(item.price * item.qty).toLocaleString()} ₴</div>
            </div>
            <div class="cart-item-controls">
              <button class="cart-btn decrease" onclick="changeQuantity(${index}, -1)">−</button>
              <span class="quantity">${item.qty}</span>
              <button class="cart-btn increase" onclick="changeQuantity(${index}, 1)">+</button>
              <button class="cart-btn remove" onclick="removeFromCart(${index})">&times;</button>
            </div>
          </div>
        `;
      });
      
      if (cart.length === 0) cartItems.innerHTML = 'Кошик порожній';
      cartCount.textContent = totalQty;
      cartTotal.textContent = `Загальна сума: ${totalPrice.toLocaleString()} ₴`;
    }
    
    function changeQuantity(index, change) {
      cart[index].qty += change;
      if (cart[index].qty <= 0) {
        cart.splice(index, 1);
      }
      updateCart();
    }
    
    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCart();
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
    
    // Перемикання теми
    const themeToggle = document.getElementById('themeToggle');
    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
    const savedTheme = 'dark';
    setTheme(savedTheme);
    
    // Фільтрація продуктів
    function filterProducts(brand) {
      let products = document.querySelectorAll('.product-card');
      let buttons = document.querySelectorAll('.filter-buttons button');
      
      products.forEach(product => {
        if (brand === 'all' || product.dataset.brand === brand) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
      
      buttons.forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
    }
    
    // Модальні вікна товарів
    function showProductInfo(modalId) {
      document.getElementById(modalId).style.display = "flex";
    }
    
    function closeProductModal(modalId) {
      document.getElementById(modalId).style.display = "none";
    }
    
    // Закриття при кліку поза вікном
    window.onclick = function(event) {
      const modals = document.getElementsByClassName("product-modal");
      for (let modal of modals) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      }
      
      // Також для кошика
      const cartModal = document.getElementById('cartModal');
      if (event.target === cartModal) {
        cartModal.style.display = "none";
      }
    };
  </script>
</body>
</html>
