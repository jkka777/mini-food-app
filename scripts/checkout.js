
import navbar from "../components/navbar.js";

let catchElements = (val) => {
    return document.querySelector(val);
};

let createElem = (val) => {
    return document.createElement(val);
};

catchElements('.navbar').innerHTML = navbar();

let login_status = JSON.parse(localStorage.getItem('LoginStatus'));

let saved_items = JSON.parse(localStorage.getItem('cart_items'));

let CheckOut = () => {

    let data =
    {
        name: catchElements('#name').value,
        house_number: catchElements('#house-number').value,
        block: catchElements('#block').value,
        city: catchElements('#city').value

    };

    if (login_status === false) {

        alert('Please Login before proceeding to check!');

        window.location.href = './login.html';
    }
    else if (saved_items.length === 0) {

        alert('Your cart is empty!');

    }
    else {
        alert('Your food is ready and will be delivered in no time!');
    }

    catchElements('#name').value = '';
    catchElements('#house-number').value = '';
    catchElements('#block').value = '';
    catchElements('#city').value = '';

    console.log(data);
}

catchElements('.submit').addEventListener('click', CheckOut);

let LogOut = () => {

    let login_status = false;
    localStorage.setItem('LoginStatus', JSON.stringify(login_status));
    window.location.href = './login.html';

};

catchElements('.navbar>button').addEventListener('click', LogOut);