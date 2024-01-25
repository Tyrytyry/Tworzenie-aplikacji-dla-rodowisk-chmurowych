import React from 'react';

import '../css/home.css';
import wozekImage from '../img/wozek.png'; 
import AukcjeDomowe from '../img/AukcjeDomowe.png'; 
import dama from '../img/dama.png'; 
import fotel from '../img/fotel.png'; 

const HomesHTML = () => (
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Title</title>
    <link rel="stylesheet" href="../css/home.css"/>
    <script src="../js/home.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <div>
        <script>
		{`
            $(document).ready(function() {
                addProductBox(4, 'Szafka RTV', '1590.29 zł.', 'produkty/półka.png');
            });
		`}
        </script>
    </div>
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
<div class="produkt">
    <button onclick="addProductBox(4, 'Szafka RTV', '1590.29 zł.', '../produkty/półka.png')">Dodaj produkt</button>
    <br/>
    <br/>
    <br/>
    <br/>
    <section id="someElementId" class="flexbox">

    </section>
    <br/>
    <br/>

    <div class="rounded-container">
        <div class="image-container">
            <img src={fotel} alt="Zdjęcie" style={{ width: '60%', height: 'auto' }} />
        </div>
        <div class="text-container">
            <p>Fotel RED STYLE to stylowy i wygodny mebel, <br/>
                który wspaniale wpasuje się w każde wnętrze <br/>
                urządzone w stylu retro, vintage lub boho. <br/>
                Charakteryzuje się on prostym i eleganckim designem oraz<br/>
                solidnym wykonaniem z trwałych materiałów.<br/>
                <br/>
                Fotel Vinted jest doskonałym wyborem dla <br/>
                osób ceniących sobie wygodę i stylowe dodatki<br/>
                do wnętrza. Idealnie sprawdzi się w salonie, <br/>
                pokoju gościnnym, gabinecie czy czytelni.</p>
        </div>
    </div>
    <br/>
    <br/>
	</div>
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
	
	</body>
</html>
);
export default HomesHTML;
