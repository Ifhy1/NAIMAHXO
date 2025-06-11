const herName = "Naimah"; // Change to her name!
document.getElementById('personal-message').textContent =
  `For ${herName}, the muse who inspires elegance with every step.`;

const quotes = [
  "You wear confidence better than couture.",
  "Runways may end, but your glow doesn’t.",
  "You turn pixels into poetry.",
  "Model behavior? More like magic energy.",
  "Elegance isn’t what you wear. It’s who you are.",
  "Your shine doesn’t need a spotlight.",
  "Every moment you breathe is a perfect pose.",
  "You’re not just photogenic — you’re iconic."
];

function showQuote() {
  const bubble = document.getElementById('quote-bubble');
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  bubble.textContent = quote;
  bubble.classList.add('show');
  bubble.classList.remove('hidden');

  // Auto-show surprise box 3 seconds later
  setTimeout(() => {
    document.getElementById('surprise-box').classList.remove('hidden');
  }, 3000);
}

function closeSurprise() {
  document.getElementById('surprise-box').classList.add('hidden');
}
