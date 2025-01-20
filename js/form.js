//form validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    
    if (name === '' || email === '') {
      alert('Please fill in all fields');
      return;
    }
  
    alert('Form submitted successfully!');
  });
  