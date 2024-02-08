document.addEventListener("DOMContentLoaded", function () {
    const heartBg = document.querySelector('.heart-bg');
    const centerHeart = document.getElementById('main-heart');
    const loveMessage = document.getElementById('love-message');

    centerHeart.addEventListener('click', () => {
        loveMessage.style.opacity = 1;
    });

    // Function to calculate random position within the viewport
    function getRandomPosition(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Function to get a random heart emoji URL
    function getRandomHeartUrl() {
        const heartColors = ['❤️', '🧡', '💛', '💚', '💙', '💜']; // Different heart colors
        return `https://emojicdn.elk.sh/${heartColors[Math.floor(Math.random() * heartColors.length)]}`;
    }

    // Recursive function to create hearts spread out across the background
    function createHearts() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const numHearts = 100; // Number of hearts to create

        for (let i = 0; i < numHearts; i++) {
            const size = getRandomPosition(15, 35); // Random size between 15px and 35px
            const x = getRandomPosition(0, viewportWidth - size); // Random x position within viewport
            const y = getRandomPosition(0, viewportHeight - size); // Random y position within viewport

            const heart = document.createElement('img');
            heart.src = getRandomHeartUrl(); // Get a random heart emoji URL
            heart.className = 'heart';
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;
            heartBg.appendChild(heart);
        }
    }

    // Call the function to create spread-out hearts across the background
    createHearts();

    // Chatbox functionality
    const chatInput = document.querySelector('.chat-input input');
    const chatMessages = document.querySelector('.chat-messages');

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    document.querySelector('.chat-input button').addEventListener('click', sendMessage);

    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
