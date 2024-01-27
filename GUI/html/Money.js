// src/components/AboutHTML.js
import React from 'react';
import '../css/basket.css';
import wozekImage from '../img/wozek.png'; 
import AukcjeDomowe from '../img/AukcjeDomowe.png'; 
import dama from '../img/dama.png'; 
import fotel from '../img/fotel.png'; 
import { submitPayment } from '../js/basket';
import { goToCustomPath } from '../js/basket';
const MoneyHTML = () => (

<html>
<head>
  <meta charset="UTF-8"/>
  <title>Title</title>
  <link rel="stylesheet" href="../css/basket.css"/>
  <script src="js/basket.js" defer></script>
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
                <li><a className="menubutton" onClick={() =>goToCustomPath('/category?category=Ubrania')} >Ubrania</a></li>
                <li><a className="menubutton" onClick={() =>goToCustomPath('/category?category=Meble')} >Meble</a></li>
                <li><a className="menubutton" onClick={() =>goToCustomPath('/category?category=Akcesoria')} >Akcesoria</a></li>
                <li><a className="menubutton" onClick={() =>goToCustomPath('/category?category=Biżuteria')} >Biżuteria</a></li>
                <li><a className="menubutton" onClick={() =>goToCustomPath('/')} >O nas</a></li>
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
<br/>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ backgroundColor: '#35A194', width: '200px', height: '10px', marginRight: '1cm', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ marginBottom: '0', fontSize: '10px' }}>Twój koszyk</p>
        <p style={{ marginTop: '0', fontSize: '10px' }}><br /></p>
    </div>
    <div style={{ backgroundColor: '#35A194', width: '200px', height: '10px', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ marginBottom: '0', fontSize: '10px' }}>Dostawa i płatność</p>
        <p style={{ marginTop: '0', fontSize: '10px' }}><br /></p>
    </div>
    <div style={{ backgroundColor: 'white', width: '200px', height: '10px', marginLeft: '1cm', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ marginBottom: '0', fontSize: '10px' }}>Gotowe</p>
        <p style={{ marginTop: '0', fontSize: '10px' }}><br /></p>
    </div>
</div>
<br/>
<br/>
<br/>

<div class="container">
  <div class="left">

<form id="paymentForm">
    <h3>Płatność kartą</h3>
	
	
	<label for="ID">ID: </label>
    <input type="text" name="ID" id="ID"/>
    <br/>
	
    <label for="ccNumber">Numer karty kredytowej: </label>
    <input type="text" name="ccNumber" id="ccNumber"/>
    <br/>

    <label for="ccExpiration">Data ważności: </label>
    <input type="text" name="ccExpiration" id="ccExpiration"/>
    <br/>

    <label for="ccCVV">Kod CVV: </label>
    <input type="text" name="ccCVV" id="ccCVV"/>
    <br/>

    <button type="button" onClick={() =>onclick=submitPayment()} >Płacę</button>

</form>

  </div>
  <div class="right">
    <h2>Podsumowanie </h2>
    <p>Wartość produktów: 100,00 zł</p>
    <p>Razem: 120,00 zł</p>
    <a href="/end" id="pay-button">Płacę</a>
  </div>
</div>

<br/>
<br/>
<br/>
<br/>

<br/>
<br/>
<header class="header">
  <footer class="footer">
    <div class="card-footer">
      <ul>
        <li>
          <a href="/"> <img src={AukcjeDomowe} alt="Aukcje Domowe" width="250" height="100"/></a>
        </li>
        <li>
          <p>
            O nas <br/>
          </p>
        </li>
      </ul>
      <ul>
					<li class="title-list">Informacje</li>
					<li><a class="menubutton" onclick="goToCustomPath('/category?category=Ubrania')" >Ubrania</a></li>
                    <li><a class="menubutton" onclick="goToCustomPath('/category?category=Meble')" >Meble</a></li>
                    <li><a class="menubutton" onclick="goToCustomPath('/category?category=Akcesoria')" >Akcesoria</a></li>
                    <li><a class="menubutton" onclick="goToCustomPath('/category?category=Biżuteria)" >Biżuteria</a></li>
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


</body>
</html>
);
export default MoneyHTML;

