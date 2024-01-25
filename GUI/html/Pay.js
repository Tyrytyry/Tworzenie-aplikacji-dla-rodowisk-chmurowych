// src/components/AboutHTML.js
import React from 'react';
import wozekImage from '../img/wozek.png'; 
import AukcjeDomowe from '../img/AukcjeDomowe.png'; 
import dama from '../img/dama.png'; 
import fotel from '../img/fotel.png'; 

const payHTML = () => (
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Title</title>
    <link rel="stylesheet" href="../css/basket.css"/>
    <script src="/js/basket.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body id="home">
<header class="header">
    <div class="leftt">
        <a onclick="goToCustomPath('/login')">Zaloguj się!</a>
    </div>
    <div class="RAJ container">
        <a href="/home"> <img src={AukcjeDomowe} alt="Aukcje Domowe" width="300" height="100" /></a>
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
        <a href="/basket"> <img src={wozekImage} alt="buttonpng" width="15" height="15" /></a>
		<a onclick="/basket">0,00zł</a>
    </div>
</header>

<br/>
<br/>
<br/>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div style={{ backgroundColor: '#35A194', width: '200px', height: '10px', marginRight: '1cm', borderRadius: '10px', display: 'flex', flexDirection: 'column-reverse' }}>
    <p><br/></p>
    <p>Twój koszyk</p>
  </div>
  <div style={{ backgroundColor: '#35A194', width: '200px', height: '10px', borderRadius: '10px', display: 'flex', flexDirection: 'column-reverse' }}>
    <p><br/></p>
    <p>Dostawa i płatność</p>
  </div>
  <div style={{ backgroundColor: '#35A194', width: '200px', height: '10px', marginLeft: '1cm', borderRadius: '10px', display: 'flex', flexDirection: 'column-reverse' }}>
    <p><br/></p>
    <p>Gotowe</p>
  </div>
</div>
<br/>
<br/>
<br/>

<div class="container">
    <div class="left">

		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<h2>Dane odbiorcy do przesyłki</h2>
			<input type="text" placeholder="Imię" style={{ width: '189px', marginBottom: '15px' }} />
			<input type="text" placeholder="Nazwisko" style={{ width: '189px', marginBottom: '15px' }} />
				<div>
					<input type="text" placeholder="Ulica i nr" style={{ width: '189px' }} />
					<input type="text" placeholder="Nr mieszkania" style={{ width: '189px', marginLeft: '15px' }} />
				</div>
				<input type="text" placeholder="Kod pocztowy" style={{ width: '189px', marginBottom: '15px' }} />
				<input type="text" placeholder="Miejscowość" style={{ width: '189px', marginBottom: '15px' }} />
				<li><a class="menubutton" href="pay">Zmień adres</a></li>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <form>
                <h2>Dostawa</h2>
                <label>
                    <input type="checkbox" name="courier" value="DHL" id="kurier1"/>
                    Kurier DPD
                </label>
                <br/>
                <label>
                    <input type="checkbox" name="courier" value="UPS" id="kurier2"/>
                    Kurier DHL
                </label>
            </form>
        </div>
    </div>
    </div>
    <div class="right">
        <h2>Podsumowanie </h2>
        <p>Wartość produktów: 100,00 zł</p>
        <p>Razem: 120,00 zł</p>

        <a href="/money" id="pay-button">Płacę</a>
    </div>

</body>
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
                    <a href="/home"> <img src={AukcjeDomowe} alt="Aukcje Domowe" width="250" height="100"/></a>
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

</html>
);
export default payHTML;

