import React, {useEffect } from 'react';
import '../css/basket.css';
import wozekImage from '../img/wozek.png'; 
import AukcjeDomowe from '../img/AukcjeDomowe.png'; 
import dama from '../img/dama.png'; 
import fotel from '../img/fotel.png'; 
import { goToCustomPath } from '../js/basket';
import { addProductBox } from '../js/basket';
import { addProductBox2 } from '../js/basket';
import { addProductBox3 } from '../js/basket';
import { removeProduct } from '../js/basket';
import { calculateTotal } from '../js/basket';
import { showAlert } from '../js/basket';

import { useritems } from '../js/basket';
import { expiredItems } from '../js/basket';
import { buyerItems } from '../js/basket';
import { sellerItems } from '../js/basket';

const BasketHTML = () => {

function YourComponent() {
  const handleMultiButtonClick = () => {
    // Tutaj umieść logikę wywoływania funkcji
    sellerItems();
    buyerItems();
    useritems();
  };

  return (
    <div>
      <button type="button" onClick={handleMultiButtonClick}>
        Wywołaj wszystkie funkcje
      </button>
    </div>
  );
}


return (
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charSet="UTF-8" />
    <title>Title</title>
    <link rel="stylesheet" href="../css/basket.css"/>
    <script src="../js/basket.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body id="home">
<header className="header">
    <div className="leftt">
        <a onClick={() => goToCustomPath('/login')}>Zaloguj się!</a>
    </div>
    <div className="RAJ container">
        <a href="/"> <img src={AukcjeDomowe} href="/home" alt="Aukcje Domowe" width="300" height="100" /></a>
        <nav>
            <ul className="menu">
                <li><a className="menubutton" onClick={() =>goToCustomPath('/category?category=Ubrania')} >Ubrania</a></li>
                <li><a className="menubutton" onClick={() =>goToCustomPath('/category?category=Meble')} >Meble</a></li>
                <li><a className="menubutton" onClick={() =>goToCustomPath('/category?category=Akcesoria')} >Akcesoria</a></li>
                <li><a className="menubutton" onClick={() =>goToCustomPath('/category?category=Biżuteria')} >Biżuteria</a></li>
                <li><a className="menubutton" onClick={() =>goToCustomPath('/')} >O nas</a></li>
            </ul>
        </nav>
    </div>
    <div className="log">
        <a href="/basket"> <img src={wozekImage} href="/basket" alt="buttonpng" width="15" height="15" /></a>
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
    <div style={{ backgroundColor: 'white', width: '200px', height: '10px', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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

<YourComponent />
<div className="containerrr">
    <div id="someElementId" className="left">
        {/* zawartość koszyka */}
    </div>
    <div className="right">
        <h2>Aktywne Aukcje</h2>
    </div>
</div>
<br/>
<br/>
<div className="containerrr">
    <div id="someElementId1" className="left">
        {/* zawartość koszyka */}
    </div>
    <div className="right">
        <h2>Zakończone Aukcje</h2>
        <p>Wartość produktów: <span id="total-value">0.00</span> zł</p>
        <p>Dostawa: 20.00 zł</p>
        <p>Suma: <span id="total-sum">0.00</span> zł</p>
        <a href="/money" id="pay-button">Płacę</a>
    </div>
</div>
<br/>
<br/>
<div className="containerrr">
    <div id="someElementId2" className="left">
        {/* zawartość koszyka */}
    </div>
    <div className="right">
        <h2>Twoje oferty</h2>
        <br/>
        <br/>
        <br/>
        <h2>Dodaj nową aukcję</h2>
        <a href="/add-item" id="pay-button">dodaj nową aukcję</a>
    </div>
</div>


<header className="header">
<footer className="footer">
    <div className="card-footer">
        <ul>
            <li>
                <a href="/home"> <img src={AukcjeDomowe} href="/home" alt="Aukcje Domowe" width="250" height="100" /></a>
            </li>
            <li>
                <p>
                    O nas <br/>
                </p>
            </li>
        </ul>
        <ul>
            <li className="title-list">Informacje</li>
					<li><a className="menubutton" onClick={() =>goToCustomPath('/category?category=Ubrania')} >Ubrania</a></li>
                    <li><a className="menubutton" onClick={() =>goToCustomPath('/category?category=Meble')} >Meble</a></li>
                    <li><a className="menubutton" onClick={() =>goToCustomPath('/category?category=Akcesoria')} >Akcesoria</a></li>
                    <li><a className="menubutton" onClick={() =>goToCustomPath('/category?category=Biżuteria')} >Biżuteria</a></li>
                    <li><a className="menubutton" onClick={() =>goToCustomPath('/')} >O nas</a></li>
        </ul>
        <ul>
            <li className="title-list">Moje Konto</li>
					<li><a onClick={() =>goToCustomPath('/login')}>Zaloguj</a></li>
                    <li><a onClick={() =>goToCustomPath('/login')}>Założ konto</a></li>
        </ul>
        <ul className="shops">
            <li className="title-list ">Kontakt</li>
            <li>hello@aukcjedomowe.pl</li>
            <li>Ul.pokoju243  <br/>
                31-567 Kraków</li>
            <li>+48 22 567 88 76 39</li>
            <li>Odwiedź nas:</li>
        </ul>
    </div>
    <p className="by-name">
        &copy; Prawa autorskie 2023 Aukcje Domowe Wszelkie prawa zastrzeżone.
    </p>
	</footer>
</header>

</body>
</html>
);
}
export default BasketHTML;