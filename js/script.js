let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price; // Tambah harga ke total
    updateCart();
    showPopup('Item added to cart!');
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalPrice = document.getElementById('cart-total');
    
    if (cartList && totalPrice) {
        cartList.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
            cartList.appendChild(li);
        });
        totalPrice.textContent = total.toFixed(2); // Memperbarui harga total dengan benar
    }
}

function loadSection(section) {
    fetch(`../html/${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            if (section === 'cart') updateCart(); // Memperbarui tampilan cart saat halaman dimuat
        })
        .catch(error => console.error('Error loading section:', error));
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.textContent = message;
    popup.classList.add('show');
    setTimeout(() => popup.classList.remove('show'), 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    loadSection('home');
});
