// Modify your JavaScript code to fetch facts from the Flask API
function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  // Fetch a random fact from the Flask API
  fetch('/get_fact')
      .then(response => response.json())
      .then(data => {
          const text = data.fact;

          // Create and append text container
          const textContainer = document.createElement('div');
          textContainer.className = 'text-container';
          textContainer.textContent = text;
          bubble.appendChild(textContainer);

          // Set bubble size, position, and animation as before
          // ...

          // Append the bubble to the container and set removal timeout
          const bubbleContainer = document.querySelector('.bubble-container');
          bubbleContainer.appendChild(bubble);

          setTimeout(() => {
              bubble.style.transform = 'translateY(-100vh)';
              setTimeout(() => {
                  bubble.remove();
              }, 1000);
          }, 3000);
      })
      .catch(error => {
          console.error('Error fetching fact:', error);
      });
}
