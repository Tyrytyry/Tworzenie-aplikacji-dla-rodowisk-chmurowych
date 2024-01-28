import React from 'react';
import { updateItem } from '../js/home';

const generatePanel = ({ id, imageUrl, name, price, updateItem }) => {
  const handleUpdateItem = () => {
    const sumInput = document.getElementById(`sum-${id}`);
    const sum = sumInput.value;
    updateItem(id, sum);
  };




function updateItem(id, price) {
  const token = localStorage.getItem('token');

  const data = {
    itemId: id,
    sum: price
  };

  fetch('http://localhost:8080/updateItem', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Błąd podczas aktualizacji przedmiotu');
    }
    return response.text(); // Zwracamy odpowiedź jako tekst, nie jako JSON
  })
  .then(text => {
    if (text === 'ok') {
      console.log('Aktualizacja udana:', text);
      alert('Aktualizacja udana.');
    } else {
      console.error('Błąd aktualizacji:', text);
      alert(`Błąd aktualizacji: ${text}`);
    }
  })
  .catch(error => {
    console.error('Błąd aktualizacji:', error);
  });
}





  return (
    <div className="box" key={id}>
      <a href="pages/produkt.html" >
        <div id={`${id}Img`}>
          <img src={imageUrl} style={{ maxWidth: '250px' }} alt={name} />
        </div>
      </a>
      <p>{name}</p>
      <p>
        <b>{price} zł.</b>
      </p>
      <div className="razem">
        <form action="/updateItem" method="post">
          <input type="hidden" name="id" value={id} />

          <label htmlFor={`sum-${id}`}>Suma:</label>
          <input type="text" name="sum" id={`sum-${id}`} />
          <br />

          <input type="button" value="Przebij" onClick={handleUpdateItem} />
        </form>
      </div>
    </div>
  );
};

export default generatePanel;