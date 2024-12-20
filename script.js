
let candlesBlownOut = 0;
const totalCandles = 3;
let messageRevealed = false; // To ensure message is only revealed once
// Hide the notification after candles are blown out
document.addEventListener('DOMContentLoaded', () => {
  const notification = document.getElementById('notification');
  const totalCandles = 3; // Adjust this value to the number of candles
  let candlesBlownOut = 0;

  // Show the notification when the page loads
  notification.style.display = 'block';

  // Function to handle blowing out candles
function blowOutCandle(candleElement) {
  if (candleElement.classList.contains('lit')) {
    candleElement.classList.remove('lit');
    candleElement.classList.add('blown-out');
    candlesBlownOut++;
    
     // Hide the notification and reveal the message when all candles are blown out
      if (candlesBlownOut === totalCandles) {
        notification.style.display = 'none'; // Hide notification
        revealMessage();
        triggerConfetti();
      }
    }
  }

 // Attach event listeners to candles
 const candles = document.querySelectorAll('.candle');
 candles.forEach((candle) => {
   candle.addEventListener('click', () => blowOutCandle(candle));
 });

  // Function to reveal the hidden message
function revealMessage() {
  const hiddenMessage = document.getElementById('hidden-message');
  const messageText = "You are the sweetest thing that ever came into this world on a cold winter day... and maybe that's why winter has always been my favorite."; // Store the full message in a separate variable

  const story = document.getElementById('story');
  story.style.display = 'block'; // Show the hidden message container

  // Typewriter effect for message reveal
  let i = 0;
  const speed = 50; // Speed for typewriter effect
  hiddenMessage.innerHTML = ''; // Clear the message before typing starts

   // Typewriter effect
  function typeWriter() {
    if (i < messageText.length) {
      hiddenMessage.innerHTML += messageText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter(); // Start the typewriter effect
}


function triggerConfetti() {
  // Confetti burst logic (basic implementation)
  const confettiContainer = document.createElement('div');
  confettiContainer.classList.add('confetti-container');
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
    confettiContainer.appendChild(confetti);
    confetti.style.setProperty('--color', Math.random());

  }

  setTimeout(() => {
    confettiContainer.remove();
  }, 5000); // Confetti disappears after 5 seconds
}


// Snowflake generation (for visual effect)
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
  document.body.appendChild(snowflake);
  setTimeout(() => snowflake.remove(), 5000);
}


setInterval(createSnowflake, 400);  // Generate snowflakes continuously

})
document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('birthday-song');

  // Set volume to 50% (range is 0.0 to 1.0)
  music.volume = 0.2;

  // Other existing code here...
});
