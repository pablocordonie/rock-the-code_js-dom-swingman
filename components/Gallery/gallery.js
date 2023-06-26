
const productTemplate = (product) => `
    <li class="rtc--swingman-item">
        <a href="${product.link}" class="rtc--swingman-card">
            <img src="${product.image}" alt="${product.name}" class="rtc--swingman-card-img">
            <h3 class="rtc--swingman-card-h3">${product.name}</h3>
            <p>${product.price} €</p>
        </a>
    </li>
    `;

const createGallery = (products) => {

    const productsList = document.createElement('ul');
    productsList.classList.add('rtc--swingman-gallery');

    for (const product of products) {
        productsList.innerHTML += productTemplate(product);
    }

    const productsGallery = document.createElement('section');
    productsGallery.classList.add('rtc--swingman-products');
    productsGallery.appendChild(productsList);

    const main = document.querySelector('main');

    main.appendChild(productsGallery);
    return main;

};

export const initGallery = (products) => {

    const main = document.querySelector('main');

    main.innerHTML = '';

    if (products.length === 0) {
        const h2 = document.createElement('h2');
        h2.textContent = 'No se han encontrado los artículos que deseabas';
        h2.className = 'rtc--swingman-products_notfound';
        main.appendChild(h2);
    } else {
        createGallery(products);
    }
};