let candlesBlownOut = 0;
const totalCandles = 3;
let messageRevealed = false; // To ensure message is only revealed once

function blowOutCandle(candleElement) {
  if (candleElement.classList.contains('lit')) {
    candleElement.classList.remove('lit'); // Remove the flame
    candleElement.classList.add('blown-out'); // Add blown-out class
    candlesBlownOut++;

    // If all candles are blown out and message hasn't been revealed yet, reveal it
    if (candlesBlownOut === totalCandles && !messageRevealed) {
      messageRevealed = true; // Set flag to prevent re-trigger
      revealMessage(); // Call to reveal the hidden message
      triggerConfetti(); // Trigger confetti effect
    }
  }
}

function revealMessage() {
  const hiddenMessage = document.getElementById('hidden-message');
  const messageText = "You are the sweetest thing that came into this world on a cold winter day... and maybe that's why winter has always been my favorite."; // Store the full message in a separate variable

  const story = document.getElementById('story');
  story.style.display = 'block'; // Show the hidden message container

  // Typewriter effect for message reveal
  let i = 0;
  const speed = 100; // Speed for typewriter effect
  hiddenMessage.innerHTML = ''; // Clear the message before typing starts

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

setInterval(createSnowflake, 200);  // Generate snowflakes continuously
