// Массив с товарами (замените этот массив на свой собственный)
let electronicProducts = [
    {
        name: "iphone 15"
        price: 499.99,
        description: "Популярный смартфон с отличным экраном и камерой.",
        imageUrl: "https://clck.ru/35qdaX"
    },
    {
        name: "Ноутбук ASUS ROG Zephyrus G14 GA402"
        price: 154.000
        description: "Мощный ноутбук с быстрым процессором и большим объемом памяти.",
        imageUrl: "https://clck.ru/35qdcY"
    }
];
function displayProducts() {
    let productsContainer = document.getElementById("products");

    for (let i = 0; i < electronicProducts.length; i++) {
        let productItem = document.createElement("div");
        productItem.classList.add("product-item");

        let productImage = document.createElement("img");
        productImage.src = electronicProducts[i].imageUrl;
        productImage.alt = electronicProducts[i].name;

        let productName = document.createElement("h3");
        productName.textContent = electronicProducts[i].name;

        let productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = "$" + electronicProducts[i].price.toFixed(2);

        let productDescription = document.createElement("p");
        productDescription.textContent = electronicProducts[i].description;

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(productDescription);

        productsContainer.appendChild(productItem);
    }
}
let news= [
    {
        title: "Новость 1",
        date: "2023-09-25",
        content: "События новости 1..."
    },
    {
        title: "Новость 2",
        date: "2023-09-24",
        content: "События новости 2..."
    },

];

function displayNews() {
    let newsList = document.getElementById("news-list");

    for (let i = 0; i < newsData.length; i++) {
        let newsItem = document.createElement("div");
        newsItem.classList.add("news-item");

        let newsTitle = document.createElement("div");
        newsTitle.classList.add("news-title");
        newsTitle.textContent = newsData[i].title;

        let newsDate = document.createElement("div");
        newsDate.classList.add("news-date");
        newsDate.textContent = formatDate(newsData[i].date);

        let newsContent = document.createElement("div");
        newsContent.classList.add("news-content");
        newsContent.textContent = newsData[i].content;

        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsDate);
        newsItem.appendChild(newsContent);

        newsList.appendChild(newsItem);
    }
}

function formatDate(dateString) {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
}


displayNews();

