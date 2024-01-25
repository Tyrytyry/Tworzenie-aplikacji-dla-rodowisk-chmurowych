import React from 'react';
import '../css/basket.css';
import wozekImage from '../img/wozek.png'; 
import AukcjeDomowe from '../img/AukcjeDomowe.png'; 
import dama from '../img/dama.png'; 
import fotel from '../img/fotel.png'; 

const BasketHTML = () => (
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <link rel="stylesheet" href="../css/basket.css"/>
    <script src="../js/basket.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body id="home">
<header class="header">
    <div class="leftt">
        <li><a honclick="goToCustomPath('/login')">Zaloguj się!</a></li>
    </div>
    <div class="RAJ container">
        <a href="/home"> <img src={AukcjeDomowe} href="/home" alt="Aukcje Domowe" width="300" height="100" /></a>
        <nav>
            <ul class="menu">
                <li><a class="menubutton" onclick="goToCustomPath('/category?category=Ubrania')" >Ubrania</a></li>
                <li><a class="menubutton" onclick="goToCustomPath('/category?category=Meble')" >Meble</a></li>
                <li><a class="menubutton" onclick="goToCustomPath('/category?category=Akcesoria')" >Akcesoria</a></li>
                <li><a class="menubutton" onclick="goToCustomPath('/category?category=Biżuteria)" >Biżuteria</a></li>
                <li><a class="menubutton" onclick="goToCustomPath('/home')" >O nas</a></li>
            </ul>
        </nav>
    </div>
    <div class="log">
        <a href="/basket"> <img src={wozekImage} href="/basket" alt="buttonpng" width="15" height="15" /></a>
        <a onclick="/basket">0,00zł</a>
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
<button type="button" onclick="addProductBox('1', 'Marchew Berlikum', 5.29, 'produkty/roxana-kaboli-W0L2LbXoEQI-unsplash%201.png')">Dodaj produkt</button>

<div class="containerrr">
    <div id="someElementId" class="left">
        {/* zawartość koszyka */}
    </div>
    <div class="right">
        <h2>Aktywne Aukcje</h2>
    </div>
</div>
<br/>
<br/>
<div class="containerrr">
    <div id="someElementId1" class="left">
        {/* zawartość koszyka */}
    </div>
    <div class="right">
        <h2>Zakończone Aukcje</h2>
        <p>Wartość produktów: <span id="total-value">0.00</span> zł</p>
        <p>Dostawa: 20.00 zł</p>
        <p>Suma: <span id="total-sum">0.00</span> zł</p>
        <a href="/pay" id="pay-button">Płacę</a>
    </div>
</div>
<br/>
<br/>
<div class="containerrr">
    <div id="someElementId2" class="left">
        {/* zawartość koszyka */}
    </div>
    <div class="right">
        <h2>Twoje oferty</h2>
        <br/>
        <br/>
        <br/>
        <h2>Dodaj nową aukcję</h2>
        <a href="/add-item" id="pay-button">dodaj nową aukcję</a>
    </div>
</div>

<h1>Lista przedmiotów</h1>

<h2>Przedmioty sprzedającego:</h2>
<table>
    <tr>
        <th>ID</th>
        <th>Nazwa</th>
        <th>Cena</th>
        <th>Obrazek</th>
        <th>Kategoria</th>
        <th>Właściciel</th>
        <th>Kupujący</th>
        <th>Czas</th>
    </tr>
	{/* Dane przedmiotów sprzedającego */}
</table>

<h2>Przedmioty kupującego:</h2>
<table>
    <tr>
        <th>ID</th>
        <th>Nazwa</th>
        <th>Cena</th>
        <th>Obrazek</th>
        <th>Kategoria</th>
        <th>Właściciel</th>
        <th>Kupujący</th>
        <th>Czas</th>
    </tr>
	{/* Dane przedmiotów kupującego */}
</table>

<h2>Wygasłe przedmioty:</h2>
<table>
    <tr>
        <th>ID</th>
        <th>Nazwa</th>
        <th>Cena</th>
        <th>Obrazek</th>
        <th>Kategoria</th>
        <th>Właściciel</th>
        <th>Kupujący</th>
        <th>Czas</th>
    </tr>
    {/* Dane wygasłych przedmiotów */}
</table>

<header class="header">
<footer class="footer">
    <div class="card-footer">
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
            <li class="title-list">Informacje</li>
					<li><a class="menubutton" onclick="goToCustomPath('/category?category=Ubrania')" >Ubrania</a></li>
                    <li><a class="menubutton" onclick="goToCustomPath('/category?category=Meble')" >Meble</a></li>
                    <li><a class="menubutton" onclick="goToCustomPath('/category?category=Akcesoria')" >Akcesoria</a></li>
                    <li><a class="menubutton" onclick="goToCustomPath('/category?category=Biżuteria)" >Biżuteria</a></li>
                    <li><a class="menubutton" onclick="goToCustomPath('/home')" >O nas</a></li>
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
export default BasketHTML;