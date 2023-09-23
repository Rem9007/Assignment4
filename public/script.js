document.getElementById('getFactButton').addEventListener('click', () => {
    const numberInput = document.getElementById('numberInput').value;
    fetch(`/api/Excuse/${numberInput}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => {
        try {
          const parsedData = JSON.parse(data);
          const factResult = document.getElementById('factResult');
          factResult.textContent = parsedData.fact;
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  });
  