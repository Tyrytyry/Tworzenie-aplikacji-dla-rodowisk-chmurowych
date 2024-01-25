// src/components/AboutHTML.js
import React from 'react';
import wozekImage from '../img/wozek.png'; 
import AukcjeDomowe from '../img/AukcjeDomowe.png'; 
import dama from '../img/dama.png'; 
import fotel from '../img/fotel.png'; 

const CategoryHTML = () => (
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Title</title>
    <link rel="stylesheet" href="../css/home.css"/>
    <script src="../js/home.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
	{`
        $(document).ready(function() {
            addProductBox(
            );
        });
	`}
    </script>
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

    <div class="rounded-container">
        <div class="text-container">
            <h2>Wspomnienia w stylu vintage <br/>- nowa historia Twojego domu</h2><br/>

            <div class="button-container">
                <button class="button-red">Ubrania</button>
                <button class="button-green">Meble</button>
                <button class="button-blue">Akcesoria</button>
                <button class="button-yellow">Biżuteria</button>
            </div>

        </div>
        <div class="image-container">
            <img src={dama} alt="Zdjęcie" style={{ width: '100%', height: 'auto' }} />
        </div>
    </div>
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
                    <li><a onclick="goToCustomPath('/category?category=Ubrania')" >Ubrania</a></li>
                    <li><a onclick="goToCustomPath('/category?category=Meble')" >Meble</a></li>
                    <li><a onclick="goToCustomPath('/category?category=Akcesoria')" >Akcesoria</a></li>
                    <li><a onclick="goToCustomPath('/category?category=Biżuteria)" >Biżuteria</a></li>
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
export default CategoryHTML;

