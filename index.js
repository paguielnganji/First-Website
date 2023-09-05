const toggleSwitch = document.getElementById("dark-mode-toggle");
toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode"); // Ajoute ou supprime la classe "dark-mode" au corps de la page
});

const myTitleElement = document.getElementById('myTitle');
myTitleElement.textContent = 'SKYWARDS AEROSPACE';

function myColor() {
let color = document.getElementById('colorPicker').value;
document.body.style.BackgroundColor = color;
document.getElementById('box').value = color;
}
document.getElementById('colorPicker').addEnventListener(
'input', myColor);

const modeSwitch = document.getElementById("modeSwitch");
const body = document.body;

modeSwitch.addEventListener("change", function() {
  if (this.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');

searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value;
  // Perform search or other actions here with the search term
});

