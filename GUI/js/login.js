export function goToCustomPath(path) {
   var baseUrl = window.location.protocol + "//" + window.location.host;
   var customUrl = baseUrl + path;
   window.location.href = customUrl;
}

let isLoginForm = true;


export function changeForm() {
  const formContainer = document.getElementById("formContainer");

  if (isLoginForm) {
    formContainer.innerHTML = generateRegisterPanel();
  } else {
    formContainer.innerHTML = generateLoginPanel();
  }
  isLoginForm = !isLoginForm;
}


// Deklaracja zmiennej przed użyciem
export default function generateLogin() {
  // Funkcja zmieniająca formularz
  function changeForm(event) {
    const formContainer = document.getElementById("formContainer");
    isLoginForm = !isLoginForm;

    // Sprawdź warunek przed użyciem zmiennej formContainer
    if (isLoginForm) {
      formContainer.innerHTML = aaa();
    } else {
      formContainer.innerHTML = bbb();
    }
  }

  function aaa() {
    alert("rr");
    return (
      <button onMouseOver={this.changeForm}>MASZ KONTO SIĘ DO RAJ ROŚLIN?</button>
    );
  }

  function bbb() {
    return (
 <button onMouseOver={this.changeForm}>
        ZAREJESTRUJ SIĘ DO RAJ ROŚLIN
      </button>
    );
 }

  return (
    <div>
      <button onClick={() => changeForm()}>MASZ KONTO SIĘ DO RAJ ROŚLIN?</button>
    </div>
  );
}


export function generateLoginPanel() {
  return `
    <div class="login-panel" id="loginPanel">
      <div class="social-login">
        <p>Lub zaloguj się za pomocą:</p>
        <ul>
          <li>
            <a href="#" class="facebook-login">
              Kontynuuj z Facebook
            </a>
          </li>
          <li>
            <a href="#" class="apple-login">
              Kontynuuj z Apple
            </a>
          </li>
          <li>
            <a href="#" class="google-login black-text">
              Kontynuuj z Google
            </a>
          </li>
        </ul>
      </div>
      <h2>Zaloguj się</h2>
      <form class="login-form" method="post" role="form" onSubmit={login(e)}>
        <div class="form-group mb-3">
          <label class="control-label">Email</label>
          <input type="text" id="email" name="email" class="form-control" placeholder="Enter email address" />
        </div>
        <div class="form-group mb-3">
          <label class="control-label">Password</label>
          <input type="password" id="password" name="password" class="form-control" placeholder="Enter password" />
        </div>
        <div class="form-group mb-3">
          <button type="submit" class="btn btn-primary" onClick={login(e)}>Submit </button>
        </div>
      </form>s
      <br/>
      <button class="lol" type="submit" onClick={() => changeForm()}>ZAREJESTRUJ SIĘ DO RAJ ROŚLIN</button>
    </div>
  `;
}


export function generateRegisterPanel() {
  return `
    <div class="login-panel" id="registerPanel" style={{ display: 'none' }}>
      <div class="social-login">
        <p>Lub zaloguj się za pomocą:</p>
        <ul>
          <li>
            <a href="#" class="facebook-login">
              Kontynuuj z Facebook
            </a>
          </li>
          <li>
            <a href="#" class="apple-login">
              Kontynuuj z Apple
            </a>
          </li>
          <li>
            <a href="#" class="google-login black-text">
              Kontynuuj z Google
            </a>
          </li>
        </ul>
      </div>
      <h2>Załóż konto </h2>
      <form method="post" role="form" action="/login/save" class="login-form">
        <div class="form-group mb-3">
          <label class="form-label">First Name</label>
          <input class="form-control" id="firstName" name="firstName" placeholder="Enter first name" type="text"/>
        </div>
        <div class="form-group mb-3">
          <label class="form-label">Last Name</label>
          <input class="form-control" id="lastName" name="lastName" placeholder="Enter last name" type="text"/>
        </div>
        <div class="form-group mb-3">
          <label class="form-label">Email</label>
          <input class="form-control" id="email1" name="email1" placeholder="Enter email address" type="email"/>
        </div>
        <div class="form-group mb-3">
          <label class="form-label">Password</label>
          <input class="form-control" id="password1" name="password1" placeholder="Enter password" type="password"/>
        </div>
        <div class="form-group mb-3">
          <button type="submit" class="btn btn-primary" onClick={() => register()}>Register </button>
        </div>
      </form>
      <br/>
      <button class="lol" type="submit" onClick={() => changeForm()} >MASZ KONTO SIĘ DO RAJ ROŚLIN?</button>
    </div>
  `;
}







export function login(event) {
    event.preventDefault(); // Zatrzymaj domyślne zachowanie formularza

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
        // Wyłap token z odpowiedzi i zapisz go do localStorage
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
    event.preventDefault(); // Zatrzymaj domyślne zachowanie formularza

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

		
		