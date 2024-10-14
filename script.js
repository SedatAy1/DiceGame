let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let rollButton = document.getElementById('roll-button');
let result = document.getElementById('result');
let playerNameInput = document.getElementById('player1-name');
let player1Label = document.getElementById('player1-label');

// Zar görsellerinin dosya adlarını tutan bir dizi
const diceImages = [
  'dice1.png',
  'dice2.png',
  'dice3.png',
  'dice4.png',
  'dice5.png',
  'dice6.png'
];

function rollDice() {
  let random1 = Math.floor(Math.random() * 6) + 1;
  let random2 = Math.floor(Math.random() * 6) + 1;
  return [random1, random2];
}

function updateDiceDisplay(random1, random2) {
  dice1.src = diceImages[random1 - 1]; // Görseli güncelle
  dice2.src = diceImages[random2 - 1]; // Görseli güncelle
}

function displayResult(random1, random2, playerName) {
  if (random1 > random2) {
    result.innerHTML = `${playerName || 'Player 1'} Kazandı! 🎉`;
  } else if (random1 < random2) {
    result.innerHTML = `Player 2 (PC) Kazandı! 🤖`;
  } else {
    result.innerHTML = `Berabere! 🤝`;
  }
}

function startRollAnimation() {
  let intervalId = setInterval(() => {
    let [random1, random2] = rollDice();
    updateDiceDisplay(random1, random2);
  }, 100); // 100ms'de bir görsel değişecek

  setTimeout(() => {
    clearInterval(intervalId);
    let [finalRandom1, finalRandom2] = rollDice();
    updateDiceDisplay(finalRandom1, finalRandom2);
    let playerName = playerNameInput.value;
    player1Label.textContent = playerName || 'Player 1'; // Player 1 adını güncelle
    displayResult(finalRandom1, finalRandom2, playerName);
    rollButton.disabled = false;
    rollButton.innerHTML = "Zarları At!";
  }, 3000); // 3 saniyelik animasyon
}

rollButton.addEventListener('click', function() {
  result.innerHTML = "";  // Sonucu temizle
  rollButton.disabled = true;
  rollButton.innerHTML = "Zar Atılıyor...";
  startRollAnimation();
});
