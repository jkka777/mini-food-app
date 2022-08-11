
import navbar from "../components/navbar.js";

let catchElements = (val) => {
    return document.querySelector(val);
};

let createElem = (val) => {
    return document.createElement(val);
};

catchElements('.navbar').innerHTML = navbar();

let food_items = JSON.parse(localStorage.getItem('food')) || [];

window.addEventListener('load', () => {

    displayFood()
});

let cont = catchElements('.container');

let displayFood = () => {

    cont.innerHTML = '';

    food_items.forEach((e) => {

        let div = createElem('div');

        let img = createElem('img');
        img.src = e.image;

        let name = createElem('h4');
        name.textContent = e.food;

        let price = createElem('p');
        price.textContent = `₹${e.price}`;

        let btn = createElem('button');
        btn.textContent = 'Add to Cart';
        btn.addEventListener('click', () => {
            AddToCart(e);
        });

        div.append(img, name, price, btn);

        cont.append(div);
    });

    let AddToCart = (e) => {

        let saved_items = JSON.parse(localStorage.getItem('cart_items')) || [];
        saved_items.push(e);
        localStorage.setItem('cart_items', JSON.stringify(saved_items));
        console.log(saved_items);

        alert(`${e.food} added to cart!`)
    };

}



