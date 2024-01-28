       export function goToCustomPath(path) {
            var baseUrl = window.location.protocol + "//" + window.location.host;
            var customUrl = baseUrl + path;
            window.location.href = customUrl;
        }


export function updateItem(id, price) {

  const token = localStorage.getItem('token');

  const formData = new FormData();
  formData.append('id', id);
  formData.append('price', price);

  return fetch('http://localhost:8080/updateItem', {
    method: 'POST',
    body: formData,
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Błąd podczas aktualizacji przedmiotu');
      }
      return response.json();
    })
    .then(data => {
      console.log('Aktualizacja udana:', data);
      return data; 
    })
    .catch(error => {
      console.error('Błąd aktualizacji:', error);
      throw error; 
    });
}







export function addProductBox(id, name, price, imageUrl) {
  var productHTML = `
<div class="box">
  <a id="${id}" href="pages/produkt.html" onclick="storeItemSelected(this.id)">
    <div id="${id}Img">
      <img src="${imageUrl}" style="max-width: 250px">
    </div>
  </a>
  <p>${name}</p>
  <p><b>${price} zł.</b></p>
  <div class="razem">
    <form action="/updateItem" method="post">
      <input type="hidden" name="id" value="${id}">

      <label for="sum">Suma:</label>
      <input type="text" name="sum" id="sum">
      <br>

      <input type="submit" value="Przebij">
    </form>
  </div>
</div>

  `;
  document.getElementById("someElementId").innerHTML += productHTML;
}
export function showPanel() {
  var panel = document.getElementById('panel');
  if (!panel) {
    
    panel = document.createElement('div');
    panel.id = 'panel';
    panel.className = 'panel';

  
    panel.innerHTML = `
      <h3>Tytuł panelu</h3>
      <p>Treść panelu Lorem ipsum dolor sit amet.</p>
      <span class="close-btn">&times;</span>
    `;

  
    var panelContainer = document.getElementById('panelContainer');
    panelContainer.appendChild(panel);

    var closeBtn = panel.querySelector('.close-btn');
    closeBtn.addEventListener('click', hidePanel);
  }

 
  panel.style.display = 'block';
}

export function hidePanel() {
  var panel = document.getElementById('panel');
  if (panel) {
    // Ukrywanie panelu
    panel.style.display = 'none';
  }
}

// Pobieranie elementu zdjęcia
// var image = document.getElementById('myImage');

// Dodawanie nasłuchiwacza zdarzeń dla kliknięcia w zdjęcie
//var image2 = image.addEventListener('click', showPanel);


export function hello() {
const token = localStorage.getItem('token'); // Pobierz token z localStorage

  fetch('http://localhost:8080/rest/home', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
  
    }
  })
  
 
 .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Request failed');
    }
  })
  .then(data => {
	          alert('git');
    console.log(data);
  
  })
  .catch(error => {
	  	          alert('nie git');
    console.error('Error:', error);
 
  });
}

export function gethead() {
  const token = localStorage.getItem('token');

  return fetch('http://localhost:8080/category?category=head', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
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


export function getcategory() {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const categoryValue = urlSearchParams.get('category');

    if (!categoryValue) {
      console.error('Brak wartości category w adresie URL.');
      return;
    }

    const token = localStorage.getItem('token');

    return fetch(`http://localhost:8080/category?category=${categoryValue}`, {
      method: 'GET',
      headers: {
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
