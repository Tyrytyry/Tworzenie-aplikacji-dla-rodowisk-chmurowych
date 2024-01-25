// src/components/AboutHTML.js
import React from 'react';
import wozekImage from '../img/wozek.png'; 
import AukcjeDomowe from '../img/AukcjeDomowe.png'; 
import dama from '../img/dama.png'; 
import fotel from '../img/fotel.png'; 

const ItemsHTML = () => (
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8"/>
    <title>Title</title>
    <link rel="stylesheet" href="../css/home.css"/>
    <script src="/js/home.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <div>
        <script>
		{`
            $(document).ready(function() {
                addProductBox(4, 'Szafka RTV', '1590.29 zł.', '../produkty/półka.png');
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
                    <li><a class="menubutton" onclick="goToCustomPath('/category?category=Bizuteria')" >Biżuteria</a></li>
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
    <section id="someElementId" class="flexbox">
    </section>
</div>
<br/>

<style>
    .panel {
        position: absolute;
        background-color: #ffffff;
        border: 1px solid #cccccc;
        padding: 10px;
        display: none;
    }

    .close-btn {
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
    }

    .product {
        border: 1px solid #ccc;
        padding: 20px;
        width: 300px;
        text-align: center;
    }

    .product h2 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .product img {
        width: 200px;
        height: auto;
        margin-bottom: 10px;
    }

    .product p {
        font-size: 14px;
        margin-bottom: 10px;
    }

    .product button {
        background-color: #4caf50;
        color: #fff;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }
</style>

<div class="product">
    <h2>Nazwa produktu</h2>
    <img src="../img/AukcjeDomowe.png" alt="Zdjęcie produktu">
    <p>Opis produktu Lorem ipsum dolor sit amet.</p>
    <button class="add-to-cart">Dodaj do koszyka</button>
</div>

<div style="position: relative;">
    <img src="../img/AukcjeDomowe.png" id="myImage" alt="Zdjęcie">
    <div id="panelContainer"></div>
</div>

<div class="rounded-container">
    <div class="text-container">
        <h2>Wspomnienia w stylu vintage <br>- nowa historia Twojego domu</h2><br>

        <div class="button-container">
            <button class="button-red">Ubrania</button>
            <button class="button-green">Meble</button>
            <button class="button-blue">Akcesoria</button>
            <button class="button-yellow">Biżuteria</button>
        </div>
    </div>
    <div class="image-container">
        <img src="../img/dama.png" alt="Zdjęcie" style="width: 100%; height: auto; ">
    </div>
</div>
<br>
<br>

<header class="header">
    <footer class="footer">
        <div class="card-footer">
            <ul>
                <li>
                    <a href="/home"> <img src="../img/AukcjeDomowe.png" alt="Aukcje Domowe" width="250" height="100"></a>
                </li>
                <li>
                    <p>
                        O nas <br>
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
                <li>Ul.pokoju243  <br>
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

</div>
</body>
</html>
);
export default ItemsHTML;

