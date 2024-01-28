import React, { useState } from 'react';
import { updateItem } from '../js/home';

const GeneratePanelBasket = ({ product, updateItem }) => {
  const [sum, setSum] = useState('');

  const handleUpdateItem = () => {
    updateItem(product.id, sum);
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
    <div className="cart-item">
      <img src={product.imageUrl} alt={product.name} />
      <div className="product-details">
        <div className="top-row">
          <h4>{product.name}</h4>
          <p className="price">$<span id={`price-${product.id}`} >{product.price} </span></p>
        </div>
        <div className="bottom-row">
          <h5 style={{ color: 'Tomato' }} className="last-bidder">Właściciel: {product.owner}</h5>
          <h5 style={{ color: 'Tomato' }} className="last-bidder">Ostatni licytujący: {product.buyer}</h5>
          <div className="quantity">
            <input type="text" id={`sum-${product.id}`} value={sum} onChange={(e) => setSum(e.target.value)} />
            <button onClick={handleUpdateItem}>Update</button>
          </div>
        </div>
      </div>
    </div>
	
  );
};

export default GeneratePanelBasket;