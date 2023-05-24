import swingmanProducts from '../../data/data.js';

const createProducts = (product) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    //Completamos la información de los productos
    li.classList.add('swingman-item');
    a.href = product.link;
    a.classList.add('swingman-card');
    img.classList.add('swingman-card-img');
    img.src = `${product.image}`;
    img.alt = product.name;
    li.appendChild(a);
    a.appendChild(img);


    h3.innerText = product.name;
    h3.classList.add('swingman-card-h3');
    a.appendChild(h3);

    p.textContent = `${product.price} €`;
    a.appendChild(p);

    return li;
};

export const galleryTemplate = () => {

    //Creamos la lista
    const ul = document.createElement('ul');
    ul.classList.add('swingman-gallery');

    const h2 = document.createElement('h2');
    h2.classList.add('swingman-gallery-h2');
    h2.textContent = 'The Official Swingman Shirts';
    ul.appendChild(h2);

    //Almacenamos los productos;
    for (const product of swingmanProducts) {
        ul.appendChild(createProducts(product));
    }

    const main = document.querySelector('main');
    main.appendChild(ul);
    return main;

};