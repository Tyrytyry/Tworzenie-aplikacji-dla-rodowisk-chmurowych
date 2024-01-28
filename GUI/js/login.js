export function goToCustomPath(path) {
   var baseUrl = window.location.protocol + "//" + window.location.host;
   var customUrl = baseUrl + path;
   window.location.href = customUrl;
}

let isLoginForm = true;

export function login(event) {
    event.preventDefault(); 

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var data = {
        email: email,
        password: password
    };

    fetch('http://localhost:8080/rest/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Login failed');
        }
    })
    .then(data => {
        const token = data.token;
        localStorage.setItem('token', token);

        alert('Zalogowano pomyślnie!');
        console.log(data);
    })
    .catch(error => {
        alert('Błąd logowania!');
        console.error('Error:', error);
    });
}



export function register(event) {
    event.preventDefault(); 

            alert('test');

    var email = document.getElementById('email1').value;
    var password = document.getElementById('password1').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    var data = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    };

    fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Registration failed');
        }
    })
    .then(data => {
        alert('Zarejestrowano pomyślnie!');
        console.log(data);
    })
    .catch(error => {
        alert('Błąd rejestracji!');
        console.error('Error:', error);
    });
}

		
		