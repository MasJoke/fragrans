let cart = []; // Array untuk menyimpan barang
let total = 0; // Total harga barang di keranjang

// Fungsi untuk menambah barang ke keranjang
function addToCart(product, price) {
    const existingItem = cart.find(item => item.product === product);
    if (existingItem) {
        existingItem.quantity++; // Jika barang sudah ada, tambahkan jumlah
    } else {
        cart.push({ product, price, quantity: 1 }); // Tambahkan barang baru
    }
    updateCart();
    showPopup(`${product} added to cart!`);
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalPrice = document.getElementById('cart-total');

    if (cartList && totalPrice) {
        cartList.innerHTML = ''; // Kosongkan daftar sebelum merender ulang
        total = 0;

        cart.forEach((item, index) => {
            total += item.price * item.quantity; // Hitung total harga
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${item.product} - $${item.price.toFixed(2)} x ${item.quantity}</span>
                <input type="number" min="1" value="${item.quantity}" data-index="${index}" class="edit-quantity">
                <button class="remove-item" data-index="${index}">X</button>
            `;
            cartList.appendChild(li);
        });

        totalPrice.textContent = total.toFixed(2); // Perbarui total harga

        // Tambahkan event listener untuk input jumlah dan tombol hapus
        document.querySelectorAll('.edit-quantity').forEach(input => {
            input.addEventListener('change', updateItemQuantity);
        });
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }
}

// Fungsi untuk memperbarui jumlah barang
function updateItemQuantity(event) {
    const index = event.target.getAttribute('data-index');
    const newQuantity = parseInt(event.target.value, 10);

    if (newQuantity > 0) {
        cart[index].quantity = newQuantity;
    } else {
        cart.splice(index, 1); // Hapus barang jika jumlah diatur ke 0
    }
    updateCart();
}

// Fungsi untuk menghapus barang dari keranjang
function removeItem(event) {
    const index = event.target.getAttribute('data-index');
    cart.splice(index, 1); // Hapus item berdasarkan indeks
    updateCart();
}

// Fungsi untuk memuat bagian tertentu
function loadSection(section) {
    fetch(`../html/${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            if (section === 'cart') updateCart(); // Perbarui keranjang saat halaman dimuat
        })
        .catch(error => console.error('Error loading section:', error));
}

// Fungsi untuk menampilkan popup
function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.textContent = message;
    popup.classList.add('show');
    setTimeout(() => popup.classList.remove('show'), 2000);
}

// Fungsi untuk toggle menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    loadSection('home');
});
