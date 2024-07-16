// bubbles.js

// Array of different texts for the bubbles
const bubbleTexts = [
  'Pesticides are chemicals used to control pests in agriculture',
  'Seasonal crops are grown during specific times of the year',
  'Integrated pest management combines various pest control strategies',
  'Crop rotation disrupts pest life cycles in seasonal crops',
  'Organic farming emphasizes natural pest control methods',
  'Pesticide residues on crops are regulated to protect consumers',
  'Safe handling of pesticides is crucial for human and environmental health',
  'Pesticides can have unintended environmental consequences'
];

function createBubble() {
  console.log('createBubble function called');
  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  // Generate a random index to select a text from the array
  const randomIndex = Math.floor(Math.random() * bubbleTexts.length);
  const text = bubbleTexts[randomIndex];

  console.log('Text:', text); // Debugging: Log the text content

  // Create a text container div to hold the text
  const textContainer = document.createElement('div');
  textContainer.className = 'text-container';

  // Set the text inside the text container
  textContainer.textContent = text;

  // Append the text container to the bubble
  bubble.appendChild(textContainer);

  // Set the bubble size based on the size of the text container
  textContainer.style.display = 'inline-block'; // Display the text container as inline-block

  const textWidth = textContainer.offsetWidth;
  const textHeight = textContainer.offsetHeight;

  bubble.style.width = `${textWidth}px`;
  bubble.style.height = `${textHeight}px`;

  // Generate a random position for the bubble
  const x = Math.random() * (window.innerWidth - textWidth);
  const y = Math.random() * (window.innerHeight - textHeight);

  bubble.style.left = `${x}px`;
  bubble.style.top = `${y}px`;

  const bubbleContainer = document.querySelector('.bubble-container');
  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.style.transform = 'translateY(-100vh)';
    setTimeout(() => {
      bubble.remove();
    }, 1000);
  }, 3000);
}

setInterval(createBubble, 5000);
