document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const responseDiv = document.getElementById('response');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(form);
  
      fetch('/submit-form', {
        method: 'POST',
        body: new URLSearchParams(formData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(response => response.text())
      .then(data => {
        responseDiv.innerHTML = data;
        responseDiv.classList.add('active');
        form.reset();
      })
      .catch(error => console.error('Error:', error));
    });
  });
  
