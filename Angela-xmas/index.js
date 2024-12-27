const popupBtn = document.getElementById('submitBtn');
const colorToggleBtn = document.getElementById('colorToggleBtn');
const nameInput = document.getElementById('nameInput');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const message = document.getElementById('message');
const personalizedMessage = document.getElementById('personalizedMessage');

// Function to show popup with personalized message
popupBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    
    if (name) {
        popup.style.display = 'flex';
        message.textContent = `Merry Christmas, ${name}!`;
        personalizedMessage.textContent = `"Elvis wishes you a rockin' holiday, full of joy and love!"`;
    } else {
        alert("Please enter your name!");
    }
});
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

colorToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('multi-color'); // Toggle the multi-color effect on the entire body
});
