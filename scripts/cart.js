
import navbar from "../components/navbar.js";

let catchElements = (val) => {
    return document.querySelector(val);
};

let createElem = (val) => {
    return document.createElement(val);
};

catchElements('.navbar').innerHTML = navbar();

let saved_items = JSON.parse(localStorage.getItem('cart_items'));

window.addEventListener('load', () => {

    RemoveFromCart();

});

let cont = catchElements('.container');

let displayCartItems = (data) => {

    cont.innerHTML = '';

    data.forEach((e) => {

        let div = createElem('div');

        let img = createElem('img');
        img.src = e.image;

        let name = createElem('h4');
        name.textContent = e.food;

        let price = createElem('p');
        price.textContent = `₹${e.price}`;

        let btn = createElem('button');
        btn.textContent = 'Remove';

        btn.addEventListener('click', () => {
            RemoveFromCart(e);
        });

        div.append(img, name, price, btn);

        cont.append(div);
    });

};

let RemoveFromCart = (e) => {

    saved_items = saved_items.filter((elem) => {
        return elem !== e;
    });

    localStorage.setItem('cart_items', JSON.stringify(saved_items));

    console.log(saved_items);

    displayCartItems(saved_items);

};

let LogOut = () => {

    let login_status = false;
    localStorage.setItem('LoginStatus', JSON.stringify(login_status));
    window.location.href = './login.html';

};

catchElements('.navbar>button').addEventListener('click', LogOut);