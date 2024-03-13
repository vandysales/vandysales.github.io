document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: "Product 1", price: "$19.99" },
        { name: "Product 2", price: "$29.99" },
        { name: "Product 3", price: "$39.99" }
    ];

    const productList = document.getElementById('productList');

    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.price}`;
        productList.appendChild(li);
    });
});
