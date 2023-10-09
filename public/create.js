document.addEventListener("DOMContentLoaded", function(){


  document.getElementById('submitData').addEventListener('click', () => {
    console.log("1");
    const number = document.getElementById('numberInput').value;
    const roadname = document.getElementById('roadnameInput').value;
    const city = document.getElementById('cityInput').value;

    const adressData = {
      number: number,
      roadname: roadname,
      city: city,
    };
    console.log('User Data:', adressData);
    fetch('/CreateEndpoint', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adressData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Data submitted successfully!');
        } else {
          alert('An error occurred while submitting the data.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while submitting the data.');
      });
  });
});