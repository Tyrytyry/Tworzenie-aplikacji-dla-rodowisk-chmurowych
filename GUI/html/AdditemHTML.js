import React from 'react';
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
import { submitForm } from '../js/basket';

const AdditemHTML = () => (

<html xmlns="http://www.w3.org/1999/xhtml">
<head><li><a onClick={() => goToCustomPath('/login')}>Zaloguj się!</a></li>
    <meta charset="UTF-8" />
    <title>Title</title>
    <link rel="stylesheet" href="../css/basket.css"/>
    <script src="../js/basket.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body id="home">
<header class="header">
    <div class="leftt">
       <a onClick={() => goToCustomPath('/login')}>Zaloguj się!</a>
    </div>
    <div class="RAJ container">
        <a href="/home"> <img src={AukcjeDomowe} href="/home" alt="Aukcje Domowe" width="300" height="100" /></a>
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
        <a href="/basket"> <img src={wozekImage} href="/basket" alt="buttonpng" width="15" height="15" /></a>
        <a onClick={() =>goToCustomPath("/basket")}>0,00zł</a>
    </div>
</header>
		
  <h1>Przesyłanie ogłoszenia</h1>

<form onSubmit={(e) => submitForm(e)}>
  <label htmlFor="name">Nazwa:</label>
  <input type="text" id="name" name="name" required/><br/>

  <label htmlFor="price">Cena:</label>
  <input type="number" id="price" name="price" required/><br/>

  <div>
    <label htmlFor="category">Kategoria:</label>
    <select id="category" name="category" required>
      <option value="Ubrania">Ubrania</option>
      <option value="Meble">Meble</option>
      <option value="Akcesoria">Akcesoria</option>
      <option value="Biżuteria">Biżuteria</option>
      <option value="Inne">Inne</option>
    </select>
  </div>

  <label htmlFor="image">Zdjęcie:</label>
  <input type="file" id="image" name="image" required/><br/>

  <label htmlFor="days">Liczba dni:</label>
  <input type="number" id="days" name="days" required/><br/>

  <button type="submit">Dodaj</button>
</form>
</body>
</html>

);
export default AdditemHTML;

