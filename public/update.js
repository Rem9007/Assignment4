document.addEventListener("DOMContentLoaded", function(){


  document.getElementById('submitData').addEventListener('click', () => {
    console.log("1");
    const id = document.getElementById('idInput').value;
    const element = document.getElementById('elementInput').value;

    const userData = {
      id: id,
      element: element,
    };
    console.log('User Data:', userData);
    fetch('/UpdateEndpoint', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
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