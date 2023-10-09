document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('submitData').addEventListener('click', () => {
    const number = document.getElementById('numberInput').value;
    const roadname = document.getElementById('roadnameInput').value;
    const city = document.getElementById('cityInput').value;

    const adressData = {
      number: number,
      roadname: roadname,
      city: city,
    };

    fetch('/SelectEndpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adressData),
    })
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          // Sélectionnez l'élément avec l'id "display"
          const displayElement = document.getElementById('display');

          // Créez un élément de paragraphe pour afficher les données
          const paragraph = document.createElement('p');
          paragraph.textContent = `Number: ${data[i].number}, Road Name: ${data[i].roadname}, City: ${data[i].city}`;

          // Ajoutez le paragraphe à l'élément "display"
          displayElement.appendChild(paragraph);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error');
      });
  });
});
