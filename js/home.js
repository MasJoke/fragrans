document.addEventListener('DOMContentLoaded', () => {
    const content = `
        <div class="banner">
            <h2>Welcome to Fragrans</h2>
            <p>Your one-stop online store for all your needs. Explore our wide range of products and enjoy a seamless shopping experience.</p>
        </div>
        <div class="showcase">
            <h2>Featured Products</h2>
            <div class="category">
                <h3>Best Sellers</h3>
                <div class="products-grid">
                    <div class="product">
                        <img src="https://via.placeholder.com/150" alt="Product 1">
                        <h4>Product 1</h4>
                        <p>$10.00</p>
                        <button onclick="addToCart('Product 1', 10.00)">Add to Cart</button>
                    </div>
                    <div class="product">
                        <img src="https://via.placeholder.com/150" alt="Product 2">
                        <h4>Product 2</h4>
                        <p>$20.00</p>
                        <button onclick="addToCart('Product 2', 20.00)">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('content').innerHTML = content;
});
