
      export function goToCustomPath(path) {
            var baseUrl = window.location.protocol + "//" + window.location.host;
            var customUrl = baseUrl + path;
            window.location.href = customUrl;
        }


var counter = 1;

export function addProductBox(id, name, price, owner, buyer, imageUrl, elem) {
  var quantity = 1;
  var totalPrice = price;

var productHTML = `
<div class="cart-item">
  <img src="${imageUrl}" />
  <div class="product-details">
    <div class="top-row">
      <h4>${name}</h4>
      <p class="price">$<span id="price-${counter}" th:text="${totalPrice.toFixed(2)}">{price} </span></p>
    </div>
    <div class="bottom-row">
      <h5 style="color:Tomato;" class="last-bidder">Właściciel: ${owner}</h5>
      <h5 style="color:Tomato;" class="last-bidder">Ostatni licytujący: ${buyer}</h5>
      <div class="quantity">
 <form action="/updateItem" method="post">
       <input type="hidden" name="id" value="${id}">


        </form>
      </div>
    </div>
  </div>
</div>
`;

  document.getElementById(elem).innerHTML += productHTML;

    var priceElement = document.getElementById(`price-${counter}`);
    priceElement.textContent = price.toFixed(2);
  counter++;

  //calculateTotal();
}







export function submitPayment() {

	const ID = document.getElementById('ID').value;
    const ccNumber = document.getElementById('ccNumber').value;
    const ccExpiration = document.getElementById('ccExpiration').value;
    const ccCVV = document.getElementById('ccCVV').value;
    const token = localStorage.getItem('token');


    if (!ccNumber || !ccExpiration || !ccCVV) {
        alert('Wszystkie pola muszą być wypełnione.');
        return;
    }

    const paymentData = {
		ID: ID,
        ccNumber: ccNumber,
        ccExpiration: ccExpiration,
        ccCVV: ccCVV
    };

    // Wysyłka danych na endpoint
    fetch('http://localhost:8080/card/zapiszCard', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(paymentData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Błąd podczas przesyłania płatności');
        }
        return response.text();
    })
    .then(data => {
        if (data === 'ok') {
            alert('Tranzakcja przebiegła pomyślnie.');
        } else if (data === 'nie') {
            alert('Nieudana tranzakcja. Proszę dopisać numer mieszkania.');
        } else {
            alert('Nieznana odpowiedź od serwera.');
        }
    })
    .catch(error => {
        // Obsługa błędów
        console.error('Błąd płatności:', error);
    });
}










export function addProductBox2(id, name, price, owner, buyer, imageUrl) {
  var quantity = 1;
  var totalPrice = price;

var productHTML = `
<div class="cart-item">
  <img src="${imageUrl}" />
  <div class="product-details">
    <div class="top-row">
      <h4>${name}</h4>
      <p class="price">$<span id="price-${counter}" th:text="${totalPrice.toFixed(2)}">{price} </span></p>
    </div>
    <div class="bottom-row">
      <h5 style="color:Tomato;" class="last-bidder">Właściciel: ${owner}</h5>
      <h5 style="color:Tomato;" class="last-bidder">Ostatni licytujący: ${buyer}</h5>
      <div class="quantity">
 <form action="/updateItem" method="post">
       <input type="hidden" name="id" value="${id}">

        </form>
      </div>
    </div>
  </div>
</div>
`;

  document.getElementById("someElementId1").innerHTML += productHTML;

    var priceElement = document.getElementById(`price-${counter}`);
    priceElement.textContent = price.toFixed(2);
  counter++;

 // calculateTotal();
}

export function addProductBox3(id, name, price, owner, buyer, imageUrl) {
  var quantity = 1;
  var totalPrice = price;

var productHTML = `
<div class="cart-item">
  <img src="${imageUrl}" />
  <div class="product-details">
    <div class="top-row">
      <h4>${name}</h4>
      <p class="price">$<span id="price-${counter}" th:text="${totalPrice.toFixed(2)}">{price} </span></p>
    </div>
    <div class="bottom-row">
      <h5 style="color:Tomato;" style="color:Tomato;" class="last-bidder">Właściciel: ${owner}</h5>
      <h5 style="color:Tomato;" class="last-bidder">Ostatni licytujący: ${buyer}</h5>
      <div class="quantity">
      <form action="/updateItem" method="post">
       <input type="hidden" name="id" value="${id}">
          <label for="sum">Suma:</label>
          <input type="text" name="sum" id="sum">
        <input type="submit" value="Przebijam">
        </form>
      </div>
    </div>
  </div>
</div>

`;

  document.getElementById("someElementId").innerHTML += productHTML;

    var priceElement = document.getElementById(`price-${counter}`);
    priceElement.textContent = price.toFixed(2);
  counter++;

  //calculateTotal();
}



export function removeProduct(button, counter) {
  var cartItem = button.parentNode;
  cartItem.remove();

  //calculateTotal();
}

export function submitForm(e) {
  const token = localStorage.getItem('token');
  const form = document.querySelector('form'); 
  const formData = new FormData(form); 

  fetch('http://localhost:8080/add-item', {
    method: 'POST',
    body: formData,
	headers: {
            'Authorization': `Bearer ${token}`
        },
  })
    .then(response => {
      if (response.text) {
		              alert('');
        return response.json();
      } else {
		              alert('');
        throw new Error('Request failed');
      }
    })
    .then(data => {
      console.log('Ogłoszenie zostało dodane:', data);
                  alert('');
    })
    .catch(error => {
      console.error('Błąd:', error);
     alert('');
    });
}



///////////////////////////////////////////////////////////////////
export function sellerItems(isRequestMade) {


  const token = localStorage.getItem('token'); 

  return fetch('http://localhost:8080/sellerItems', {
    method: 'GET',
    headers: {
	  'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
     }
    })
     .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Request failed');
      }
    })
    .catch(error => {
      alert('nie git');
      console.error('Error:', error);
    });
  
}
///////////////////////////////////////////////////////////////////
export function buyerItems(isRequestMade) {

  if (!isRequestMade) {
  const token = localStorage.getItem('token'); 

  fetch('http://localhost:8080/buyerItems', {
    method: 'GET',
    headers: {
	  'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'

    }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed');
    }
  })
  .then(data => {

    console.log(data);

    data.forEach(product => {
      addProductBox(product.id, product.name, product.price, product.owner, product.buyer, product.imageUrl, "someElementId2");
    });


  })
  .catch(error => {
    alert('nie git');
    console.error('Error:', error);
  
  });
  }
}

///////////////////////////////////////////////////////////////////


export function expiredItems() {


  const token = localStorage.getItem('token'); 

  return fetch('http://localhost:8080/expiredItems', {
    method: 'GET',
    headers: {
	  'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
     }
    })
     .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Request failed');
      }
    })
    .catch(error => {
      alert('nie git');
      console.error('Error:', error);
    });
  
}

///////////////////////////////////////////////////////////////////
export function useritems() {


  const token = localStorage.getItem('token'); 

    return fetch('http://localhost:8080/useritems', {
    method: 'GET',
    headers: {
	  'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
     }
    })
     .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Request failed');
      }
    })
    .catch(error => {
      alert('nie git');
      console.error('Error:', error);
    });
  
}
///////////////////////////////////////////////////////////////////