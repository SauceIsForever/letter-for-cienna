// Get elements
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const container = document.querySelector('.container');

// Function to create and animate balloons
function createBalloons() {
    const balloonColors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#C44569', '#F8B500'];

    for (let i = 0; i < 12; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';

        const randomColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        balloon.style.background = randomColor;

        // Random horizontal position
        const randomLeft = Math.random() * 100;
        balloon.style.left = randomLeft + '%';

        // Random animation duration between 3-5 seconds
        const randomDuration = 3 + Math.random() * 2;
        balloon.style.animationDuration = randomDuration + 's';

        // Random animation delay
        const randomDelay = Math.random() * 0.5;
        balloon.style.animationDelay = randomDelay + 's';

        container.appendChild(balloon);

        // Remove balloon after animation completes
        setTimeout(function() {
            balloon.remove();
        }, (randomDuration + randomDelay) * 1000);
    }
}

// Add click event to envelope
envelope.addEventListener('click', function() {
    // Add opening animation class
    envelope.classList.add('opening');

    // After animation completes, hide envelope and show letter
    setTimeout(function() {
        envelope.style.display = 'none';
        letter.classList.remove('hidden');

        // Slight delay before showing letter for smooth transition
        setTimeout(function() {
            letter.classList.add('show');
            // Start balloon animation when letter appears
            createBalloons();
        }, 50);
    }, 600); // 600ms matches the CSS transition time
});