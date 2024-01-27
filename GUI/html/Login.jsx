// src/components/AboutHTML.js
import React, { useState } from 'react';
import '../css/login.css';
import wozekImage from '../img/wozek.png'; 
import AukcjeDomowe from '../img/AukcjeDomowe.png'; 
import dama from '../img/dama.png'; 
import fotel from '../img/fotel.png'; 

import { changeForm } from '../js/login';
import { login } from '../js/login';
import { register } from '../js/login';
import { goToCustomPath } from '../js/login';

import { generateRegisterPanel } from '../js/login';
import generateLoginPanel from '../js/login';


const LoginHTML = () => (

<html xmlns="http://www.w3.org/1999/xhtml">
<head charset="UTF-8">
  <meta charset="UTF-8"/>
  <title>Title</title>
  <link rel="stylesheet" href="../css/login.css"/>
  <script src="../js/login.js" defer></script>
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
                <li><a class="menubutton" onClick={() =>goToCustomPath('/category?category=Ubrania')} >Ubrania</a></li>
                <li><a class="menubutton" onClick={() =>goToCustomPath('/category?category=Meble')} >Meble</a></li>
                <li><a class="menubutton" onClick={() =>goToCustomPath('/category?category=Akcesoria')} >Akcesoria</a></li>
                <li><a class="menubutton" onClick={() =>goToCustomPath('/category?category=Biżuteria')} >Biżuteria</a></li>
                <li><a class="menubutton" onClick={() =>goToCustomPath('/')} >O nas</a></li>
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
<div class="centr">

<script>

</script>


    <br/>
    <br/>
    <br/>
    <br/>
 
 
    <div>
   
    </div>
    <section id="formContainer" class="flexbox">

    </section>
  
      <div id="formContainer">

      {generateLoginPanel()}
    </div>
  </div>
<br/>
<br/>

</body>

<br/>
<br/>
<header class="header">
  <footer class="footer">
    <div class="card-footer">
      <ul>
        <li>
          <a onclick="goToCustomPath('/home')"> <img src={AukcjeDomowe} onclick="goToCustomPath('/home')" alt="Aukcje Domowe" width="250" height="100"/></a>
        </li>
        <li>
          <p>
            O nas <br/>
          </p>
        </li>
      </ul>
      <ul>
        <li class="title-list">Informacje</li>
        <li><a onclick="goToCustomPath('/category?category=Ubrania')">Ubrania</a></li>
        <li><a onclick="goToCustomPath('/category?category=Meble')">Meble</a></li>
        <li><a onclick="goToCustomPath('/category?category=Akcesoria')">Akcesoria</a></li>
        <li><a onclick="goToCustomPath('/category?category=Biżuteria)">Biżuteria</a></li>
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
export default LoginHTML;

