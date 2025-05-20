const pet = {
  hunger: 100,
  happiness: 100,
  energy: 100,
};

// Элементы DOM
const hungerBar = document.getElementById('hunger');
const happinessBar = document.getElementById('happiness');
const energyBar = document.getElementById('energy');
const feedBtn = document.getElementById('feed');
const playBtn = document.getElementById('play');
const sleepBtn = document.getElementById('sleep');
const petImage = document.getElementById('pet-image');

// Обновление прогресс-баров
function updateStats() {
  hungerBar.value = pet.hunger;
  happinessBar.value = pet.happiness;
  energyBar.value = pet.energy;
  
  if (pet.happiness < 30) {
    petImage.textContent = "😢";
  } else {
    petImage.textContent = "🐶";
  }
}

// Таймер ухудшения состояния
setInterval(() => {
  pet.hunger -= 5;
  pet.happiness -= 3;
  pet.energy -= 2;
  
  // Ограничение значений
  if (pet.hunger < 0) pet.hunger = 0;
  if (pet.happiness < 0) pet.happiness = 0;
  if (pet.energy < 0) pet.energy = 0;
  
  updateStats();
}, 5000);

// Обработчики кнопок
feedBtn.addEventListener('click', () => {
  pet.hunger += 20;
  if (pet.hunger > 100) pet.hunger = 100;
  updateStats();
});

playBtn.addEventListener('click', () => {
  pet.happiness += 15;
  pet.energy -= 10;
  updateStats();
});

sleepBtn.addEventListener('click', () => {
  pet.energy += 30;
  pet.happiness -= 5;
  updateStats();
});

// Инициализация
updateStats();