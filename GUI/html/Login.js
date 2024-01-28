// src/components/AboutHTML.js
import React, { useState } from 'react';
import '../css/login.css';
import wozekImage from '../img/wozek.png'; 
import AukcjeDomowe from '../img/AukcjeDomowe.png'; 
import dama from '../img/dama.png'; 
import fotel from '../img/fotel.png'; 

import { changeForm } from '../js/login';
import { login } from '../js/login';
import { register } from '../js/login';
import { goToCustomPath } from '../js/login';

import { generateRegisterPanel } from '../js/login';
import { generateloginrPanel }from '../js/login';


const LoginHTML = () => {

  const [isFirstPanelVisible, setIsFirstPanelVisible] = useState(true);

  const handleButtonClick = () => {
    setIsFirstPanelVisible((prevValue) => !prevValue);
  };

return (
<html xmlns="http://www.w3.org/1999/xhtml">
<head charset="UTF-8">
  <meta charset="UTF-8"/>
  <title>Title</title>
  <link rel="stylesheet" href="../css/login.css"/>
  <script src="../js/login.js" defer></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body id="home">
<header class="header">
    <div class="leftt">
        <a onClick={() => goToCustomPath('/login')}>Zaloguj się!</a>
    </div>
    <div class="RAJ container">
			<a href="/"> <img src={AukcjeDomowe} alt="Aukcje Domowe" width="300" height="100" /></a>
        <nav>
            <ul class="menu">
                <li><a class="menubutton" onClick={() =>goToCustomPath('/category?category=Ubrania')} >Ubrania</a></li>
                <li><a class="menubutton" onClick={() =>goToCustomPath('/category?category=Meble')} >Meble</a></li>
                <li><a class="menubutton" onClick={() =>goToCustomPath('/category?category=Akcesoria')} >Akcesoria</a></li>
                <li><a class="menubutton" onClick={() =>goToCustomPath('/category?category=Biżuteria')} >Biżuteria</a></li>
                <li><a class="menubutton" onClick={() =>goToCustomPath('/')} >O nas</a></li>
            </ul>
        </nav>
    </div>
    <div class="log">
        <a href="/basket"> <img src={wozekImage} alt="buttonpng" width="15" height="15" /></a>
        <a onClick={() =>goToCustomPath("/basket")}>0,00zł</a>
    </div>
</header>
<br/>
<br/>
<div class="centr">

    <div>

      {isFirstPanelVisible ? (
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
      <form class="login-form" onSubmit={(e) => login(e)}>
        <div class="form-group mb-3">
          <label class="control-label">Email</label>
          <input type="text" id="email" name="email" class="form-control" placeholder="Enter email address" />
        </div>
        <div class="form-group mb-3">
          <label class="control-label">Password</label>
          <input type="password" id="password" name="password" class="form-control" placeholder="Enter password" />
        </div>
        <div class="form-group mb-3">
          <button  class="btn btn-primary" >Submit </button>
        </div>
      </form>
      <br/>
      <button class="lol" type="submit" onClick={() => handleButtonClick()}>ZAREJESTRUJ SIĘ DO RAJ ROŚLIN</button>
    </div>
      ) : (
      <div class="login-panel" id="registerPanel" style={{ display: '' }}>
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
      <form method="post" role="form" class="login-form" onSubmit={(e) => register(e)}>
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
          <button type="submit" class="btn btn-primary" >Register </button>
        </div>
      </form>
      <br/>
      <button class="lol" type="submit" onClick={() => handleButtonClick()} >MASZ KONTO SIĘ DO RAJ ROŚLIN?</button>
    </div>
      )}
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
  </div>
  
<br/>
<br/>
<br/>
<br/>

</body>

<br/>
<br/>
<header class="header">
  <footer class="footer">
    <div class="card-footer">
      <ul>
        <li>
          <a onclick="goToCustomPath('/home')"> <img src={AukcjeDomowe} onclick="goToCustomPath('/home')" alt="Aukcje Domowe" width="250" height="100"/></a>
        </li>
        <li>
          <p>
            O nas <br/>
          </p>
        </li>
      </ul>
      <ul>
        <li class="title-list">Informacje</li>
        <li><a onclick="goToCustomPath('/category?category=Ubrania')">Ubrania</a></li>
        <li><a onclick="goToCustomPath('/category?category=Meble')">Meble</a></li>
        <li><a onclick="goToCustomPath('/category?category=Akcesoria')">Akcesoria</a></li>
        <li><a onclick="goToCustomPath('/category?category=Biżuteria)">Biżuteria</a></li>
      </ul>
      <ul>
        <li class="title-list">Moje Konto</li>
        <li><a onclick="goToCustomPath('/login')">Zaloguj</a></li>
        <li><a onclick="goToCustomPath('/login')">Założ konto</a></li>

      </ul>
      <ul class="shops">
        <li class="title-list ">Kontakt</li>
        <li>hello@aukcjedomowe.pl</li>
        <li>Ul.pokoju243  <br/>
          31-567 Kraków</li>
        <li>+48 22 567 88 76 39</li>
        <li>Odwiedź nas:</li>
      </ul>
    </div>

    <p class="by-name">
      &copy; Prawa autorskie 2023 Aukcje Domowe Wszelkie prawa zastrzeżone.
    </p>
  </footer>
</header>

</html>
);
}
export default LoginHTML;

