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
  


(function () {
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

// Set wedding date to August 30, 2025
const weddingDate = new Date("August 30, 2025 00:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime(),
        distance = weddingDate - now;
    
    document.getElementById("days").innerText = Math.floor(distance / day);
    document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
    document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
    document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

    // When the countdown is finished, update the headline and reveal content
    if (distance < 0) {
    document.getElementById("headline").innerText = "È il nostro giorno!";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("content").style.display = "block";
    clearInterval(x);
    }
}, 1000);
}());
  
  