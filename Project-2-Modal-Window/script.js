'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// If the multiple elements have the same class, then use the following
const btnsOpenModal = document.querySelectorAll('.show-modal');

// The below function is to open the modal box, whenever there is a click
const openModal = function () {
  modal.classList.remove('hidden'); // In the HTML Section the paragraph used 'hidden' , in this it is removed
  overlay.classList.remove('hidden'); // This is to blur the background

  // modal.style.display = 'block';
};

// Function to close the modal box , whenever X or background is clicked
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Function to close the screen when Escape button is pressed
// Here the button is checked using the event
const escapeClose = function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); // Here the function has to be called , as we've called a function inside another function
  }
};

// Here then openModal function is applied to all the buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
/*
Function to close the opened paragraph, it will work for all the three paragraphs
*/

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Keyboard events are the global events, so we listen on the whole document
document.addEventListener('keydown', escapeClose);
