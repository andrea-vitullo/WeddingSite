// Add guest functionality
document.getElementById('add-guest').addEventListener('click', function() {
    const guestList = document.getElementById('guest-list');
    const guestCount = guestList.getElementsByClassName('guest-field').length + 1;
    
    // Create a new guest field container
    const newField = document.createElement('div');
    newField.className = 'guest-field';
    newField.innerHTML = `<input type="text" id="guest${guestCount}" name="guest_names[]" placeholder="Nome e cognome" required>`;
    
    guestList.appendChild(newField);
  });
  
  // Optional: Additional form submission handling or validation can go here.
  document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default submission for demonstration
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = 'Grazie eh!';
  });
  