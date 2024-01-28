import React, {useEffect, useState } from 'react';

import '../css/home.css';
import wozekImage from '../img/wozek.png'; 
import AukcjeDomowe from '../img/AukcjeDomowe.png'; 
import dama from '../img/dama.png'; 
import fotel from '../img/fotel.png'; 
import { goToCustomPath } from '../js/home';
import { addProductBox } from '../js/home';
import { showPanel } from '../js/home';
import { hidePanel } from '../js/home';
import { hello } from '../js/home';
import { gethead } from '../js/home';
import generatePanel from './generatePanel';

const HomesHTML = () => {

 const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await gethead();
        setItemsData(data);
        console.log(data);
      } catch (error) {
        alert('BLAD pobierania danych');
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

return (
<html>
<head>
	<meta charSet="UTF-8" />
    <title>Title</title>
    <link rel="stylesheet" href="../css/home.css"/>
    <script src="../js/home.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <div>

    </div>
</head>
<body id="home">
<header className="header">
    <div className="leftt">
        <a onClick={() => goToCustomPath('/login')}>Zaloguj się!</a>
    </div>
    <div className="RAJ container">
        <a href="/"> <img src={AukcjeDomowe} alt="Aukcje Domowe" width="300" height="100" /></a>
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
        <a href="/basket"> <img src={wozekImage} alt="buttonpng" width="15" height="15" /></a>
        <a onClick={() =>goToCustomPath("/basket")}>0,00zł</a>
    </div>
</header>
<div className="produkt">
    <button onClick={() =>onclick=addProductBox(1, 'Szafka RTV', '1590.29 zł.', '../produkty/półka.png')}>Dodaj produkt</button>
	<button onClick={() =>onclick=hello()}>hello</button>

    <br/>
    <br/>
    <br/>
    <br/>

    <section id="someElementId" className="flexbox">
   

      {itemsData.map((item) => generatePanel(item))}
    
    </section>
	


	
    <br/>
    <br/>

    <div className="rounded-container">
        <div className="image-container">
            <img src={fotel} alt="Zdjęcie" style={{ width: '60%', height: 'auto' }} />
        </div>
        <div className="text-container">
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
    <header className="header">
        <footer className="footer">
            <div className="card-footer">
                <ul>
                    <li>
                <a href="/"> <img src={AukcjeDomowe} href="/" alt="Aukcje Domowe" width="250" height="100" /></a>
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
export default HomesHTML;
