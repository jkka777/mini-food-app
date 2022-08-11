
import navbar from "../components/navbar.js";

let catchElements = (val) => {
    return document.querySelector(val);
};

catchElements('.navbar').innerHTML = navbar();

let login_status = false;
localStorage.setItem('LoginStatus', JSON.stringify(login_status));

/*
{
    "name": "john rambo",
    "email": "rambo@fox.com",
    "password": "1234",
    "username": "john_rambo",
    "mobile": "9876543210",
    "description": "veteran"
}

{
    "error": false,
    "token": "c4060570c98e158d05f9abbd8f43bbb6"
}
*/

class LoginCred {
    constructor(u, p) {
        this.username = u;
        this.password = p;
    }
}

let UserLogin = async () => {

    let username = catchElements('#user_name').value;
    let password = catchElements('#userpassword').value;

    let login_data = new LoginCred(username, password);

    login_data = JSON.stringify(login_data);

    let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/login',
        {
            method: 'POST',
            body: login_data,
            headers:
            {
                'Content-Type': 'application/json'
            }
        }
    );

    let data = await res.json();
    console.log(data);
    catchElements('#user_name').value = '';
    catchElements('#userpassword').value = '';

    login_status = true;
    localStorage.setItem('LoginStatus', JSON.stringify(login_status));

};

catchElements('.container').addEventListener('click', UserLogin);

let LogOut = () => {

    let login_status = false;
    localStorage.setItem('LoginStatus', JSON.stringify(login_status));
    window.location.href = './login.html';

};

catchElements('.navbar>button').addEventListener('click', LogOut);