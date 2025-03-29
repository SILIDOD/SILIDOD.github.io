
// Get the DOM elements
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const quantityInput = document.getElementById('quantity');

// Decrease the quantity
decreaseButton.addEventListener('click', function() {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) { // Prevent going below 1
    quantityInput.value = currentValue - 1;
  }
});

// Increase the quantity
increaseButton.addEventListener('click', function() {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});


body.style.backgroundColor = "blue.
0 ";


window.addEventListener("load",()=>{

  const spinner = document.getElementById("spinner");
  const projectContent = document.getElementById("project-content");

  setTimeout(()=>{
spinner.style.display = "none";
projectContent.style.display =" block";
  } ,2000);
})
