let cart = [];
let total = 0;
function addToCart(product, price) {

    cart.push({
        name: product,
        price: price
    });

    total += price;

    updateCart();
}
function updateCart() {

    let cartItems = document.getElementById("cart-items");
    let cartCount = document.getElementById("cart-count");
    let totalPrice = document.getElementById("total-price");

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})">❌</button>
        `;

        cartItems.appendChild(li);

    });

    cartCount.innerHTML = cart.length;
    totalPrice.innerHTML = total;
}
function removeItem(index) {

    total -= cart[index].price;

    cart.splice(index, 1);

    updateCart();

}
function checkout() {

    if (cart.length === 0) {

        alert("🛒 Your cart is empty!");

        return;

    }

    alert("✅ Order Placed Successfully!\n\nThank you for shopping with us.");

    cart = [];
    total = 0;

    updateCart();

}

function searchProducts() {

    let input = document
        .getElementById("search")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        let productName = card
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (productName.includes(input)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}

function filterProducts(category) {

    let cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        if (
            category === "All" ||
            card.dataset.category === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}

window.onload = function () {

    console.log("🛒 Local Store E-Commerce Loaded Successfully");

};
