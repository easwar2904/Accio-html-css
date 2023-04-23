// Get the reservations link and popup form
const reservationsLink = document.getElementById('reservations-link');
const popupForm = document.getElementById('popup-form');

// Show the popup form when the reservations link is clicked
reservationsLink.addEventListener('click', (event) => {
  event.preventDefault();
  popupForm.classList.remove('hidden');
});

// Hide the popup form when the user clicks outside of it
document.addEventListener('click', (event) => {
  if (event.target.closest('#popup-form') === null) {
    popupForm.classList.add('hidden');
  }
});
