
let books = [
    {id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 300},
    {id: 2, title: "1984", author: "George Orwell", price: 250},
    {id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", price: 280}
];

function loadBooks() {
    const container = document.getElementById("book-list");
    container.innerHTML = "";
    books.forEach(book => {
        container.innerHTML += \`
            <div class="book">
                <h3>\${book.title}</h3>
                <p>Author: \${book.author}</p>
                <p>Price: ₹\${book.price}</p>
                <button onclick="addToCart(\${book.id})">Add to Cart</button>
            </div>
        \`;
    });
}

function searchBooks() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filtered = books.filter(book => book.title.toLowerCase().includes(searchValue) || book.author.toLowerCase().includes(searchValue));
    const container = document.getElementById("book-list");
    container.innerHTML = "";
    filtered.forEach(book => {
        container.innerHTML += \`
            <div class="book">
                <h3>\${book.title}</h3>
                <p>Author: \${book.author}</p>
                <p>Price: ₹\${book.price}</p>
                <button onclick="addToCart(\${book.id})">Add to Cart</button>
            </div>
        \`;
    });
}

function addToCart(bookId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const book = books.find(b => b.id === bookId);
    cart.push(book);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(book.title + " added to cart!");
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cart-items");
    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }
    container.innerHTML = "";
    cart.forEach(item => {
        container.innerHTML += \`
            <div class="cart-item">
                <h4>\${item.title}</h4>
                <p>Author: \${item.author}</p>
                <p>Price: ₹\${item.price}</p>
            </div>
        \`;
    });
}
