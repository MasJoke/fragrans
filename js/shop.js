document.addEventListener('DOMContentLoaded', () => {
    const content = `
        <div class="products">
            <div class="product" id="product1">
                <img src="https://via.placeholder.com/150" alt="Product 1">
                <h2>Product 1</h2>
                <p>$10.00</p>
                <button onclick="addToCart('Product 1', 10.00)">Add to Cart</button>
            </div>
            <div class="product" id="product2">
                <img src="https://via.placeholder.com/150" alt="Product 2">
                <h2>Product 2</h2>
                <p>$20.00</p>
                <button onclick="addToCart('Product 2', 20.00)">Add to Cart</button>
            </div>
            <div class="product" id="product3">
                <img src="https://via.placeholder.com/150" alt="Product 3">
                <h2>Product 3</h2>
                <p>$15.00</p>
                <button onclick="addToCart('Product 3', 15.00)">Add to Cart</button>
            </div>
        </div>
    `;
    document.getElementById('content').innerHTML = content;
});
