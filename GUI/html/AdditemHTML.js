import React from 'react';
import wozekImage from '../img/wozek.png'; 
import AukcjeDomowe from '../img/AukcjeDomowe.png'; 
import dama from '../img/dama.png'; 
import fotel from '../img/fotel.png'; 

const AdditemHTML = () => (

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

  <h1>Przesyłanie ogłoszenia</h1>

  <form method="post" action="/add-item" enctype="multipart/form-data">
    <label for="name">Nazwa:</label>
    <input type="text" id="name" name="name" required/><br/>

    <label for="price">Cena:</label>
    <input type="number" id="price" name="price" required/><br/>

    <div>
      <label for="category">Kategoria:</label>
      <select id="category" name="category" required>
        <option value="Ubrania">Ubrania</option>
        <option value="Meble">Meble</option>
        <option value="Akcesoria">Akcesoria</option>
        <option value="Biżuteria">Biżuteria</option>
        <option value="Inne">Inne</option>
      </select>
    </div>

    <label for="image">Zdjęcie:</label>
    <input type="file" id="image" name="image" required/><br/>

    <label for="days">Liczba dni:</label>
    <input type="number" id="days" name="days" required/><br/>

    <button type="submit">Dodaj</button>
  </form>

</body>
</html>

);
export default AdditemHTML;

