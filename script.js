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
