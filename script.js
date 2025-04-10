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
  
  // Burger menu toggle
  const burger = document.querySelector('.burger');
  const menuOverlay = document.querySelector('.menu-overlay');
  
  burger.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  });
  