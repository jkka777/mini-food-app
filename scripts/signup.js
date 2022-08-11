
import navbar from "../components/navbar.js";

let catchElements = (val) => {
    return document.querySelector(val);
};

catchElements('.navbar').innerHTML = navbar();

/*
{
    "name": "john rambo",
    "email": "rambo@fox.com",
    "password": "1234",
    "username": "john_rambo",
    "mobile": "9876543210",
    "description": "veteran"
}
*/


class RegisterUser {
    constructor(n, e, p, u, m, d) {
        this.name = n;
        this.email = e;
        this.password = p;
        this.username = u;
        this.mobile = m;
        this.description = d;
    }
}

let registerUser = async () => {

    let name = catchElements('#username').value;
    let email = catchElements('#usermail').value;
    let password = catchElements('#userpassword').value;
    let username = catchElements('#user_name').value;
    let mobile = catchElements('#usermobile').value;
    let description = catchElements('#userdescription').value;

    let user_data = new RegisterUser(name, email, password, username, mobile, description);

    console.log(user_data);

    user_data = JSON.stringify(user_data);

    let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/register',
        {
            method: 'POST',
            body: user_data,
            headers:
            {
                'Content-Type': 'application/json'
            },
        }
    );

    let data = await res.json();
    console.log(data);

    catchElements('#username').value = '';
    catchElements('#usermail').value = '';
    catchElements('#userpassword').value = '';
    catchElements('#user_name').value = '';
    catchElements('#usermobile').value = '';
    catchElements('#userdescription').value = '';

};

catchElements('.submit').addEventListener('click', registerUser);