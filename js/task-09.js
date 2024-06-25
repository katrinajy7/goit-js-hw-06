function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Get references to the button and span elements
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Add event listener for the button click event
changeColorButton.addEventListener('click', function() {
  // Generate a random color
  const randomColor = getRandomHexColor();

  // Set the background color of the body
  document.body.style.backgroundColor = randomColor;

  // Update the color span with the new color value
  colorSpan.textContent = randomColor;
});