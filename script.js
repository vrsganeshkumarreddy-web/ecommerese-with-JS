let products = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

async function loadProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    products = await response.json();
    displayProducts(products);
}
loadProducts();

function displayProducts(productList) {
    const container =document.getElementById("productContainer");container.innerHTML = "";
    productList.forEach(product =>
    {
        container.innerHTML += `
        <div class="product">
            <img src=" ${product.image} ">
            <h3> ${product.title} </h3>
            <p> ₹${product.price} </p>
            <button onclick=" addToCart(${product.id}) "> Add to Cart </button>
        </div> `;
    });
}

document.getElementById("searchBox").addEventListener("input", function() {
    const keyword = this.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(keyword));
        displayProducts(filteredProducts);
    });